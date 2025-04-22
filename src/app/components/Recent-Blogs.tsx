import Image from "next/image";

export default function RecentBlogs() {
    return (
        <section className="blog-one">
            <div className="blog-shape-one-1">
                <Image src="/img/shape/blog-shape.png" width="113" height="76" alt="shape" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 m-auto">
                        <div className="heading-box text-center">
                            <span className="heading-subtitle wow fadeInUp animated animated">🤝 NEWS & TIPS</span>
                            <h2 className="heading-title wow fadeInUp animated animated">Recent News & Blog</h2>
                            <p className="heading-details">Discover effective strategies for managing your loan
                                repayments and staying on track financially. Our tips will help you navigate repayment
                                challenges and achieve financial stability.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row gutter-y-30">
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-one-box">
                            <div className="blog-one-image">
                                <a href="blog-details.html">
                                    <Image src="/img/blog/blog-1.jpg" width="455" height="291" alt="blog-image" />
                                </a>
                                <a href="#" className="blog-one-tag">
                                    <span>LOAN</span>
                                </a>
                            </div>
                            <div className="blog-one-meta">
                                <p><a href="#">By Deni </a></p>
                                <p><a href="#">On 29 Sup 2024</a></p>
                            </div>
                            <div className="blog-one-details">
                                <h5><a href="blog-details.html">Maximizing ROI: how data-driven strategies can transform
                                    your
                                    business</a></h5>
                                <a href="blog-details.html" className="btn-link"><span>Read More</span><i
                                    className="flaticon-next"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-one-box">
                            <div className="blog-one-image">
                                <a href="blog-details.html">
                                    <Image src="/img/blog/blog-3.jpg" width="455" height="291" alt="blog-image" />
                                </a>
                                <a href="#" className="blog-one-tag">
                                    <span> FUNDING</span>
                                </a>
                            </div>
                            <div className="blog-one-meta">
                                <p><a href="#">By Jhon </a></p>
                                <p><a href="#">On 05 Jan 2024</a></p>
                            </div>
                            <div className="blog-one-details">
                                <h5><a href="blog-details.html">How to successfully manage your loan repayments: tips
                                    and
                                    strategies</a></h5>
                                <a href="blog-details.html" className="btn-link"><span>Read More</span><i
                                    className="flaticon-next"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-one-box">
                            <div className="blog-one-image">
                                <a href="blog-details.html">
                                    <Image src="/img/blog/blog-2.jpg" width="455" height="291" alt="blog-image" />
                                </a>
                                <a href="#" className="blog-one-tag">
                                    <span> FINANACIAL</span>
                                </a>
                            </div>
                            <div className="blog-one-meta">
                                <p><a href="#">By Elei </a></p>
                                <p><a href="#">On 18 Feb 2024</a></p>
                            </div>
                            <div className="blog-one-details">
                                <h5><a href="blog-details.html">The impact of credit scores on loan approval: what you
                                    need
                                    to
                                    know</a></h5>
                                <a href="blog-details.html" className="btn-link"><span>Read More</span><i
                                    className="flaticon-next"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};