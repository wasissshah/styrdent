import Image from "next/image";

export default function Process() {
    return (
        <section className="process-one">
            <div className="container">
                <div className="row gutter-y-30">
                    <div className="col-lg-6">
                        <div className="heading-box">
                            <span className="heading-subtitle wow fadeInUp animated animated">🤝 OUR PROCESS</span>
                            <h2 className="heading-title wow fadeInUp animated animated">Consultation successful loan
                                approval process
                            </h2>
                            <p className="heading-details">Our comprehensive process ensures a seamless journey from
                                initial consultation to successful loan approval. Experience personalized guidance and
                                expert support every step of the way.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="process-one-video">
                            <Image src="/img/process-video-thamb.jpg" width="636" height="297" alt="video-thumb" />
                                <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="process-one-video-btn"><i
                                    className="fa-solid fa-play"></i></a>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-4">
                        <div className="process-one-image">
                            <Image src="/img/process-image.jpg" width="306" height="385" alt="process-image" />
                        </div>
                    </div>
                    <div className="col-xl-9 col-md-8 align-self-center">
                        <div className="process-item-one wow fadeInRight animated animated" data-wow-delay="500ms"
                             data-wow-duration="2000ms">
                            <div className="process-one-box">
                                <div className="process-one-box-icon">
                                    <i className="flaticon-application"></i>
                                </div>
                                <div className="process-one-box-title">
                                    <h3>Application</h3>
                                </div>
                                <div className="process-one-box-devider"></div>
                                <div className="process-one-box-details">
                                    <p>Start by filling out our easy online application form. Provide basic information
                                        about yourself and your financial needs.</p>
                                </div>
                            </div>
                            <div className="process-one-box">
                                <div className="process-one-box-icon">
                                    <i className="flaticon-contract"></i>
                                </div>
                                <div className="process-one-box-title">
                                    <h3>Documentation</h3>
                                </div>
                                <div className="process-one-box-devider"></div>
                                <div className="process-one-box-details">
                                    <p>Upon approval, you'll receive clear instructions on the required documentation.
                                        this may include income verification.</p>
                                </div>
                            </div>
                            <div className="process-one-box">
                                <div className="process-one-box-icon">
                                    <i className="flaticon-approval"></i>
                                </div>
                                <div className="process-one-box-title">
                                    <h3>Approval</h3>
                                </div>
                                <div className="process-one-box-devider"></div>
                                <div className="process-one-box-details">
                                    <p>Once your application is reviewed, we aim to provide swift approval decisions.
                                        Our goal is to get you approved.</p>
                                </div>
                            </div>
                            <div className="process-one-box">
                                <div className="process-one-box-icon">
                                    <i className="flaticon-money-1"></i>
                                </div>
                                <div className="process-one-box-title">
                                    <h3>Funding</h3>
                                </div>
                                <div className="process-one-box-devider"></div>
                                <div className="process-one-box-details">
                                    <p>After your documentation is verified and finalized, we initiate the funding
                                        process. Funds are typically deposited.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};