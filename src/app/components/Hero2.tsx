import Image from "next/image";
import Link from "next/link";

export default function Hero2() {
    return (
        <section className="banner-two">
            <Image src="/img/logo2.svg" className="logo-lg fadeOut" width="200" height="100" alt="logo" />
            <div className="container-fluid p-0">
                <div className="banner-two-slider">
                    <div className="banner-two-slider-item" data-dot="Fast Approval">
                        <div className="banner-two-slider-item-image">
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
                            <div className="m-auto">
                                <div className="banner-two-info text-center">
                                    <div className="section-details fade-left">
                                        <p className="text-uppercase letter-spacing">Strydent Autonomous Technologies</p>
                                    </div>
                                    <div className="banner-title fade-left">
                                        <h1 className="fw-bolder"><span className="small">Leadership Driving the Future of</span>
                                            <br/><span className="text-primary">Underwater Autonomy vehicles</span></h1>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-lg-6 offset-lg-3">
                                            <p>Watch Strydent’s autonomous underwater fleet operate in real-time — navigating, analyzing, and executing with zero human input. Built for stealth.</p>
                                        </div>
                                    </div>
                                    <div className="banner-two-btn">
                                        <div className="btn-wrapper btn-shadow">
                                            <Link href="" className="btn btn-primary v2">Capabilities</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<div className="banner-two__circle">*/}
                {/*<span className="banner-two-icon">*/}
                {/*    <i className="flaticon-real-estate"></i>*/}
                {/*</span>*/}
                {/*    <div className="curved-circle">*/}
                {/*        <div className="curved-circle--item" data-circle-text-options="{*/}
                {/*        &quot;radius&quot;: 91,*/}
                {/*        &quot;forceWidth&quot;: true,*/}
                {/*        &quot;forceHeight&quot;: true*/}
                {/*    }">*/}
                {/*            25+ Y E A R S O F E X P R I E N C E F O R L O A N*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </section>
    );
};