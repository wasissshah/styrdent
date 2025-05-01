"use client";

import { usePathname } from "next/navigation";
import Header from "./../components/Header";
import HomeHeader from "./../components/HomeHeaderV2";
import Footer from "./../components/Footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const isHome = pathname === "/";

    return (
        <>
            {isHome ? <HomeHeader /> : <Header />}
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default MainLayout;