import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import { Providers } from "./providers";
import { ThemeSwitcher } from "./ui/ThemeSwitcher";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <ThemeSwitcher />
          <main className="flex h-screen bg-background text-foreground">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
