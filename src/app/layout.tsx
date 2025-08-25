import type { Metadata } from "next";
import "./globals.css";
import GlobalNav from "./components/navigation/GlobalNavBar";
import QueryProviders from "@/lib/ReactQuery/QueryProvider";
import { Toaster } from "react-hot-toast";
import { UserInfoContextProvider } from "@/context/userInfoContext";
import Footer from "./components/Footer"

export const metadata: Metadata = {
  title: "Next Centeral Server",
  description: "A boilerplate for all repeated processes",
  icons: {
    icon: '/logo.png'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={` font-[Rubik-Distressed] `}>
        <UserInfoContextProvider>
          <QueryProviders>
            <div>
              <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
              {children}
            </div>
          </QueryProviders>
        </UserInfoContextProvider>
      </body>
    </html>
  );
}

