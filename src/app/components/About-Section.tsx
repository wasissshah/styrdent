import Image from "next/image";

export default function AboutSection() {
    return (
        <div className="about-four">
            <div className="container">
                <div className="row gutter-y-60">
                    <div className="col-xl-7 col-lg-10">
                        <div className="about-four-info">
                            <div className="heading-box">
                                <span className="heading-subtitle px-0 border-0 text-uppercase">Our Mission</span>
                                <h2 className="heading-title">Empowering Autonomous Ocean Defense</h2>
                            </div>
                            <div className="section-details">
                                <p className="mb-3">At Strydent, our mission is to transform underwater defense and intelligence by engineering the world’s most advanced fleet of AI-powered autonomous underwater vehicles (AUVs). We believe that true ocean security requires persistent, intelligent presence — not occasional manned patrols or reactive measures. Our AUVs are designed to operate as a coordinated swarm, capable of autonomous decision-making, real-time data processing, and mission execution without the need for constant human input.</p>
                                <p className="mb-3">Through the integration of cutting-edge sensor arrays, generative AI, and solar-powered endurance systems, we aim to create a self-sustaining underwater network that protects strategic assets, monitors marine environments, and responds dynamically to emerging threats. Whether supporting naval operations, securing offshore infrastructure, or detecting undersea anomalies, Strydent’s fleet is redefining what’s possible beneath the surface.</p>
                                <p>Ultimately, our mission is about more than technology — it’s about securing the future of our oceans with smart, scalable, and resilient systems that serve both defense and environmental needs for generations to come.</p>
                            </div>
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
                                    <div className="about-experiences-box p-0 d-block">
                                        <Image src="/img/blog/blog-grid-2-imag-5.jpg" className="img-fluid h-100 object-fit-cover" width="350" height="400" alt="about-image" />
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
                                <h4>Innovation</h4>
                                <p>We design next-gen AI systems to push boundaries of autonomy and robotics.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6">
                        <div className="about-four-box">
                            <div className="about-four-icon">
                                <i className="flaticon-targeting"></i>
                            </div>
                            <div className="about-four-details">
                                <h4>Resilience</h4>
                                <p>Our AUVs are built to endure the harshest ocean environments on the planet.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6">
                        <div className="about-four-box">
                            <div className="about-four-icon">
                                <i className="flaticon-active"></i>
                            </div>
                            <div className="about-four-details">
                                <h4>Security</h4>
                                <p>We prioritize defense-grade protection for assets, data, and coastal zones.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};