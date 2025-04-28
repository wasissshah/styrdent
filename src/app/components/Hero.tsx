import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="banner-one">
            <div className="container-fluid p-0">
                <div className="banner-one-slider">
                    <div className="banner-one-slider-item">
                        <div className="banner-one-slider-item-image">
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
                                <div className="col-xl-8 col-lg-8 col-md-10">
                                    <div className="banner-one-info">
                                        <div className="banner-title fade-left">
                                            <h6 className="font-play m-0 text-primary mb-3">Autonomous Underwater Vehicles</h6>
                                            <h1 className="">Strydent Autonomous Technologies</h1>
                                        </div>
                                        <div className="section-details fade-left d-none">
                                            <p>Strydent is developing the next generation of Autonomous Underwater Vehicles (AUVs) — a powerful AI-driven fleet engineered to safeguard America’s extended continental shelf, ports, offshore platforms, and vital sea assets.</p>
                                        </div>
                                        <div className="fade-in-up">
                                            <div className="d-flex gap-2 mt-4">
                                                <Link href="" className="btn btn-primary">Capabilities<i className="flaticon-next"></i></Link>
                                                <Link href="" className="btn btn-primary v2">Specifications<i className="flaticon-next"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="banner-one-box d-nones">
                                    <p className="h3 mb-3">Strategic partners and investors welcome.</p>
                                    <Link href="#" className="text-decoration-underline text-white">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container py-5 d-none">
                <div className="text-center mb-5">
                    <h1 className="section-title">Strydent Autonomous Technologies</h1>
                    <p className="lead">Redefining Underwater Defense with AI-Powered Swarming AUVs</p>
                </div>

                <div className="row g-4 mb-5">
                    <div className="col-md-6">
                        <div className="p-4 bg-dark-blue rounded shadow">
                            <h2 className="h4">Powered by Next-Gen AI</h2>
                            <ul className="list-unstyled">
                                <li>• Autonomous navigation and data collection</li>
                                <li>• Fleet coordination from 50 to 10,000+ units</li>
                                <li>• Real-time multi-sensor analysis</li>
                                <li>• Secure communication via blockchain</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="p-4 bg-dark-blue rounded shadow">
                            <h2 className="h4">Advanced Sensor & Power Suite</h2>
                            <ul className="list-unstyled">
                                <li>• LiDAR, Sonar, GPS, Chemical, Thermal, Inertial sensors</li>
                                <li>• Solar-powered Li-ion batteries</li>
                                <li>• Optional tactical payloads</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};