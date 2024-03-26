import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hexleap-Frontend-Assignment",
  description: "nextjs project",
};

export default function RootLayout({ children }) {
  return (

      <html lang="en" className="dark:bg-black">
        <body className={inter.className}>{children}</body>
      </html>
  );
}
