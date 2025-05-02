import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div>
            <footer className="footer-one">
                <div className="container">
                    <div className="footer-main-one">
                        <div className="footer-one-inner">
                            <div className="row gutter-y-30">
                                <div className="col-lg-3 col-md-6 footer-about">
                                    <div className="footer-one-about">
                                        <Link href="#">
                                            <Image src="/img/icon.svg" width="144" height="131" alt="footer-logo" />
                                        </Link>
                                    </div>
                                    <div className="footer-one-about-details">
                                        <p>Strydent’s autonomous underwater fleet operate in real-time — navigating, analyzing, and executing with zero human input. Built for stealth.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="footer-one-link">
                                        <p className="letter-spacing text-uppercase text-white">Menu</p>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <ul>
                                                    <li><Link href="/">Home</Link></li>
                                                    <li><Link href="/">Capabilities</Link></li>
                                                    <li><Link href="/">Mission</Link></li>
                                                    <li><Link href="/team">Team</Link></li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-6">
                                                <ul>
                                                    <li><Link href="/l">Blog</Link></li>
                                                    <li><Link href="/">Contact</Link></li>
                                                    <li><Link href="/">Faq</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="footer-one-about-contact mb-lg-5">
                                        <p className="letter-spacing text-uppercase text-white">Contact us</p>
                                        <ul>
                                            <li><Link href="mailto:Loanlift@gmail.com"><i
                                                className="flaticon-envelope"></i>info@strydent.com</Link></li>
                                            <li><Link href="tel:(555) 123-4567"><i className="flaticon-phone"></i>+1
                                                (555) 123-4567</Link></li>
                                        </ul>
                                    </div>
                                    <div className="footer-One-subscribe">
                                        <div className="footer-one-social-media">
                                            <p className="letter-spacing text-uppercase text-white">Connect</p>
                                            <ul>
                                                <li><Link href="https://www.facebook.com/" target="_blank"><i
                                                    className="fa-brands fa-facebook-f"></i></Link></li>
                                                <li><Link href="https://www.instagram.com/" target="_blank"><i
                                                    className="fa-brands fa-instagram"></i></Link></li>
                                                <li><Link href="https://in.linkedin.com/" target="_blank"><i
                                                    className="fa-brands fa-linkedin-in"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid p-0">
                    <div className="footer-lower">
                        <div className="container">
                            <div className="footer-copy-right-one">
                                <p className="text-center">© Copyright STRYDENT. All rights reserved | Developed by <Link href="/">DESIGN SPARTANS</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="mobile-nav-wrapper">
                <div className="mobile-nav-overlay mobile-nav-toggler"></div>
                <div className="mobile-nav-content">
                    <Link href="#" className="mobile-nav-close mobile-nav-toggler">
                        <span></span>
                        <span></span>
                    </Link>
                    <div className="mobile-nav-container">
                        <ul className="mobile-menu-list">
                            <li className="menu-item-has-children"><Link href="#">Home</Link></li>
                            <li className="menu-item-has-children"><Link href="#">Capabilities</Link></li>
                            <li className="menu-item-has-children"><Link href="#">Mission</Link></li>
                            <li className="menu-item-has-children"><Link href="/team">Team</Link></li>
                            <li className="menu-item-has-children"><Link href="#">Blog</Link></li>
                            <li className="menu-item-has-children"><Link href="#">Contact</Link></li>
                            <li className="menu-item-has-children"><Link href="#">Faq</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <Link href="#" data-target="html" className="scroll-to-target scroll-to-top">
                <span className="scroll-to-top-text">back top</span>
                <span className="scroll-to-top-wrapper"><span className="scroll-to-top-inner"></span></span>
            </Link>
        </div>
    );
};