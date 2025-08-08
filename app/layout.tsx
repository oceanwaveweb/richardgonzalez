import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Richard Gonzalez",
  description: "Official website of Richard Gonzalez - Music, Events, and More",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ Google Translate Widget Setup */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function googleTranslateElementInit() {
                new google.translate.TranslateElement({
                  pageLanguage: 'en',
                  includedLanguages: 'en,es',
                  autoDisplay: false
                }, 'google_translate_element');
              }
            `,
          }}
        />
        <script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
      </head>

      <body className={`${inter.className} bg-black text-white`}>
        {/* ✅ Hidden Google Translate Element */}
        <div id="google_translate_element" style={{ display: "none" }} />

        {/* ✅ Auto-translate based on browser language */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                const userLang = navigator.language || navigator.userLanguage;
                if (userLang.startsWith('es')) {
                  const interval = setInterval(() => {
                    const select = document.querySelector('.goog-te-combo');
                    if (select) {
                      select.value = 'es';
                      select.dispatchEvent(new Event('change'));
                      clearInterval(interval);
                    }
                  }, 500);
                }
              })();
            `,
          }}
        />

        {children}
      </body>
    </html>
  );
}
