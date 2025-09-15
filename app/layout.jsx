import { Josefin_Sans } from "next/font/google";
import "@/styles/globals.css";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
});

export const metadata = {
  title: "PROMPTOMY - AI Prompt Marketplace",
  description: "Discover, create, and share AI prompts. The ultimate marketplace for AI prompt engineering.",
  keywords: ["AI", "prompts", "marketplace", "ChatGPT", "AI tools", "prompt engineering"],
  authors: [{ name: "PROMPTOMY Team" }],
  creator: "PROMPTOMY",
  openGraph: {
    title: "PROMPTOMY - AI Prompt Marketplace",
    description: "Discover, create, and share AI prompts. The ultimate marketplace for AI prompt engineering.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "PROMPTOMY - AI Prompt Marketplace",
    description: "Discover, create, and share AI prompts. The ultimate marketplace for AI prompt engineering.",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#6366F1" },
    { media: "(prefers-color-scheme: dark)", color: "#0F172A" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${josefinSans.variable} font-sans antialiased bg-slate-900 text-slate-50 min-h-screen`}
        suppressHydrationWarning
      >
        <div className="relative flex min-h-screen flex-col">
          <div className="flex-1">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}