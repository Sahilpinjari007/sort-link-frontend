import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "sonner";
import { Inter } from "next/font/google";
import { QueryProvider } from "@/providers/query-provider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: {
    default: "SortLink",
    template: "%s | SortLink",
  },
  description:
    "Create, manage and track short links with powerful analytics and QR codes.",

  keywords: [
    "URL Shortener",
    "Link Management",
    "QR Codes",
    "Analytics",
    "Short Links",
    "SortLink",
  ],

  authors: [
    {
      name: "SortLink",
    },
  ],

  creator: "SortLink",

  openGraph: {
    title: "SortLink",
    description:
      "Create, manage and track short links with powerful analytics.",
    siteName: "SortLink",
    type: "website",
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
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(){
              try{
                  var t=localStorage.getItem('sortlink-theme')||
                  'system';var d=t==='dark'||(t==='system'&&matchMedia('(prefers-color-scheme: dark)').matches);
                document.documentElement.classList.add(d?'dark':'light');
            }catch(e){}})();`,
          }}
        />
      </head>
      <body>
        <RootComponent>{children}</RootComponent>
      </body>
    </html>
  );
}

const RootComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryProvider>
      <ThemeProvider>
        {children}
        <Toaster position="top-right" />
      </ThemeProvider>
    </QueryProvider>
  );
};
