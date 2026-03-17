import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Leena Alotaibi | AI Developer Portfolio",
  description:
    "Final-year AI student passionate about machine learning, deep learning, NLP, Generative AI, and AI agents. Building intelligent systems that solve real-world problems.",
  keywords: [
    "AI Developer",
    "Machine Learning",
    "Deep Learning",
    "NLP",
    "Generative AI",
    "Portfolio",
    "Leena Alotaibi",
  ],
  authors: [{ name: "Leena Alotaibi" }],
  openGraph: {
    title: "Leena Alotaibi | AI Developer Portfolio",
    description:
      "Final-year AI student passionate about machine learning, deep learning, NLP, Generative AI, and AI agents.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f9fafb" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
