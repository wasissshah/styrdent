import Image from "next/image";

export default function ProductSectionTwo() {
    return (
        <div className="services-two">
            <div className="services-two-shape-one-1">
                <Image src="/img/shape/services-two-shape-1.png" width="110" height="124" alt="shape" />
            </div>
            <div className="services-two-shape-one-2">
                <Image src="/img/shape/services-two-shape-2.png" width="104" height="80" alt="shape" />
            </div>
            <div className="services-two-inner-bg">
                <div className="container">
                    <div className="row align-items-center gutter-y-30 mb-3 mb-lg-0">
                        <div className="col-lg-7 col-md-12">
                            <div className="heading-box">
                                <span className="heading-subtitle wow fadeInUp animated animated">🤝 OUR SERVICES</span>
                                <h2 className="heading-title wow fadeInUp animated animated">We aim to collaborate by
                                    offering our exceptional services.</h2>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 text-start text-lg-end">
                            <a href="service-2.html" className="btn btn-outline-secondary">Get Started <i
                                className="flaticon-next"></i></a>
                        </div>
                    </div>
                    <ul className="nav nav-tabs justify-content-between border-0" id="services-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="personal-tab" data-bs-toggle="tab"
                                    data-bs-target="#personal-tab-pane" type="button" role="tab"
                                    aria-controls="personal-tab-pane" aria-selected="true"><i
                                className="flaticon-personal"></i>
                                <span>Personal Loans</span>
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="mortgage-tab" data-bs-toggle="tab"
                                    data-bs-target="#mortgage-tab-pane" type="button" role="tab"
                                    aria-controls="mortgage-tab-pane" aria-selected="false"><i
                                className="flaticon-real-estate"></i>
                                <span>Mortgage Loans</span>
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="emergency-tab" data-bs-toggle="tab"
                                    data-bs-target="#emergency-tab-pane" type="button" role="tab"
                                    aria-controls="emergency-tab-pane" aria-selected="false"><i
                                className="flaticon-money-bag-1"></i>
                                <span>Emergency Loans</span>
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="business-tab" data-bs-toggle="tab"
                                    data-bs-target="#business-tab-pane" type="button" role="tab"
                                    aria-controls="business-tab-pane" aria-selected="false"><i
                                className="flaticon-signing"></i>
                                <span>Business Loans</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="tab-content" id="services-tab-content">
                <div className="tab-pane fade show active" id="personal-tab-pane" role="tabpanel"
                     aria-labelledby="personal-tab">
                    <div className="container">
                        <div className="row align-items-start align-items-xl-center gutter-y-30">
                            <div className="col-lg-5">
                                <div className="services-two-image">
                                    <Image src="/img/services/services-tab-imag.jpg" width="526" height="585" alt="services-image" />
                                        <div className="image-shape">
                                            <span></span>
                                            <span></span>
                                        </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="services-two-info">
                                    <div className="services-two-tagline">
                                        <p>7% Interest rate</p>
                                    </div>
                                    <div className="services-two-details">
                                        <p>Personal loans offer a convenient and efficient way to access funds quickly
                                            for
                                            diverse purposes. These loans are ideal for consolidating high-interest debt
                                            into a single, manageable payment, allowing you to streamline your finances.
                                            They can also be used for making significant home improvements, enhancing
                                            the
                                            value and comfort of your living space. Additionally, personal loans provide
                                            financial support for unexpected expenses, helping you manage emergencies
                                            without disruption.</p>
                                    </div>
                                    <ul className="services-two-features">
                                        <li>Flexible Repayment Options</li>
                                        <li>collateral required for borrowing</li>
                                        <li>Low rates for affordable loans</li>
                                        <li>Improve credit score timely payments</li>
                                        <li>Quick access for urgent needs</li>
                                        <li>Funds for any personal expenses</li>
                                        <li>Fast approval and immediate access</li>
                                    </ul>
                                    <a href="service-details.html" className="btn btn-outline-secondary">Explore
                                        Services <i className="flaticon-next"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="mortgage-tab-pane" role="tabpanel" aria-labelledby="mortgage-tab"
                     >
                    <div className="container">
                        <div className="row align-items-start align-items-xl-center gutter-y-30">
                            <div className="col-lg-5">
                                <div className="services-two-image">
                                    <Image src="/img/services/services-tab-imag-2.jpg" width="526" height="585" alt="services-image" />
                                        <div className="image-shape">
                                            <span></span>
                                            <span></span>
                                        </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="services-two-info">
                                    <div className="services-two-tagline">
                                        <p>11% Interest rate</p>
                                    </div>
                                    <div className="services-two-details">
                                        <p>Securing a mortgage loan is one of the most significant financial decisions
                                            you'll ever make. At LoanLift, we simplify the process by offering
                                            customized
                                            mortgage solutions tailored to your unique needs. Whether you're purchasing
                                            your
                                            first home, refinancing, or investing in property, our expert team is here
                                            to
                                            guide you every step of the way. We provide competitive rates, flexible
                                            terms,
                                            and transparent guidance, ensuring you have all the information you need to
                                            make
                                            informed decisions.</p>
                                    </div>
                                    <ul className="services-two-features">
                                        <li> Achieve the dream of owning your home</li>
                                        <li> Manageable payments that fit your budget</li>
                                        <li>Stable rates for predictable payments</li>
                                        <li>Potential deductions for mortgage interest</li>
                                        <li>Save money with competitive rates</li>
                                        <li>Choose terms that suit your needs</li>
                                        <li>Tailored loans to match your goals</li>
                                    </ul>
                                    <a href="service-details.html" className="btn btn-outline-secondary">Explore
                                        Services <i className="flaticon-next"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="emergency-tab-pane" role="tabpanel" aria-labelledby="emergency-tab"
                   >
                    <div className="container">
                        <div className="row align-items-start align-items-xl-center gutter-y-30">
                            <div className="col-lg-5">
                                <div className="services-two-image">
                                    <Image src="/img/services/services-tab-imag-3.jpg" width="526" height="585" alt="services-image" />
                                        <div className="image-shape">
                                            <span></span>
                                            <span></span>
                                        </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="services-two-info">
                                    <div className="services-two-tagline">
                                        <p>14% Interest rate</p>
                                    </div>
                                    <div className="services-two-details">
                                        <p>Life is unpredictable, and unexpected expenses can arise when we least expect
                                            them. At LoanLift, we understand the urgency of such situations, which is
                                            why we
                                            offer fast and reliable emergency loan solutions. Our emergency loans
                                            provide
                                            quick access to the funds you need, helping you cover medical bills, car
                                            repairs, or other unexpected costs without the stress of long approval
                                            processes. With flexible terms and transparent rates, our emergency loans
                                            are
                                            designed to get you back on track.
                                        </p>
                                    </div>
                                    <ul className="services-two-features">
                                        <li>Quick decision-making for faster access</li>
                                        <li>Get funds as soon as you’re approved</li>
                                        <li>Tailor payments to your budget</li>
                                        <li>Easy and hassle-free loan application</li>
                                        <li>Stay on track and avoid penalties</li>
                                        <li>Use funds for a variety of needs</li>
                                        <li> Strengthen your financial foundation</li>
                                        <li>Choose a loan size that suits your needs</li>
                                    </ul>
                                    <a href="service-details.html" className="btn btn-outline-secondary">Explore
                                        Services <i className="flaticon-next"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="business-tab-pane" role="tabpanel" aria-labelledby="business-tab"
                     >
                    <div className="container">
                        <div className="row align-items-start align-items-xl-center gutter-y-30">
                            <div className="col-lg-5">
                                <div className="services-two-image">
                                    <Image src="/img/services/services-tab-imag-4.jpg" width="526" height="585" alt="services-image" />
                                        <div className="image-shape">
                                            <span></span>
                                            <span></span>
                                        </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="services-two-info">
                                    <div className="services-two-tagline">
                                        <p>9% Interest rate</p>
                                    </div>
                                    <div className="services-two-details">
                                        <p>We understand that every business needs financial support to grow, innovate,
                                            and
                                            succeed. Our tailored business loans are designed to help you achieve your
                                            goals, whether it's expanding operations, purchasing equipment, or managing
                                            cash
                                            flow. With flexible terms, competitive rates, and a quick approval process,
                                            we
                                            make securing the funds you need simple and stress-free. Our team of
                                            financial
                                            experts works closely with you to understand your unique business needs,
                                            offering customized loan solutions that align with your vision.</p>
                                    </div>
                                    <ul className="services-two-features">
                                        <li>Personalized loans to meet your needs</li>
                                        <li>Adjust payments to fit your cash flow</li>
                                        <li>Fast approval and fast access to funds</li>
                                        <li>Retain full control of your business</li>
                                        <li>Strengthen your financial liquidity</li>
                                        <li>Borrow the amount that suits your needs</li>
                                        <li>Access funds without risking assets</li>
                                    </ul>
                                    <a href="service-details.html" className="btn btn-outline-secondary">Explore
                                        Services <i className="flaticon-next"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};