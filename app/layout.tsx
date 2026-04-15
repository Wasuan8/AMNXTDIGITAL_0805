import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "AMNXT DIGITAL NextGen IT Solutions & Digital Marketing", template: "%s | AMNXT DIGITAL" },
  description: "AMNXT DIGITAL delivers cutting-edge IT solutions and digital marketing strategies that transform businesses into industry leaders.",
  metadataBase: new URL("https://amnxtdigital.com"),
  icons: { icon: "favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
