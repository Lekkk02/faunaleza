"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isRootPage = pathname === "/";

  return (
    <html lang="en">
      <head>
        <title>Faunaleza</title>
      </head>
      <body className={inter.className}>
        <div
          style={{
            position: "relative",
            width: "100vw",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {isRootPage && (
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
              <source src={"/FONDO_PRINCIPAL.mp4"} type="video/mp4" />
            </video>
          )}
          <div style={{ position: "relative", zIndex: 2, flex: 1 }}>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
