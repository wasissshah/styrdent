import Image from "next/image";
import Link from "next/link";

const HeaderV2 = () => {
    return (
        <div>
            {/*<div className="custom-cursor-one">*/}
            {/*    <div className="custom-cursor-inner"></div>*/}
            {/*</div>*/}
            <div className="preloader">
                <div className="loading-container">
                    <div className="loading-text">
                        <span>S</span>
                        <span>T</span>
                        <span>R</span>
                        <span>Y</span>
                        <span>D</span>
                        <span>E</span>
                        <span>N</span>
                        <span>T</span>
                    </div>
                </div>
            </div>


            {/*<div className="topbar-one">*/}
            {/*    <div className="container-fluid">*/}
            {/*        <div className="topbar-one-inner">*/}
            {/*            <ul className="topbar-one-info white-font">*/}
            {/*                <li>*/}
            {/*                    <i className="flaticon-location"></i>*/}
            {/*                    <p>28 Valencia Street, New York</p>*/}
            {/*                </li>*/}
            {/*                <li>*/}
            {/*                    <i className="flaticon-mail"></i>*/}
            {/*                    <Link href="mailto:Loanlift@gmail.com">help@company.com</Link>*/}
            {/*                </li>*/}
            {/*                <li>*/}
            {/*                    <i className="flaticon-phone-call"></i>*/}
            {/*                    <Link href="tel:+020.098.45611">+1 20.098.456 11</Link>*/}
            {/*                </li>*/}
            {/*            </ul>*/}
            {/*            <div className="topbar-one-right">*/}
            {/*                <ul className="topbar-one-right-one white-font">*/}
            {/*                    <li><Link href="#">Help</Link></li>*/}
            {/*                    <li><Link href="/about-us">About</Link></li>*/}
            {/*                    <li><Link href="/faq">FAQs</Link></li>*/}
            {/*                </ul>*/}
            {/*                <ul className="topbar-one-social-media white-font">*/}
            {/*                    <li><Link href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></Link>*/}
            {/*                    </li>*/}
            {/*                    <li><Link href="https://x.com/"><i className="fa-brands fa-twitter"></i></Link></li>*/}
            {/*                    <li><Link href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></Link>*/}
            {/*                    </li>*/}
            {/*                    <li><Link href="https://in.linkedin.com/"><i className="fa-brands fa-linkedin-in"></i></Link>*/}
            {/*                    </li>*/}
            {/*                </ul>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <header className="main-header">
                <div className="container-fluid px-0">
                    <nav className="main-menu">
                        <div className="main-menu-logo">
                            <Link href="/">
                                <Image src="/img/logo.svg" width="218" height="31" alt="header-logo" />
                            </Link>
                        </div>
                        <div className="main-menu-inner">
                            <ul className="main-menu-list d-none">
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>
                                    <Link href="/">Capabilities</Link>
                                </li>
                                <li>
                                    <Link href="/">Technology</Link>
                                </li>
                                <li>
                                    <Link href="/">Team</Link>
                                </li>
                            </ul>
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
