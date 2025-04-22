import Image from "next/image";

export default function ProductSection() {
    return (
        <div className="about-two">
            <div className="container">
                <div className="row gutter-y-60">
                    <div className="col-lg-6 col-md-12 about-two-left">
                        <div className="about-two-image">
                            <Image src="/img/about/about-two-image.jpg" width="578" height="557" alt="about-image" />
                                <div className="image-shape">
                                    <span></span>
                                    <span></span>
                                </div>
                        </div>
                        <div className="about-two-cta-box">
                            <div className="about-two-info-right">
                                <h5>Our Expert Team</h5>
                                <p className="mb-0">A global customer refers to an individual
                                    or business entity that operates.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 about-two-right">
                        <div className="heading-box">
                            <span className="heading-subtitle wow fadeInUp animated animated">🤝 ABOUT US</span>
                            <h2 className="heading-title wow fadeInUp animated animated">Our loans will fill your dreams
                                come
                                true</h2>
                            <p className="heading-details">At Loanlift, we are committed to delivering tailored
                                financial
                                solutions designed to fit your
                                individual needs. At Loanlift, we are committed to delivering.</p>
                        </div>
                        <ul className="about-two-list">
                            <li><i className="flaticon-checked"></i> Translating the design into code using Webflow</li>
                            <li><i className="flaticon-checked"></i> Responsive and functions perfectly across all
                                devices
                            </li>
                        </ul>
                        <div className="row gutter-y-30">
                            <div className="col-xl-6 col-lg-12">
                                <div className="about-two-box">
                                    <div className="about-two-box-icon"><Image src="/img/accounting.svg" width="50" height="50"
                                                                             alt="icon" />
                                    </div>
                                    <div className="about-two-box-title">
                                        <h4>Competitive Interest Rates</h4>
                                    </div>
                                    <div className="about-two-box-info">
                                        <p>we offer some of the most competitive interest rates in the industry,
                                            ensuring
                                            you get
                                            the best value for your loan.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-12">
                                <div className="about-two-box">
                                    <div className="about-two-box-icon"><Image src="/img/contract.svg" width="50" height="50"
                                                                             alt="icon" /></div>
                                    <div className="about-two-box-title">
                                        <h4>Expert Guidance Every Step</h4>
                                    </div>
                                    <div className="about-two-box-info">
                                        <p>we offer expert guidance at every step of your loan journey. Our experienced
                                            team.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};