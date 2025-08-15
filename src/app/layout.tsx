import type { Metadata } from "next";
import "./globals.css";
import GlobalNav from "./components/navigation/GlobalNavBar";
import QueryProviders from "@/lib/ReactQuery/QueryProvider";
import { Toaster } from "react-hot-toast";
import { UserInfoContextProvider } from "@/context/userInfoContext";
import Footer from "./components/Footer"

export const metadata: Metadata = {
  title: "Southern Engineering",
  description: "A boilerplate for all repeated processes",
  icons: {
    icon: '/logo.png'
  }
};

export default async function RootLayout({ children, params }: Readonly<{ children: React.ReactNode; params: { locale: string }; }>) {

  return (
    <html lang={params.locale}>
      <body className={` font-[Rubik-Distressed] `}>
          <UserInfoContextProvider>
            <QueryProviders>
              <GlobalNav />
              <div className="">
                <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
                {children}
              </div>
              {/* <Footer/> */}
            </QueryProviders>
          </UserInfoContextProvider>
      </body>
    </html>
  );
}
