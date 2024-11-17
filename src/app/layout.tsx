import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Iniobong Ukpong", // Custom title
  description: "Full stack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Favicon */}
        <link rel="icon" href="/ini.png" type="image/png" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
