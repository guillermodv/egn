import type { Metadata } from "next";
import FooterView from "./view/layout/footer";
import HeaderBar from "./view/layout/header";
import "./globals.css";

export const metadata: Metadata = {
  title: "ELECCIONES GENERALES NACIONALES",
  description: "App de monitoreo de elecciones generales nacionales",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <main className="m-auto grid min-h-screen grid-rows-[60px,1fr,40px]">
          <nav className="flex items-center justify-center bg-blue-400">
            <HeaderBar />
          </nav>
          <div className="flex items-center justify-center">{children}</div>
          <footer className="flex items-center justify-center bg-black">
            <FooterView />
          </footer>
        </main>
      </body>
    </html>
  );
}
