import "@/app/ui/globals.css";
import type { Metadata } from "next";
import { nunito } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Woovi - Pague Aqui",
  description: "Faça já seu pagamento seguro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
