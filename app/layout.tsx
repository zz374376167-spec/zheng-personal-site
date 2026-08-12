import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: "詹政｜个人数字档案",
    template: "%s｜詹政",
  },
  description: "詹政的个人数字档案，记录生活、成长、摄影与兴趣。",
  applicationName: "Zheng Personal Website",
  authors: [{ name: "詹政" }],
  creator: "詹政",
  keywords: ["詹政", "个人网站", "生活记录", "摄影", "个人档案"],
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "/",
    siteName: "詹政｜个人数字档案",
    title: "詹政｜个人数字档案",
    description: "记录生活、成长、摄影与兴趣。",
  },
  twitter: {
    card: "summary",
    title: "詹政｜个人数字档案",
    description: "记录生活、成长、摄影与兴趣。",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
