import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Preloader />

        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}