import Image from "next/image";
import Link from "next/link";

export default function Hero2() {
    return (
        <section className="banner-two">
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
                            </video>                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 m-auto">
                                    <div className="banner-two-info text-center">
                                        <div className="section-details fade-left">
                                            <p>Strydent Autonomous Technologies</p>
                                        </div>
                                        <div className="banner-title fade-left">
                                            <h1>Leadership Driving the Future of Underwater Autonomy</h1>
                                        </div>
                                        <div className="banner-two-btn">
                                            <Link href="" className="btn btn-primary">Capabilities<i className="flaticon-next"></i></Link>
                                            <Link href="" className="btn btn-primary v2">Specifications<i className="flaticon-next"></i></Link>
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