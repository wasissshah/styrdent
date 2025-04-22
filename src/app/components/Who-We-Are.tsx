import Image from "next/image";

export default function WhoWeAre() {
    return (
        <section className="features-section-one">
            <div className="container-fluid">
                <div className="row align-items-center justify-content-center justify-content-xl-start">
                    <div className="col-xxl-3 col-xl-3 col-md-5 col-sm-7">
                        <div className="features-one-image">
                            <Image src="/img/features-1.jpg" width="444" height="750" alt="features-image" />
                                <div className="image-shape">
                                    <span></span>
                                    <span></span>
                                </div>
                        </div>
                    </div>
                    <div className="col-xxl-5 col-xl-5 col-md-7">
                        <div className="features-one-info">
                            <div className="heading-box">
                                <span className="heading-subtitle wow fadeInUp animated animated">🤝 WHO WE ARE</span>
                                <h2 className="heading-title wow fadeInUp animated animated">Flexible, quick and fast
                                    business loans
                                </h2>
                            </div>
                            <p>Get the funding you need with our flexible and quick business loans. Tailored to meet
                                your unique needs, our loans offer competitive rates and fast approval. Empower your
                                business to grow and thrive with the right financial support.
                            </p>
                            <div className="features-one-list-block">
                                <ul className="features-one-list">
                                    <li>Robust data ensuring client privacy.</li>
                                    <li>Expert assistance every step way.</li>
                                    <li>User-friendly interface application.</li>
                                    <li>Competitive rates to ease financial.</li>
                                    <li>Customized loan plans unique needs.</li>
                                    <li>Streamlined processes for approvals.</li>
                                </ul>
                            </div>
                            <a href="apply-loan.html" className="btn btn-secondary">Get Started<i
                                className="flaticon-next"></i></a>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-8 col-sm-10">
                        <form action="#" id="loan-calculator" data-interest-rate="15"
                              className="features-one-form wow fadeInUp animated animated" data-wow-duration="2000ms"
                              data-wow-delay="500ms">
                            <h3>How much do you need?</h3>
                            <div className="features-one-form-content">
                                <div className="input-box__top">
                                    <span>$10000</span>
                                    <span>$100000</span>
                                </div>
                                <div className="input-box">
                                    <div className="range-slider-count" id="range-slider-count"></div>
                                    <input type="hidden" value="" id="min-value-rangeslider-count" />
                                        <input type="hidden" value="" id="max-value-rangeslider-count" />
                                </div>
                                <div className="input-box__top">
                                    <span>1 Month</span>
                                    <span>12 Months</span>
                                </div>
                                <div className="input-box">
                                    <div className="range-slider-month" id="range-slider-month"></div>
                                    <input type="hidden" value="" id="min-value-rangeslider-month" />
                                        <input type="hidden" value="" id="max-value-rangeslider-month" />
                                </div>
                                <p>
                                    <span>Pay Monthly</span>
                                    <b>$<i id="loan-monthly-pay"></i></b>
                                </p>
                                <p>
                                    <span>Total Pay Back</span>
                                    <b>$<i id="loan-total"></i></b>
                                </p>
                                <button type="submit" className="btn btn-primary btn-block">Apply For Loan</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};