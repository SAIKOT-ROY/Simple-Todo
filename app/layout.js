import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/component/Nabar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Todo App",
  description: "Learning Curd operation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-1/2 mx-auto">
          <Navbar />
          <div className="mt-4">
          {children}
          </div>
        </div>
      </body>
    </html>
  );
}
