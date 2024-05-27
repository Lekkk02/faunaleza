import { Inter } from "next/font/google";

export const metadata = {
  title: "Faunaleza",
  description: "Preguntarle a las chicas por la descripción del sitio",
};

export default function RootLayout({ children }) {
  return (
    <section lang="en">
      <div
        style={{
          position: "relative",
          width: "100vw",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 1,
          }}
        >
          <source src={"/escenario.mp4"} type="video/mp4" />
        </video>
        <div style={{ position: "relative", zIndex: 2, flex: 1 }}>
          {children}
        </div>
      </div>
    </section>
  );
}
