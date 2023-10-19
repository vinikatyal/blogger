import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ProBlogger",
  description: "Lets start blogging",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-3xl mx-auto p-4">
          <Navbar />
          <div className="mt-8">{children}</div>
          <ToastContainer />
        </div>
      </body>
    </html>
  );
}
