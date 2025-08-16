import React, { useEffect, useRef, useState } from "react";
import { BrowserMultiFormatReader } from "@zxing/browser";

const beep = () => {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = "sine";
    o.frequency.value = 880;
    o.connect(g);
    g.connect(ctx.destination);
    g.gain.setValueAtTime(0.001, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.2, ctx.currentTime + 0.01);
    o.start();
    setTimeout(() => {
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
      o.stop(ctx.currentTime + 0.16);
    }, 100);
  } catch {}
};

const formatDateTime = (d) =>
  `${d.toLocaleDateString()} ${d.toLocaleTimeString()}`;

export default function CheckinKiosk() {
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const controlsRef = useRef(null);
  const [devices, setDevices] = useState([]);
  const [deviceId, setDeviceId] = useState();
  const [isScanning, setIsScanning] = useState(false);
  const [torchOn, setTorchOn] = useState(false);
  const [permission, setPermission] = useState("prompt");
  const [lastResult, setLastResult] = useState("");
  const [history, setHistory] = useState([]);
  const [note, setNote] = useState("");
  const [showPopup, setShowPopup] = useState(false); // popup state

  useEffect(() => {
    const loadDevices = async () => {
      try {
        const permissionStatus = await navigator.permissions
          .query({ name: "camera" })
          .catch(() => null);
        if (permissionStatus && permissionStatus.state) {
          setPermission(permissionStatus.state);
          permissionStatus.onchange = () =>
            setPermission(permissionStatus.state);
        }
        const all = await navigator.mediaDevices.enumerateDevices();
        const cams = all.filter((d) => d.kind === "videoinput");
        setDevices(cams);
        if (!deviceId && cams.length) {
          const back = cams.find((c) =>
            /back|rear|environment/i.test(c.label)
          );
          setDeviceId(back ? back.deviceId : cams[0].deviceId);
        }
      } catch (e) {
        console.error(e);
      }
    };
    loadDevices();
  }, []);

  const startScan = async () => {
    if (!videoRef.current) return;
    try {
      setIsScanning(true);
      const reader = new BrowserMultiFormatReader();

      const constraints = {
        video: {
          deviceId: deviceId ? { exact: deviceId } : undefined,
          facingMode: deviceId ? undefined : { ideal: "environment" },
        },
        audio: false,
      };

      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      streamRef.current = stream;
      videoRef.current.srcObject = stream;
      await videoRef.current.play();

      const controls = await reader.decodeFromVideoDevice(
        deviceId,
        videoRef.current,
        (result, err) => {
          if (result) {
            const text = result.getText();
            if (text !== lastResult) {
              setLastResult(text);
              setHistory((h) => [
                { text, time: formatDateTime(new Date()) },
                ...h,
              ]);
              beep();
              setShowPopup(true); // show popup
              stopScan(); // stop scanning after first success
            }
          }
        }
      );
      controlsRef.current = controls;
    } catch (e) {
      console.error(e);
      setIsScanning(false);
      alert(
        "Không thể khởi chạy camera. Hãy kiểm tra quyền truy cập và thiết bị."
      );
    }
  };

  const stopScan = () => {
    controlsRef.current?.stop();
    controlsRef.current = null;
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
    setIsScanning(false);
    setTorchOn(false);
  };

  const handleDeviceChange = (id) => {
    setDeviceId(id);
    if (isScanning) {
      stopScan();
      setTimeout(startScan, 150);
    }
  };

  const toggleTorch = async () => {
    try {
      const track = streamRef.current?.getVideoTracks()[0];
      if (!track) return;
      const capabilities = track.getCapabilities?.();
      if (capabilities && capabilities.torch) {
        await track.applyConstraints({ advanced: [{ torch: !torchOn }] });
        setTorchOn((t) => !t);
      } else {
        alert("Thiết bị không hỗ trợ bật đèn (torch)");
      }
    } catch (e) {
      console.error(e);
    }
  };

  const copyLast = async () => {
    if (!lastResult) return;
    try {
      await navigator.clipboard.writeText(lastResult);
    } catch {}
  };

  useEffect(() => {
    return () => stopScan();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 relative">
      {/* Popup thành công */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-xl max-w-sm w-full text-center">
            <h2 className="text-xl font-bold text-green-600 mb-3">
              ✅ Quét thành công!
            </h2>
            <p className="break-words text-sm mb-4">{lastResult}</p>
            <button
              onClick={() => setShowPopup(false)}
              className="px-4 py-2 bg-black text-white rounded-xl"
            >
              Đóng
            </button>
          </div>
        </div>
      )}

      <div className="max-w-5xl mx-auto p-4 sm:p-6">
        <header className="flex items-center justify-between mb-4">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Check-in bằng QR
          </h1>
          <div className="flex items-center gap-2">
            {!isScanning ? (
              <button
                onClick={startScan}
                className="px-4 py-2 rounded-2xl bg-green-700 text-white shadow hover:opacity-90 transition"
              >
                Bắt đầu quét
              </button>
            ) : (
              <button
                onClick={stopScan}
                className="px-4 py-2 rounded-2xl bg-white border shadow hover:bg-gray-100 transition"
              >
                Dừng
              </button>
            )}
          </div>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Scanner */}
          <div className="bg-white rounded-2xl shadow p-4">
            <div className="flex items-center gap-3 mb-3">
              <label className="text-sm font-medium">Chọn camera</label>
              <select
                className="flex-1 px-3 py-2 rounded-xl border bg-white"
                value={deviceId || ""}
                onChange={(e) => handleDeviceChange(e.target.value)}
              >
                {devices.length === 0 && <option>Không tìm thấy camera</option>}
                {devices.map((d) => (
                  <option key={d.deviceId} value={d.deviceId}>
                    {d.label || `Camera ${d.deviceId.slice(0, 4)}`}
                  </option>
                ))}
              </select>
              <button
                onClick={toggleTorch}
                disabled={!isScanning}
                className={`px-3 py-2 rounded-xl border shadow disabled:opacity-40 ${
                  torchOn ? "bg-yellow-100" : "bg-white"
                }`}
              >
                🔦 Torch
              </button>
            </div>

            <div className="relative rounded-2xl overflow-hidden border h-[500px] bg-black">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                muted
                playsInline
                autoPlay
              />
              <div className="pointer-events-none absolute inset-0 grid place-items-center">
                <div className="w-2/3 max-w-lg aspect-square border-4 border-white/80 rounded-xl shadow-[0_0_0_200vmax_rgba(0,0,0,0.4)] outline outline-2 outline-offset-[-10px] outline-white/10" />
              </div>
            </div>

            <div className="mt-3 flex items-center gap-2 text-sm text-gray-600">
              <span
                className={`inline-flex h-2 w-2 rounded-full ${
                  isScanning ? "bg-green-500" : "bg-gray-300"
                }`}
              />
              <span>
                Trạng thái:{" "}
                {permission === "denied"
                  ? "Bị chặn camera"
                  : isScanning
                  ? "Đang quét..."
                  : "Chưa quét"}
              </span>
            </div>
          </div>

          {/* Result */}
          <div className="bg-white rounded-2xl shadow p-4">
            <h2 className="text-lg font-semibold mb-2">Kết quả gần nhất</h2>
            <div className="p-3 rounded-xl border bg-gray-50 break-words min-h-[3rem]">
              {lastResult ? (
                <code className="text-sm">{lastResult}</code>
              ) : (
                <span className="text-gray-400">Chưa có kết quả</span>
              )}
            </div>
            <div className="mt-2 flex gap-2">
              <button
                onClick={copyLast}
                disabled={!lastResult}
                className="px-3 py-2 rounded-xl bg-blue-800 text-white shadow disabled:opacity-40"
              >
                Sao chép
              </button>
            </div>

            <div className="mt-6">
              <h3 className="text-md font-semibold mb-2">Lịch sử quét</h3>
              <div className="max-h-64 overflow-auto rounded-xl border">
                <table className="w-full text-sm">
                  <thead className="bg-gray-100 sticky top-0">
                    <tr>
                      <th className="text-left px-3 py-2 w-[70%]">Nội dung</th>
                      <th className="text-left px-3 py-2">Thời gian</th>
                    </tr>
                  </thead>
                  <tbody>
                    {history.length === 0 ? (
                      <tr>
                        <td
                          className="px-3 py-3 text-gray-400"
                          colSpan={2}
                        >
                          Chưa có dữ liệu
                        </td>
                      </tr>
                    ) : (
                      history.map((row, i) => (
                        <tr key={i} className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-2 break-words">
                            <code>{row.text}</code>
                          </td>
                          <td className="px-3 py-2 whitespace-nowrap">
                            {row.time}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-8 text-xs text-gray-500">
          <p>
            Mẹo: Trên điện thoại, hãy thêm trang vào màn hình chính để mở toàn
            màn hình. Nếu không quét được, kiểm tra quyền camera hoặc thử chuyển
            camera.
          </p>
        </footer>
      </div>
    </div>
  );
}
