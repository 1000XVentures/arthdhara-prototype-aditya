import type { Metadata } from "next";
import { Poppins, Geist_Mono, Lexend } from "next/font/google";
import LayoutChrome from "@/components/LayoutChrome";
import { AuthProvider } from "@/contexts/AuthContext";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arthdhara",
  description: "Arthdhara LAMF B2C Web App MVP",
  applicationName: "Arthdhara",
  themeColor: "#1BAF5D",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${geistMono.variable} ${lexend.variable} antialiased`}
      >
        <AuthProvider>
          <LayoutChrome>{children}</LayoutChrome>
        </AuthProvider>
      </body>
    </html>
  );
}
