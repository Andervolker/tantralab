import type { Metadata } from "next";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: "Океан ощущений — пространство живого контакта с собой",
  description:
    "Сообщество телесных практиков и массажистов. Индивидуальные практики для снятия стресса и восстановления ресурса, парные тантрические сессии для углубления доверия и осознанной близости.",
  keywords:
    "телесные практики, тантра, телесная терапия, расслабление, парные сессии, сообщество мастеров, Океан ощущений",
  openGraph: {
    title: "Океан ощущений — пространство живого контакта",
    description:
      "Сообщество телесных практиков. Безопасное пространство для замедления, расслабления и внимания к своим чувствам.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0A1128] text-white">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
