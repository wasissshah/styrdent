import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <div>
            <div className="custom-cursor-one">
                <div className="custom-cursor-inner"></div>
            </div>
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

            <div className="topbar-three">
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <p>Strydent Autonomous Technologies</p>
                        </div>
                        <div className="col-4">
                            <ul className="topbar-three-social-media">
                                <li><Link href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></Link>
                                </li>
                                <li><Link href="https://x.com/"><i className="fa-brands fa-twitter"></i></Link></li>
                                <li><Link href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></Link>
                                </li>
                                <li><Link href="https://in.linkedin.com/"><i className="fa-brands fa-linkedin-in"></i></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <header className="main-header main-header-four ">
                <div className="container">
                    <nav className="main-menu">
                        <div className="main-menu-logo">
                            <Link href="/">
                                <Image src="/img/logo-black.svg" width="170" height="24" alt="header-logo" />
                            </Link>
                        </div>
                        <div className="main-menu-inner">
                            <ul className="main-menu-list">
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>
                                    <Link href="/capabilities">Capabilities</Link>
                                </li>
                                <li>
                                    <Link href="/product-detail">Technology</Link>
                                </li>
                                <li>
                                    <Link href="/product-detail">Team</Link>
                                </li>
                            </ul>
                            <div className="header-right-end">
                                <span className="line-1"></span>
                                <span className="line-2"></span>
                                <span className="line-3"></span>
                            </div>
                        </div>
                        <div className="main-menu-right">
                            <Link href="tel:+020.098.45611" className="menu-phone"> <i className="flaticon-phone"></i>+020.098.456
                                11</Link>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
);
};

export default Header;
