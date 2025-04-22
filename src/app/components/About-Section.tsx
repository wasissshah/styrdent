import Image from "next/image";

export default function AboutSection() {
    return (
        <div className="about-four">
            <div className="about-four-shape-one-1">
                <Image src="/img/shape/about-shape-1.png" width="119" height="95" alt="shape" />
            </div>
            <div className="about-four-shape-one-2">
                <Image src="/img/shape/service-shape-2.png" width="121" height="127" alt="shape" />
            </div>
            <div className="container">
                <div className="row gutter-y-60">
                    <div className="col-xl-7 col-lg-10">
                        <div className="about-four-info">
                            <div className="heading-box">
                                <span className="heading-subtitle wow fadeInUp animated animated">🤝 ABOUT US</span>
                                <h2 className="heading-title wow fadeInUp animated animated">25 years of expert loan and
                                    finance services.</h2>
                            </div>
                            <div className="section-details">
                                <p>
                                    With over 25 years of expertise in the finance industry, we bring unparalleled
                                    experience and knowledge to every client we serve. Our highly skilled team is
                                    dedicated to providing comprehensive finance solutions tailored to your needs,
                                    ensuring you receive the best coverage and service. We are committed to building
                                    long-term relationships, offering strategic advice that supports your financial
                                    growth and security. Trust us to navigate the complexities of finance with precision
                                    and care.</p>
                            </div>
                            <ul className="about-details-four">
                                <li>
                                    <i className="flaticon-call"></i>
                                    <div className="about-contact-four">
                                        <h6>Call To Any Queary</h6>
                                        <p>+(258) 2156 2154</p>
                                    </div>
                                </li>
                                <li>
                                    <Image src="/img/about/about-four-ceo.png" width="73" height="71" alt="ceo-image" />
                                        <div className="about-contact-four">
                                            <h6>Founder &amp; CEO</h6>
                                            <p>Jon Denial</p>
                                        </div>
                                        <Image src="/img/Sign.png" width="148" height="82" alt="sign" />
                                </li>
                            </ul>
                            <a href="contact-us.html" className="btn btn-outline-secondary">Contact us <i
                                className="flaticon-next"></i></a>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-8 ms-auto">
                        <div className="row gutter-y-30">
                            <div className="col-sm-7 col-6">
                                <div className="about-four-image">
                                    <Image src="/img/about/about-four-imag-1.jpg" width="296" height="556" alt="about-image" />
                                </div>
                            </div>
                            <div className="col-sm-5 col-6 ">
                                <div className="about-four-right">
                                    <div className="about-four-images">
                                        <Image src="/img/about/about-four-image-2.jpg" width="205" height="328" alt="about-image" />
                                    </div>
                                    <div className="about-experiences-box">
                                        <div className="about-four-shape"></div>
                                        <h2>25+</h2>
                                        <p>Years Of Experiences</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6">
                        <div className="about-four-box">
                            <div className="about-four-icon">
                                <i className="flaticon-mission"></i>
                            </div>
                            <div className="about-four-details">
                                <h4>Company Mission</h4>
                                <p>Our mission is to provide innovative and reliable financial solutions tailored to
                                    your
                                    unique
                                    needs.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6">
                        <div className="about-four-box">
                            <div className="about-four-icon">
                                <i className="flaticon-targeting"></i>
                            </div>
                            <div className="about-four-details">
                                <h4>Target, Vision &amp; Goal</h4>
                                <p>Our vision is to provide reliable and innovative financial solutions tailored to your
                                    needs.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6">
                        <div className="about-four-box">
                            <div className="about-four-icon">
                                <i className="flaticon-active"></i>
                            </div>
                            <div className="about-four-details">
                                <h4>Dedicated Teams</h4>
                                <p>Our dedicated teams are committed to providing personalized solutions for all your
                                    financial
                                    needs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};