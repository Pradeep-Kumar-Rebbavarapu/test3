import MenuButton from "@/components/MenuButton";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { ToggleProvider } from "@/contextProviders/ToggleProvider";
import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";
import NavButtonGroup from "@/components/NavButtonGroup";
import NextAuthProvider from "@/contextProviders/sessionProvider";

interface Props {
  children: React.ReactNode;
  auth: React.ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout = ({ children, auth }: Props) => {
  const className = inter.className;

  return (
    <html lang="en">
      <body className={inter.className}>
        <ToggleProvider>
          <div className="flex flex-col h-screen overflow-scroll">
            <nav className="bg-gray-800">
              <div className="max-w-7xl mx-auto px-2 sm:px-4">
                <div className="flex items-center justify-between h-[8vh]">
                  {/* Mobile menu button*/}
                  <MenuButton />
                  {/* Logo */}
                  <div className="flex-shrink-0 flex items-center">
                    <Link href="/" className="text-white font-bold text-2xl">
                      <div className="hidden sm:block">
                        Training And Placement Cell (IITI)
                      </div>
                      <div className="block sm:hidden">TPC</div>
                    </Link>
                  </div>
                  {/* Links */}
                  <NavButtonGroup />
                </div>
              </div>
            </nav>
            {/* Page Content */}
            <NextAuthProvider>
              <div className="flex-auto flex overflow-hidden">
                {/* sidebar and main content share this space */}
                <Sidebar />
                <MainContent>{children}</MainContent>
              </div>
              {auth}
            </NextAuthProvider>
          </div>
        </ToggleProvider>
      </body>
    </html>
  );
};

export default RootLayout;
