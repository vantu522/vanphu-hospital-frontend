import { useEffect, useRef } from "react";
import { BrowserMultiFormatReader } from "@zxing/browser";

export default function CCScanner({ onScan }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const codeReader = new BrowserMultiFormatReader();

    async function startScanner() {
      try {
        // Lấy danh sách device
        const devices = await BrowserMultiFormatReader.listVideoInputDevices();
        let selectedDeviceId = devices[0]?.deviceId;

        // Ưu tiên camera sau nếu có
        const backCamera = devices.find((d) =>
          d.label.toLowerCase().includes("back")
        );
        if (backCamera) {
          selectedDeviceId = backCamera.deviceId;
        }

       await codeReader.decodeFromVideoDevice(
  selectedDeviceId,
  videoRef.current,
  (result, err) => {
    if (result) {
      console.log("✅ QR Result:", result.getText());
      onScan(result.getText());
    }
    if (err && !(err instanceof NotFoundException)) {
      console.error("❌ Scan error:", err);
    }
  }
);

      } catch (err) {
        console.error("Camera error:", err);
      }
    }

    startScanner();

    return () => {
      codeReader.reset();
    };
  }, [onScan]);

  return (
    <div>
      <video ref={videoRef} style={{ width: "20%" }} />
    </div>
  );
}
