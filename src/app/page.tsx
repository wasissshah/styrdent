"use client";
import MainLayout from "./layouts/MainLayout";
import { motion } from "framer-motion";
import Services from "./components/Services";
import Cta from "./components/Cta";
import Image from "next/image";
import Hero2 from "./components/Hero2";

export default function Home() {
    return (
        <MainLayout>
            <Hero2 />
            <section className="features-two">
                <div className="features-slider-two">
                    <div className="features-two-slider-item">
                        <h3>Next-Gen AUVs</h3>
                    </div>
                    <div className="features-two-slider-item">
                        <h3>Autonomous Navigation</h3>
                    </div>
                    <div className="features-two-slider-item">
                        <h3>Fleet Coordination</h3>
                    </div>
                    <div className="features-two-slider-item">
                        <h3>Multi-Sensors</h3>
                    </div>
                    <div className="features-two-slider-item">
                        <h3>Solar-Powered</h3>
                    </div>
                    <div className="features-two-slider-item">
                        <h3>Next-Gen AUVs</h3>
                    </div>
                    <div className="features-two-slider-item">
                        <h3>Autonomous Navigation</h3>
                    </div>
                    <div className="features-two-slider-item">
                        <h3>Fleet Coordination</h3>
                    </div>
                    <div className="features-two-slider-item">
                        <h3>Multi-Sensors</h3>
                    </div>
                    <div className="features-two-slider-item">
                        <h3>Solar-Powered</h3>
                    </div>
                </div>
            </section>
            <Services />
            <div className="about-four bg-primary">
                <video
                    width="1905" height="909"
                    className="w-100 h-100 background"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/img/background.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <motion.div
                                initial={{ opacity: 0, x: -50}}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, ease: "easeIn" }}
                                className="about-four-info bg-dark-v2 text-white px-4 py-4 px-lg-5 py-lg-5 rounded-top-2 d-block">
                                <div className="heading-box">
                                    <p className="text-uppercase letter-spacing text-white">Strydent’s AUV</p>
                                    <h2 className="text-white">Autonomous Underwater Mission Capabilities</h2>
                                </div>
                                <div className="section-details mb-4">
                                    <p className="text-white">The Strydent’s AUV has a flexible & unique architecture capable of rapid integration of complex payloads or multi-sensor suites. It is ideal for a variety of missions such as undersea battlespace intelligence, surveillance and reconnaissance, mine counter-warfare, anti-submarine warfare, seafloor mapping and more.</p>
                                </div>
                                <a href="contact-us.html" className="btn btn-primary v2">Capabilities <i className="flaticon-next"></i></a>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="services-two">
                <div className="services-two-inner-bg bg-white border-0">
                    <div className="container">
                        <motion.div
                            initial={{ opacity: 0, x: -50}}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, ease: "easeIn" }}
                            className="heading-box mb-5">
                            <span className="heading-subtitle text-uppercase border-0 px-0">Strydent Technology</span>
                            <h2 className="heading-title">Technology That Powers the Depths</h2>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50}}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeIn" }}
                            className="row">
                            <div className="col-lg-3">
                                <ul className="nav nav-tabs d-block border-0" id="services-tab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active d-block w-100 text-start" id="personal-tab" data-bs-toggle="tab"
                                                data-bs-target="#personal-tab-pane" type="button" role="tab"
                                                aria-controls="personal-tab-pane" aria-selected="true">
                                            <span>AI Navigation</span>
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link d-block w-100 text-start" id="mortgage-tab" data-bs-toggle="tab"
                                                data-bs-target="#mortgage-tab-pane" type="button" role="tab"
                                                aria-controls="mortgage-tab-pane" aria-selected="false">
                                            <span>Swarm Coordination</span>
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link d-block w-100 text-start" id="emergency-tab" data-bs-toggle="tab"
                                                data-bs-target="#emergency-tab-pane" type="button" role="tab"
                                                aria-controls="emergency-tab-pane" aria-selected="false">
                                            <span>Sensor Intelligence</span>
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link d-block w-100 text-start" id="business-tab" data-bs-toggle="tab"
                                                data-bs-target="#business-tab-pane" type="button" role="tab"
                                                aria-controls="business-tab-pane" aria-selected="false">
                                            <span>Power Supply</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-9 ps-lg-5">
                                <div className="tab-content" id="services-tab-content">
                                    <div className="tab-pane fade show active" id="personal-tab-pane" role="tabpanel"
                                         aria-labelledby="personal-tab">
                                        <div className="services-two-image">
                                            <video
                                                width="1905" height="909"
                                                className="w-100 h-100 rounded"
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                            >
                                                <source src="/img/tab-video.mp4" type="video/mp4" />
                                                <source src="/img/tab-video.mp4.webm" type="video/webm" />
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>
                                        <div className="services-two-info m-0 py-3">
                                            <h3 className="mb-2">Autonomous AI Navigation</h3>
                                            <div className="services-two-details">
                                                <p>Strydent’s AUVs are equipped with a next-generation generative AI platform that enables true autonomy below the surface. Each vehicle makes independent decisions based on environmental data, mission parameters, and real-time sensor inputs. With no need for GPS or surface communication, the AI navigates terrain, avoids hazards, and adjusts paths dynamically — even in highly unpredictable or GPS-denied environments. This autonomy transforms mission capabilities and minimizes operational risk.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="mortgage-tab-pane" role="tabpanel" aria-labelledby="mortgage-tab"
                                    >
                                        <div className="services-two-image">
                                            <video
                                                width="1905" height="909"
                                                className="w-100 h-100 rounded"
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                            >
                                                <source src="/img/tab-video.mp4" type="video/mp4" />
                                                <source src="/img/tab-video.mp4.webm" type="video/webm" />
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>
                                        <div className="services-two-info m-0 py-3">
                                            <h3 className="mb-2">Swarm Coordination</h3>
                                            <div className="services-two-details">
                                                <p>Our fleet-based architecture allows AUVs to work together as an intelligent swarm. Each vehicle communicates in real-time with others in the network to share reconnaissance data, identify threats, and maintain optimal formation. This distributed coordination creates a virtual underwater barrier capable of protecting vast regions. Whether deployed as a small tactical unit or a swarm of thousands, Strydent’s AUVs operate as one cohesive system — adaptive, scalable, and resilient.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="emergency-tab-pane" role="tabpanel"
                                         aria-labelledby="emergency-tab">
                                        <div className="services-two-image">
                                            <video
                                                width="1905" height="909"
                                                className="w-100 h-100 rounded"
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                            >
                                                <source src="/img/tab-video.mp4" type="video/mp4" />
                                                <source src="/img/tab-video.mp4.webm" type="video/webm" />
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>
                                        <div className="services-two-info m-0 py-3">
                                            <h3 className="mb-2">Multi-Sensor Intelligence</h3>
                                            <div className="services-two-details">
                                                <p>Every Strydent AUV carries a sophisticated suite of sensors — including sonar, LiDAR, chemical sensors, thermal imaging, electromagnetic sensors, and high-definition video. These components work in unison to scan, detect, and analyze the surrounding environment in real time. The result is deep situational awareness for threat detection, environmental monitoring, and data-driven decision-making. Modular design also allows for sensor upgrades or customization based on specific mission needs.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="business-tab-pane" role="tabpanel" aria-labelledby="business-tab"
                                    >
                                        <div className="services-two-image">
                                            <video
                                                width="1905" height="909"
                                                className="w-100 h-100 rounded"
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                            >
                                                <source src="/img/tab-video.mp4" type="video/mp4" />
                                                <source src="/img/tab-video.mp4.webm" type="video/webm" />
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>
                                        <div className="services-two-info m-0 py-3">
                                            <h3 className="mb-2">Continuous Power Supply</h3>
                                            <div className="services-two-details">
                                                <p>Built for long-duration operations, Strydent’s AUVs feature a solar-powered, rechargeable lithium-ion battery system. Wing-mounted solar cells capture energy even in harsh marine conditions, allowing each vehicle to remain mission-ready without returning to base. For environments where solar is not viable, we offer a prototype with direct-charge capability. This dual-power design ensures flexibility, sustained deployment, and near-limitless mission durations — making the fleet ideal for persistent underwater presence.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            <section className="cta-two pb-0 bg-white">
                <div className="container-fluid opacity-15">
                    <div className="cta-two-box-one">
                        <div className="cta-two-category-box">
                            <h1 className="cta-two-category-title font-900 fs-180 text-dark my-2">Strydent’s Auvs Strydent’s Auvs</h1>
                        </div>
                    </div>
                    <div className="cta-two-box-two">
                        <div className="cta-two-category-box">
                            <h2 className="cta-two-category-title font-900 fs-180 text-dark my-2">Strydent’s Auvs Strydent’s Auvs</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="team">
                <Image src="/img/team.jpg" className="team-background img-fluid" width="1900" height="1000" alt="Team background" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 50}}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: "easeIn" }}
                                className="about-four-info bg-dark-v2 text-white px-4 py-4 px-lg-5 py-lg-5 rounded-top-2 d-block text-center">
                                <div className="heading-box text-center">
                                    <p className="text-uppercase letter-spacing text-white">OUR TEAM</p>
                                    <h3 className="text-white">Meet the Minds <br className="d-lg-none"/>Behind the Mission</h3>
                                </div>
                                <div className="section-details mb-4">
                                    <p className="text-white text-center">The Strydent’s AUV has a flexible & unique architecture capable of rapid integration of complex payloads or multi-sensor suites. It is ideal for a variety of missions such as undersea battlespace intelligence, surveillance and reconnaissance, mine counter-warfare, anti-submarine warfare, seafloor mapping and more.</p>
                                </div>
                                <a href="contact-us.html" className="btn btn-primary v2">view more <i className="flaticon-next"></i></a>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
            <Cta />
        </MainLayout>
    );
}

