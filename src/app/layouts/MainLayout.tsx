"use client";

import { usePathname } from "next/navigation";
import Header from "./../components/Header";
import HomeHeaderV2 from "./../components/HomeHeaderV2";
import Footer from "./../components/Footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const isHome = pathname === "/";

    return (
        <>
            <HomeHeaderV2 />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default MainLayout;