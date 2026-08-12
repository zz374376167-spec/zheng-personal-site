import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#111111",
          color: "#f4f1ea",
          display: "flex",
          fontSize: 18,
          height: "100%",
          justifyContent: "center",
          width: "100%",
        }}
      >
        Z
      </div>
    ),
    size,
  );
}
