import Image from "next/image";

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
                                        <a href="#">
                                            <Image src="/img/Footer_logo.svg" width="218" height="31" alt="footer-logo" />
                                        </a>
                                    </div>
                                    <div className="footer-one-about-details">
                                        <p>Contact us loanlift and collaborate with us for making you Big dream business
                                            with our best loan services</p>
                                    </div>
                                    <div className="footer-one-about-contact">
                                        <h4>Contact us</h4>
                                        <ul>
                                            <li><a href="mailto:Loanlift@gmail.com"><i
                                                className="flaticon-envelope"></i>help@company.com</a></li>
                                            <li><a href="tel:+020.098.45611"><i className="flaticon-phone"></i>+1
                                                20.098.456
                                                11</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="footer-one-link">
                                        <h3>Services</h3>
                                        <ul>
                                            <li><i className="flaticon-right-arrow"></i><a href="service-details.html">Personal
                                                Loans</a></li>
                                            <li><i className="flaticon-right-arrow"></i><a href="service-details.html">Business
                                                Loans</a></li>
                                            <li><i className="flaticon-right-arrow"></i><a href="service-details.html">Mortgage
                                                Loans</a></li>
                                            <li><i className="flaticon-right-arrow"></i><a href="service-details.html">Emergency
                                                Loans</a></li>
                                            <li><i className="flaticon-right-arrow"></i><a href="service-details.html">Student
                                                Loans</a></li>
                                            <li><i className="flaticon-right-arrow"></i><a href="service-details.html">Small
                                                Business Loans</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-4 col-md-6">
                                    <div className="footer-one-link m-0">
                                        <h3>Page</h3>
                                        <ul>
                                            <li><i className="flaticon-right-arrow"></i><a href="about.html">About
                                                Us </a></li>
                                            <li><i className="flaticon-right-arrow"></i><a href="faq.html">FAQS</a></li>
                                            <li><i className="flaticon-right-arrow"></i><a
                                                href="careers.html">Careers </a></li>
                                            <li><i className="flaticon-right-arrow"></i><a href="apply-loan.html">Apply
                                                a Loan </a>
                                            </li>
                                            <li><i className="flaticon-right-arrow"></i><a href="contact-us.html">Contact
                                                Us </a>
                                            </li>
                                            <li><i className="flaticon-right-arrow"></i><a href="team.html">Meet The
                                                Team </a></li>
                                        </ul>
                                    </div>
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
                                                <li><a href="https://www.facebook.com/" target="_blank"><i
                                                    className="fa-brands fa-facebook-f"></i></a></li>
                                                <li><a href="https://www.instagram.com/" target="_blank"><i
                                                    className="fa-brands fa-instagram"></i></a></li>
                                                <li><a href="https://in.linkedin.com/" target="_blank"><i
                                                    className="fa-brands fa-linkedin-in"></i></a></li>
                                                <li><a href="https://x.com/" target="_blank"><i
                                                    className="fa-brands fa-twitter"></i></a></li>
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
                                        <p>© Copyright loanlift. All rights reserved</p>
                                    </div>
                                </div>
                                <div className="col-md-6 text-center">
                                    <div className="footer-buttom-link text-end">
                                        <ul>
                                            <li><a href="#">Terms & Condition</a></li>
                                            <li><a href="#">Privacy policy</a></li>
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
                <form method="post" action="blog.html">
                    <div className="form-group">
                        <input type="search" name="search" placeholder="Search Here" />
                            <button type="submit"><i className="flaticon-search"></i></button>
                    </div>
                </form>
            </div>

            <div className="mobile-nav-wrapper">
                <div className="mobile-nav-overlay mobile-nav-toggler"></div>
                <div className="mobile-nav-content">
                    <a href="#" className="mobile-nav-close mobile-nav-toggler">
                        <span></span>
                        <span></span>
                    </a>
                    <div className="logo-box">
                        <a href="index.html"><Image src="/img/logo.png" width="150" height="30" alt="logo" /></a>
                    </div>
                    <div className="mobile-nav-container">
                        <ul className="mobile-menu-list">
                            <li className="menu-item-has-children dropdown"><a href="#">Home</a>
                                <ul>
                                    <li><a href="index.html">Home-1</a></li>
                                    <li><a href="index-2.html">Home-2</a></li>
                                    <li><a href="index-3.html">Home-3</a></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children dropdown"><a href="#">Services </a>
                                <ul>
                                    <li><a href="service.html">Services </a></li>
                                    <li><a href="service-2.html">Services 2</a></li>
                                    <li><a href="service-details.html">Services Details</a></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children dropdown"><a href="#">Pages</a>
                                <ul>
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="faq.html">FAQ</a></li>
                                    <li><a href="careers.html">Careers</a></li>
                                    <li><a href="apply-loan.html">Apply a Loan</a></li>
                                    <li><a href="contact-us.html">Contact Us</a></li>
                                    <li><a href="team.html">Meet The Team</a></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children dropdown"><a href="#">Blog</a>
                                <ul>
                                    <li><a href="blog.html">Blog Standards</a></li>
                                    <li><a href="blog-grid.html">Blog Grid</a></li>
                                    <li><a href="blog-grid-2.html">Blog Grid 2</a></li>
                                    <li><a href="blog-details.html">Blog Details</a></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children dropdown"><a href="#">Portfolio</a>
                                <ul>
                                    <li><a href="portfolio.html">Portfolio</a></li>
                                    <li><a href="portfolio-grid.html">Portfolio Grid</a></li>
                                    <li><a href="portfolio-details.html">Portfolio Details</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <a href="#" data-target="html" className="scroll-to-target scroll-to-top">
                <span className="scroll-to-top-text">back top</span>
                <span className="scroll-to-top-wrapper"><span className="scroll-to-top-inner"></span></span>
            </a>
        </div>
    );
};