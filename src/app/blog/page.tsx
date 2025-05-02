import MainLayout from "./../layouts/MainLayout";
import Image from "next/image";
import Hero from "./../components/Hero";
import Services from "./../components/Services";
import Cta from "./../components/Cta";
import RecentBlogs from "./../components/Recent-Blogs";
import Testimonials from "./../components/Testimonials";
import Teams from "./../components/Teams";
import Process from "./../components/Process";
import Partners from "./../components/Partners";
import WhyChoose from "./../components/Why-Choose";
import WhoWeAre from "./../components/Who-We-Are";
import PageBanner from "../components/Page-Banner";
import ContactSection from "../components/Contact-Section";
import ContactForm from "../components/Contact-Form";
import FAQSection from "../components/Faq";

export default function ContactUs() {
    return (
        <MainLayout>
            <PageBanner
                title="Blog"
                backgroundImage="/img/footer-bg.jpg"
                breadcrumb={[
                    { label: "Home", href: "/" },
                    { label: "Blog", href: "/blog" },
                ]}
            />
            <div className="blog-list-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-block">
                                <div className="blog-list-item-two">
                                    <div className="blog-image">
                                        <a href="blog-details.html">
                                            <Image src="/img/blog/blog-grid-2-imag-1.jpg" className="img-fluid" width="416" height="335" alt="blog-image" /></a>
                                    </div>
                                    <div className="blog-item-meta">
                                        <p><a href="#">By Deni</a></p>
                                        <p><a href="#">On 06 Sup 2024</a></p>
                                    </div>
                                    <div className="blog-item-details">
                                        <h5><a href="blog-details.html">The Benefits of Quick Loan Approvals for Small
                                            Businesses</a></h5>
                                        <a href="blog-details.html" className="btn-link-two"> <i
                                            className="flaticon-next"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-block">
                                <div className="blog-list-item-two">
                                    <div className="blog-image">
                                        <a href="blog-details.html">
                                            <Image src="/img/blog/blog-grid-2-imag-2.jpg" className="img-fluid" width="416" height="335" alt="blog-image" /></a>
                                    </div>
                                    <div className="blog-item-meta">
                                        <p><a href="#">By Elei</a></p>
                                        <p><a href="#">On 15 Aug 2024</a></p>
                                    </div>
                                    <div className="blog-item-details">
                                        <h5><a href="blog-details.html">Innovative Financing Solutions for Modern
                                            Startups</a></h5>
                                        <a href="blog-details.html" className="btn-link-two"> <i
                                            className="flaticon-next"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-block">
                                <div className="blog-list-item-two">
                                    <div className="blog-image">
                                        <a href="blog-details.html">
                                            <Image src="/img/blog/blog-grid-2-imag-3.jpg" className="img-fluid" width="416" height="335" alt="blog-image" /></a>
                                    </div>
                                    <div className="blog-item-meta">
                                        <p><a href="#">By Jhon</a></p>
                                        <p><a href="#">On 20 Jun 2024</a></p>
                                    </div>
                                    <div className="blog-item-details">
                                        <h5><a href="blog-details.html">Key Financial Metrics Lenders Look for in Your
                                            Loan Application</a></h5>
                                        <a href="blog-details.html" className="btn-link-two"> <i
                                            className="flaticon-next"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-block">
                                <div className="blog-list-item-two">
                                    <div className="blog-image">
                                        <a href="blog-details.html">
                                            <Image src="/img/blog/blog-grid-2-imag-4.jpg" className="img-fluid" width="416" height="335" alt="blog-image" /></a>
                                    </div>
                                    <div className="blog-item-meta">
                                        <p><a href="#">By Martin</a></p>
                                        <p><a href="#">On 10 May 2024</a></p>
                                    </div>
                                    <div className="blog-item-details">
                                        <h5><a href="blog-details.html">Key Financial Metrics Lenders Look for in Your
                                            Loan Application</a></h5>
                                        <a href="blog-details.html" className="btn-link-two"><i
                                            className="flaticon-next"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-block">
                                <div className="blog-list-item-two">
                                    <div className="blog-image">
                                        <a href="blog-details.html">
                                            <Image src="/img/blog/blog-grid-2-imag-5.jpg" className="img-fluid" width="416" height="335" alt="blog-image" /></a>
                                    </div>
                                    <div className="blog-item-meta">
                                        <p><a href="#">By Chris</a></p>
                                        <p><a href="#">On 29 Sup 2024</a></p>
                                    </div>
                                    <div className="blog-item-details">
                                        <h5><a href="blog-details.html">Key Financial Metrics Lenders Look for in Your
                                            Loan Application</a></h5>
                                        <a href="blog-details.html" className="btn-link-two"> <i
                                            className="flaticon-next"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-block">
                                <div className="blog-list-item-two">
                                    <div className="blog-image">
                                        <a href="blog-details.html">
                                            <Image src="/img/blog/blog-grid-2-imag-6.jpg" className="img-fluid" width="416" height="335" alt="blog-image" /></a>
                                    </div>
                                    <div className="blog-item-meta">
                                        <p><a href="#">By Deni</a></p>
                                        <p><a href="#">On 25 Dec 2024</a></p>
                                    </div>
                                    <div className="blog-item-details">
                                        <h5><a href="blog-details.html">The Impact of Credit Scores on Your Loan
                                            Application</a></h5>
                                        <a href="blog-details.html" className="btn-link-two"> <i
                                            className="flaticon-next"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-block">
                                <div className="blog-list-item-two">
                                    <div className="blog-image">
                                        <a href="blog-details.html">
                                            <Image src="/img/blog/blog-grid-2-imag-7.jpg" className="img-fluid" width="416" height="335" alt="blog-image" /></a>
                                    </div>
                                    <div className="blog-item-meta">
                                        <p><a href="#">By Juhi</a></p>
                                        <p><a href="#">On 05 Jan 2024</a></p>
                                    </div>
                                    <div className="blog-item-details">
                                        <h5><a href="blog-details.html">Key Financial Metrics Lenders Look for in Your
                                            Loan Application</a></h5>
                                        <a href="blog-details.html" className="btn-link-two"><i
                                            className="flaticon-next"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-block">
                                <div className="blog-list-item-two">
                                    <div className="blog-image">
                                        <a href="blog-details.html">
                                            <Image src="/img/blog/blog-grid-2-imag-8.jpg" className="img-fluid" width="416" height="335" alt="blog-image" /></a>
                                    </div>
                                    <div className="blog-item-meta">
                                        <p><a href="#">By Vicky</a></p>
                                        <p><a href="#">On 29 Sup 2024</a></p>
                                    </div>
                                    <div className="blog-item-details">
                                        <h5><a href="blog-details.html">How loanlift Supports Business Growth Through
                                            Tailored Loans</a></h5>
                                        <a href="blog-details.html" className="btn-link-two"> <i
                                            className="flaticon-next"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-block">
                                <div className="blog-list-item-two">
                                    <div className="blog-image">
                                        <a href="blog-details.html">
                                            <Image src="/img/blog/blog-grid-2-imag-9.jpg" className="img-fluid" width="416" height="335" alt="blog-image" /></a>
                                    </div>
                                    <div className="blog-item-meta">
                                        <p><a href="#">By Deni</a></p>
                                        <p><a href="#">On 25 Dec 2024</a></p>
                                    </div>
                                    <div className="blog-item-details">
                                        <h5><a href="blog-details.html">The Role of Collateral in Securing a Business
                                            Loan</a></h5>
                                        <a href="blog-details.html" className="btn-link-two"><i
                                            className="flaticon-next"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blog-block">
                            <ul className="pagination">
                                <li className="active"><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#"><i className="fa-solid fa-angles-right"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Cta />
        </MainLayout>
    );
}

