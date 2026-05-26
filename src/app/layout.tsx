import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Валерия — Проводник в мир сакрального контакта и телесной глубины",
  description:
    "Телесный терапевт, психолог, мастер Тантры и массажа. Индивидуальные и парные сессии, дыхательные практики, Шамбала. Безопасное пространство для трансформации.",
  keywords:
    "тантра, телесная терапия, тантрический массаж, дыхательные практики, Шамбала, Валерия, телесный терапевт",
  openGraph: {
    title: "Валерия — Проводник в мир сакрального контакта",
    description:
      "Телесный терапевт, психолог, мастер Тантры и массажа. Безопасное пространство для работы с телом и сознанием.",
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
      <body className="min-h-full flex flex-col bg-[#0b0f19] text-white">
        {children}
      </body>
    </html>
  );
}
