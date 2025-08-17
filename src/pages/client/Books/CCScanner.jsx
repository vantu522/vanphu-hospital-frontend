import { useEffect, useRef } from "react";
import { BrowserMultiFormatReader } from "@zxing/browser";

export default function CCScanner({ onScan }) {
  const videoRef = useRef(null);
  const controlsRef = useRef(null);
  const streamRef = useRef(null);
  const scannedRef = useRef(false); // chặn quét nhiều lần

  useEffect(() => {
    const reader = new BrowserMultiFormatReader();

    async function startScanner() {
      try {
        const devices = await BrowserMultiFormatReader.listVideoInputDevices();
        let selectedDeviceId = devices[0]?.deviceId;

        // Ưu tiên camera sau
        const backCamera = devices.find((d) =>
          /back|rear|environment/i.test(d.label.toLowerCase())
        );
        if (backCamera) selectedDeviceId = backCamera.deviceId;

        // Khởi tạo video stream
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            deviceId: selectedDeviceId ? { exact: selectedDeviceId } : undefined,
            facingMode: selectedDeviceId ? undefined : { ideal: "environment" },
          },
          audio: false,
        });
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          await videoRef.current.play();
        }

        // Bắt đầu decode
        const controls = await reader.decodeFromVideoDevice(
          selectedDeviceId,
          videoRef.current,
          (result, err) => {
            if (result && !scannedRef.current) {
              scannedRef.current = true;
              console.log("✅ Scan result:", result.getText());
              onScan?.(result.getText());
              stopScanner(); // 👉 dừng ngay khi có kết quả
            }
            if (err && err.name !== "NotFoundException") {
              console.error("❌ Scan error:", err);
            }
          }
        );
        controlsRef.current = controls;
      } catch (err) {
        console.error("Camera error:", err);
      }
    }

    function stopScanner() {
      controlsRef.current?.stop();
      controlsRef.current = null;
      streamRef.current?.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    }

    startScanner();

    return () => {
      stopScanner();
    };
  }, [onScan]);

  return (
    <div>
      <video ref={videoRef} style={{ width: "30%" }} playsInline muted />
    </div>
  );
}
