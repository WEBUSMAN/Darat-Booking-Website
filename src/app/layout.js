"use client";
import { Inter } from "next/font/google";
import Header from "./home/_components/Header";
import Navbar from "./home/_components/Navbar";
import Footer from "./home/_components/Footer";
import Providers from "../../lib/redux/Providers";
import { useRouter } from 'next/navigation';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const router = useRouter();
  const adminRoutes = ['/admin'];

  const isAdminRoute = adminRoutes.some(route => router.pathname?.startsWith(route));

  const shouldShowHeaderAndFooter = !isAdminRoute;

  console.log("Current Pathname:", router.asPath);

  return (
    <html lang="en">
      <body className={inter.className}>
        {shouldShowHeaderAndFooter && (
          <>
            {/* <Header /> */}
            {/* <Navbar /> */}
            <Providers>
              {children}
            </Providers>
            {/* <Footer /> */}
          </>
        )}

        {!shouldShowHeaderAndFooter && (
          <>
            {children}
          </>
        )}
      </body>
    </html>
  );
}

RootLayout.getLayout = (page) => <RootLayout>{page}</RootLayout>;
