import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IAPOAM - Instituto de Apoio aos Povos Originários da Amazônia",
  description: "Apoio aos povos indígenas e quilombolas da Amazônia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Translate */}
        <Script
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement(
                { pageLanguage: 'pt', includedLanguages: 'pt,en,es' },
                'google_translate_element'
              );
            }
          `}
        </Script>

        {/* Tidio Chatbot - substitua YOUR_PUBLIC_KEY pelo seu */}
        <Script src="//code.tidio.co/YOUR_PUBLIC_KEY.js" strategy="afterInteractive" />
      </head>
      <body className={`${inter.className} bg-[#244A32] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}