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
                                <div className="col-xl-3 col-lg-4 col-md-6 footer-about">
                                    <div className="footer-one-about">
                                        <Link href="#">
                                            <Image src="/img/logo.svg" width="218" height="31" alt="footer-logo" />
                                        </Link>
                                    </div>
                                    <div className="footer-one-about-details">
                                        <p>Contact us loanlift and collaborate with us for making you Big dream business
                                            with our best loan services</p>
                                    </div>
                                    <div className="footer-one-about-contact">
                                        <h4>Contact us</h4>
                                        <ul>
                                            <li><Link href="mailto:Loanlift@gmail.com"><i
                                                className="flaticon-envelope"></i>help@company.com</Link></li>
                                            <li><Link href="tel:+020.098.45611"><i className="flaticon-phone"></i>+1
                                                20.098.456
                                                11</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="footer-one-link">
                                        <h3>Page</h3>
                                        <ul>
                                            <li><i className="flaticon-right-arrow"></i><Link href="/l">About
                                                Us </Link></li>
                                            <li><i className="flaticon-right-arrow"></i><Link href="/">FAQS</Link></li>
                                            <li><i className="flaticon-right-arrow"></i><Link
                                                href="/l">Careers </Link></li>
                                            <li><i className="flaticon-right-arrow"></i><Link href="/">Apply
                                                a Loan </Link>
                                            </li>
                                            <li><i className="flaticon-right-arrow"></i><Link href="/">Contact
                                                Us </Link>
                                            </li>
                                            <li><i className="flaticon-right-arrow"></i><Link href="/">Meet The
                                                Team </Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-4 col-md-6">

                                </div>
                                <div className="col-xl-4 col-md-6 ">
                                    <div className="footer-One-subscribe">
                                        <h3>Subscribe</h3>
                                        <p>Stay up-to-date with the latest trends in digital marketing and receive
                                            exclusive tips and insights by subscribing to our newsletter.</p>
                                        <form className="footer-One-subscribe-form" action="#">
                                            <input type="email" name="email" placeholder="Your Email Address"/>
                                                <button type="submit" className="btn btn-primary btn-small">Subscribe
                                                    <i className="flaticon-next"></i>
                                                </button>
                                        </form>
                                        <div className="footer-one-social-media">
                                            <h4>Social Icons</h4>
                                            <ul>
                                                <li><Link href="https://www.facebook.com/" target="_blank"><i
                                                    className="fa-brands fa-facebook-f"></i></Link></li>
                                                <li><Link href="https://www.instagram.com/" target="_blank"><i
                                                    className="fa-brands fa-instagram"></i></Link></li>
                                                <li><Link href="https://in.linkedin.com/" target="_blank"><i
                                                    className="fa-brands fa-linkedin-in"></i></Link></li>
                                                <li><Link href="https://x.com/" target="_blank"><i
                                                    className="fa-brands fa-twitter"></i></Link></li>
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
                            <div className="row row-gap-3">
                                <div className="col-md-6">
                                    <div className="footer-copy-right-one">
                                        <p>© Copyright STRYDENT. All rights reserved | Developed by <Link href="/">DESIGN SPARTANS</Link></p>
                                    </div>
                                </div>
                                <div className="col-md-6 text-center">
                                    <div className="footer-buttom-link text-end">
                                        <ul>
                                            <li><Link href="#">Terms & Condition</Link></li>
                                            <li><Link href="#">Privacy policy</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="search-popup">
                <button className="close-search "></button>
                <form method="post" action="/">
                    <div className="form-group">
                        <input type="search" name="search" placeholder="Search Here" />
                            <button type="submit"><i className="flaticon-search"></i></button>
                    </div>
                </form>
            </div>

            <div className="mobile-nav-wrapper">
                <div className="mobile-nav-overlay mobile-nav-toggler"></div>
                <div className="mobile-nav-content">
                    <Link href="#" className="mobile-nav-close mobile-nav-toggler">
                        <span></span>
                        <span></span>
                    </Link>
                    <div className="logo-box">
                        <Link href="/"><Image src="/img/logo.png" width="150" height="30" alt="logo" /></Link>
                    </div>
                    <div className="mobile-nav-container">
                        <ul className="mobile-menu-list">
                            <li className="menu-item-has-children dropdown"><Link href="#">Home</Link>
                                <ul>
                                    <li><Link href="/">Home-1</Link></li>
                                    <li><Link href="/">Home-2</Link></li>
                                    <li><Link href="/">Home-3</Link></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children dropdown"><Link href="#">Services </Link>
                                <ul>
                                    <li><Link href="/">Services </Link></li>
                                    <li><Link href="/">Services 2</Link></li>
                                    <li><Link href="/">Services Details</Link></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children dropdown"><Link href="#">Pages</Link>
                                <ul>
                                    <li><Link href="/">About Us</Link></li>
                                    <li><Link href="/">FAQ</Link></li>
                                    <li><Link href="/">Careers</Link></li>
                                    <li><Link href="/">Apply a Loan</Link></li>
                                    <li><Link href="/">Contact Us</Link></li>
                                    <li><Link href="/">Meet The Team</Link></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children dropdown"><Link href="#">Blog</Link>
                                <ul>
                                    <li><Link href="/">Blog Standards</Link></li>
                                    <li><Link href="/">Blog Grid</Link></li>
                                    <li><Link href="/">Blog Grid 2</Link></li>
                                    <li><Link href="/">Blog Details</Link></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children dropdown"><Link href="#">Portfolio</Link>
                                <ul>
                                    <li><Link href="/">Portfolio</Link></li>
                                    <li><Link href="/">Portfolio Grid</Link></li>
                                    <li><Link href="/">Portfolio Details</Link></li>
                                </ul>
                            </li>
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