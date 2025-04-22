import Image from "next/image";

export default function Hero() {
    return (
        <section className="banner-one">
            <div className="container-fluid p-0">
                <div className="banner-one-slider">
                    <div className="banner-one-slider-item">
                        <div className="banner-one-slider-item-image zoom-in">
                            {/*<Image src="/img/background/banner-one-bg.jpg" width="1905" height="909" alt="banner-images" />*/}
                            <video
                                width="1905" height="909"
                                className="w-100 h-100"
                                autoPlay
                                loop
                                muted
                                playsInline
                            >
                                <source src="/img/hero.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-7 col-lg-8 col-md-10">
                                    <div className="banner-one-info">
                                        <div className="banner-title fade-left">
                                            <h1>Elevate Your Financial Future with LoanLift</h1>
                                        </div>
                                        <div className="section-details fade-left">
                                            <p>We offer a range of expert services designed to support your financial
                                                journey and business success. Our consultancy includes tailored
                                                financial planning, strategic business advice.</p>
                                        </div>
                                        <div className="fade-in-up">
                                            <a href="contact-us.html" className="btn btn-primary">Contact Us<i
                                                className="flaticon-next"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="banner-one-box">
                                    <div className="banner-one-box-inner">
                                        <i className="flaticon-money-bag"></i>
                                        <h2>5% Interest</h2>
                                    </div>
                                    <p>Discover our dependable loan solutions designed to empower your financial
                                        journey.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};