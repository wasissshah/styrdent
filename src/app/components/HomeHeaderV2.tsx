import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";

const HeaderV2 = () => {
    const pathname = usePathname();
    const isHome = pathname === "/";
    return (
        <div>
            {/*<div className="preloader">*/}
            {/*    <div className="loading-container">*/}
            {/*        <div className="loading-text">*/}
            {/*            <span>S</span>*/}
            {/*            <span>T</span>*/}
            {/*            <span>R</span>*/}
            {/*            <span>Y</span>*/}
            {/*            <span>D</span>*/}
            {/*            <span>E</span>*/}
            {/*            <span>N</span>*/}
            {/*            <span>T</span>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <header className="main-header" id={isHome ? ''  : 'logo-visible'}>
                <div className="container-fluid px-0">
                    <nav className="main-menu">
                        <div className="main-menu-logo">
                            <Link href="/">
                                <Image src="/img/logo.svg" width="218" height="31" alt="header-logo" />
                            </Link>
                        </div>
                        <div className="main-menu-inner">
                            <div className="header-right-end">
                                <span className="line-1"></span>
                                <span className="line-2"></span>
                            </div>
                            <div className="main-menu-right d-none">
                                <Link href="/" className="btn btn-primary">Get In Touch <i className="flaticon-next"></i></Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default HeaderV2;
