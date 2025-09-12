import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Task Systems - Driving the Future Today",
  description: "Innovative IT Solutions for Your Business",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
