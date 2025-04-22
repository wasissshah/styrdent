import Image from "next/image";

export default function WhyChoose() {
    return (
        <section className="why-choose-section-one">
            <div className="why-choose-shape-one-1">
                <Image src="/img/shape/why-choose-shape-1.png" width="115" height="129" alt="shape" />
            </div>
            <div className="why-choose-shape-one-2">
                <Image src="/img/shape/why-choose-shape-2.png" width="90" height="90" alt="shape" />
            </div>
            <div className="container">
                <div className="row gutter-y-30">
                    <div className="col-xl-9 why-choose-left-one">
                        <div className="heading-box heading-white">
                            <span className="heading-subtitle wow fadeInUp animated animated">🤝 WHY CHOOSE</span>
                            <h2 className="heading-title wow fadeInUp animated animated">Your trusted partner for
                                personalized loan solutions, expert financial guidance</h2>
                        </div>
                        <div className="why-choose-one-image">
                            <Image src="/img/why-choose-image-1.jpg" width="1101" height="559" alt="why-choose-image" />
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                                <div className="why-choose-one-box">
                                    <div className="why-choose-box-one-title">
                                        <i className="flaticon-solution"></i>
                                        <h4>Personalized Loan</h4>
                                    </div>
                                    <p>We offer customized loan options tailored to meet your specific financial
                                        requirements.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                                <div className="why-choose-one-box">
                                    <div className="why-choose-box-one-title">
                                        <i className="flaticon-badge"></i>
                                        <h4>Competitive Rates</h4>
                                    </div>
                                    <p>Benefit from loanlift competitive rates, designed to make your loans more
                                        affordable.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                                <div className="why-choose-one-box">
                                    <div className="why-choose-box-one-title">
                                        <i className="flaticon-trusted"></i>
                                        <h4>Trusted Partner</h4>
                                    </div>
                                    <p>With a commitment to transparency personalized service, we work you every step of
                                        way.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-12">
                        <ul className="counter-box-one">
                            <li>
                                <h6 data-target="25" data-symbol="+">0</h6>
                                <span>01</span>
                                <p>Years of trusted expertise</p>
                            </li>
                            <li>
                                <h6 data-target="50" data-symbol="k">0</h6>
                                <span>02</span>
                                <p>Loans approved</p>
                            </li>
                            <li>
                                <h6 data-target="10" data-symbol="K">0</h6>
                                <span>03</span>
                                <p>Satisfied clients</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};