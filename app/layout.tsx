import type { Metadata, Viewport } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import MotionController from "@/components/MotionController";

export const metadata: Metadata = {
  title: {
    default: "华车时代｜特种装备核心系统",
    template: "%s｜华车时代",
  },
  description: "为特种装备提供动力系统、智能底盘、嵌入式控制与系统集成服务。",
  icons: { icon: "/logo-mark.svg" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  themeColor: "#05070b",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>
        <MotionController />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
