"use client";

import MainLayout from "./../layouts/MainLayout";
import Image from "next/image";
import {motion} from "framer-motion";
import Link from "next/link";
import Cta from "../components/Cta";
const services = [
    {
        title: "Strike Carrier Groups",
        description: "Enhances fleet defense and threat detection for carrier-based naval operations.",
        image: "/img/services/services-1.png",
        iconClass: "/img/swarm-intelligence.svg",
    },
    {
        title: "Naval Stations / Ports",
        description: "Provides continuous underwater surveillance to secure critical maritime infrastructure.",
        image: "/img/services/services-4.png",
        iconClass: "/img/ai.svg",
    },
    {
        title: "Low Altitude Radar Support",
        description: "Extends situational awareness by coordinating with low-altitude surface and aerial radar systems.",
        image: "/img/services/services-4.png",
        iconClass: "/img/solar.svg",
    },
    {
        title: "Search & Destroy",
        description: "Autonomous targeting and neutralization of undersea threats with tactical precision.",
        image: "/img/services/services-4.png",
        iconClass: "/img/solar.svg",
    },
];
export default function Capabilities() {
    return (
        <MainLayout>
            <section className="banner-two v2">
                <div className="container-fluid p-0">
                    <div className="banner-two-slider">
                        <div className="banner-two-slider-item" data-dot="Fast Approval">
                            <div className="container">
                                <motion.div
                                    className="m-auto"
                                    initial={{ opacity: 0, y: 50}}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, ease: "easeIn" }}
                                >
                                    <div className="banner-two-info text-center">
                                        <div className="section-details">
                                            <p className="text-uppercase letter-spacing text-primary">Strydent Autonomous Technologies</p>
                                        </div>
                                        <div className="banner-title">
                                            <h1 className="fw-bolder"><span className="small">Autonomous</span><br/>
                                                <span className="small text-gradient">Underwater Vehicles</span></h1>
                                        </div>
                                        <div className="img-wrapper">
                                            <Image src="/img/obj-slider1-1.png" className="obj" width="1000" height="524" alt="" />
                                            <Image src="/img/obj-slider2-2.png" className="obj" width="1000" height="524" alt="" />
                                            <Image src="/img/obj-slider3.png" className="obj" width="1000" height="524" alt="" />
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="services-section-one pt-0 bg-primary-dark">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 50}}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeIn" }}>
                        <div className="heading-box text-center col-lg-10 mx-auto">
                            <p className="text-uppercase letter-spacing text-primary">Capabilities</p>
                            <h2 className="heading-title text-uppercase fw-bolder text-white">Protecting & Supporting U.S Assets & National Interests</h2>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50}}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeIn" }}
                        className="service-one-inner v2">
                        {services.map((service, index) => (
                            <div className="service-one-box" key={index}>
                                <div className="service-one-icon-box">
                                    <Image src={service.iconClass} width={80} height={80} alt="service images" />
                                </div>
                                <div className="service-one-info">
                                    <h5 className="font-dm-sans text-uppercase text-white mb-2">{service.title}</h5>
                                    <p className="text-white">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>
            <section className="capabilities-section bg-primary-dark">
                <div className="container">
                    <div className="capabilities-card">
                        <div className="row flex-row-reverse">
                            <div className="col-lg-6">
                                <motion.div initial={{ opacity: 0, x: 50}}
                                     animate={{ opacity: 1, x: 0 }}
                                     transition={{ duration: 0.5, ease: "easeIn" }}
                                     className="card-left">
                                    <div className="product-img mb-5">
                                        <video
                                            width="1905" height="909"
                                            className="w-100 h-100 rounded"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                        >
                                            <source src="/img/tab-video.mp4" type="video/mp4" />
                                            <source src="/img/tab-video.webm" type="video/webm" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                </motion.div>
                            </div>
                            <div className="col-lg-6">
                                <motion.div initial={{ opacity: 0, y: 50}}
                                     animate={{ opacity: 1, y: 0 }}
                                     transition={{ duration: 0.5, ease: "easeIn" }}
                                     className="card-right">
                                    <h3 className="mb-0 text-white">Autonomous Navigation</h3>
                                    <div className="text-white my-3">Description</div>
                                    <div className="text">Strydent’s proprietary autonomous navigation system enables its swarms of AUVs to autonomously navigate both near-shore coastal areas and open seas offering enhanced operational performance and capabilities through its suite of onboard sensors.  Strydent’s proprietary swarm navigation technology allows its fleet of undersea AUVs to provide safe navigation while ensuring constant communication among all of the AUVs in the swarm without intervention from remote operators and allowing real-time data communication.  The onboard control system links each of the AUVs and manages all operational aspects, from navigation to system diagnostics allowing the AUVs to operate with precision and efficiency.  Strydent’s AUVs can be equipped with an inertial navigation system or a global navigation system and a Doppler velocity log and depth sensor.</div>
                                    <div className="text-white my-3 d-none">Specifications</div>
                                    <div className="row g-0 d-none">
                                        <div className="col-lg-4">
                                            <div className="option">
                                                <div className="dot"></div>
                                                <h3 className="text-white mb-0">30 nm</h3>
                                                <div className="text-white">Range</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="option">
                                                <div className="dot"></div>
                                                <h3 className="text-white mb-0">30 nm</h3>
                                                <div className="text-white">Range</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="option last">
                                                <div className="dot"></div>
                                                <h3 className="text-white mb-0">30 nm</h3>
                                                <div className="text-white">Range</div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    <div className="capabilities-card">
                        <div className="row">
                            <div className="col-lg-6">
                                <motion.div initial={{ opacity: 0, x: 50}}
                                     animate={{ opacity: 1, x: 0 }}
                                     transition={{ duration: 0.5, ease: "easeIn" }}
                                     className="card-left">

                                    <div className="product-img mb-5 ">
                                        <video
                                            width="1905" height="909"
                                            className="w-100 h-100 rounded"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                        >
                                            <source src="/img/tab-video.mp4" type="video/mp4" />
                                            <source src="/img/tab-video.webm" type="video/webm" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                </motion.div>
                            </div>
                            <div className="col-lg-6">
                                <motion.div initial={{ opacity: 0, y: 50}}
                                     animate={{ opacity: 1, y: 0 }}
                                     transition={{ duration: 0.5, ease: "easeIn" }}
                                     className="card-right">
                                    <h3 className="mb-0 text-white">Fleet Coordination (Swarm Intelligence)</h3>
                                    <div className="text-white my-3">Description</div>
                                    <div className="text">Strydent’s AUV swarms communicate and cooperate with one another in a coordinated manner providing real-time dynamic communication with minimal operator intervention.  Strydent’s AUV swarms can communicate with each other at distances of up to 5 kilometers.  Strydent’s communication technology allows real-time data sharing and communication among AUVs within a swarm to achieve complex and flexible mission execution, enabling the swarm to adapt to changing situations and respond to unexpected events.  Strydent’s AUVs are attritable ensuring mission competency if one or more AUVs are offline.</div>
                                    <div className="text-white my-3">Specifications</div>
                                    <div className="row g-0">
                                        <div className="col-lg-4">
                                            <div className="option">
                                                <div className="dot"></div>
                                                {/*<h3 className="text-white mb-0">30 nm</h3>*/}
                                                <div className="text-white">Maximum range of 5km between AUVs  </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="option">
                                                <div className="dot"></div>
                                                {/*<h3 className="text-white mb-0">30 nm</h3>*/}
                                                <div className="text-white">Real-time data sharing and communication</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="option last">
                                                <div className="dot"></div>
                                                {/*<h3 className="text-white mb-0">30 nm</h3>*/}
                                                <div className="text-white">Attritable ensuring mission competency</div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    <div className="capabilities-card">
                        <div className="row flex-row-reverse">
                            <div className="col-lg-6">
                                <motion.div initial={{ opacity: 0, x: 50}}
                                     animate={{ opacity: 1, x: 0 }}
                                     transition={{ duration: 0.5, ease: "easeIn" }}
                                     className="card-left">
                                    <div className="product-img mb-5">
                                        <video
                                            width="1905" height="909"
                                            className="w-100 h-100 rounded"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                        >
                                            <source src="/img/tab-video.mp4" type="video/mp4" />
                                            <source src="/img/tab-video.webm" type="video/webm" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                </motion.div>
                            </div>
                            <div className="col-lg-6">
                                <motion.div initial={{ opacity: 0, y: 50}}
                                     animate={{ opacity: 1, y: 0 }}
                                     transition={{ duration: 0.5, ease: "easeIn" }}
                                     className="card-right">
                                    <h3 className="mb-0 text-white">Multi-Sensor Data Collection</h3>
                                    <div className="text-white my-3">Description</div>
                                    <div className="text">Each of Strydent’s AUVs is equipped with a suite of sensors, which are modifiable depending on mission and client objectives.  Strydent’s AUV can be equipped to include a sensor package including: a low-power laser-based LiDAR system, side-scan sonar, camera, GPS, depth sensor. The sensor package may optionally contain other mission specific sensors, such as: a fluorometer, magnetometer, sub-bottom profiler, and various chemical sensors.</div>
                                    <div className="text-white my-3">Specifications</div>
                                    <div className="row g-0">
                                        <div className="col-lg-5">
                                            <div className="option">
                                                <div className="dot"></div>
                                                {/*<h3 className="text-white mb-0">30 nm</h3>*/}
                                                <div className="text-white">Suite of modifiable <br/>sensors.</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-7">
                                            <div className="option last">
                                                <div className="dot"></div>
                                                {/*<h3 className="text-white mb-0">30 nm</h3>*/}
                                                <div className="text-white">Customizable depending on mission objectives</div>
                                            </div>
                                        </div>
                                        {/*<div className="col-lg-4">*/}
                                        {/*    <div className="option last">*/}
                                        {/*        <div className="dot"></div>*/}
                                        {/*        <h3 className="text-white mb-0">30 nm</h3>*/}
                                        {/*        <div className="text-white">Range</div>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    <div className="capabilities-card">
                        <div className="row">
                            <div className="col-lg-6">
                                <motion.div initial={{ opacity: 0, x: 50}}
                                     animate={{ opacity: 1, x: 0 }}
                                     transition={{ duration: 0.5, ease: "easeIn" }}
                                     className="card-left">
                                    <div className="product-img mb-5">
                                        <video
                                            width="1905" height="909"
                                            className="w-100 h-100 rounded"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                        >
                                            <source src="/img/tab-video.mp4" type="video/mp4" />
                                            <source src="/img/tab-video.webm" type="video/webm" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                </motion.div>
                            </div>
                            <div className="col-lg-6">
                                <motion.div initial={{ opacity: 0, y: 50}}
                                     animate={{ opacity: 1, y: 0 }}
                                     transition={{ duration: 0.5, ease: "easeIn" }}
                                     className="card-right">
                                    <h3 className="mb-0 text-white">Solar-Powered Energy System</h3>
                                    <div className="text-white my-3">Description</div>
                                    <div className="text">Strydent’s AUVs are equipped with a rechargeable Lithing-ion battery.  Strydent’s AUVs optionally include solar panels to allow continuous operation and in-situ recharging of Li-ion battery.</div>
                                    <div className="text-white my-3 d-none">Specifications</div>
                                    <div className="row g-0 d-none">
                                        <div className="col-lg-4">
                                            <div className="option">
                                                <div className="dot"></div>
                                                <h3 className="text-white mb-0">30 nm</h3>
                                                <div className="text-white">Range</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="option">
                                                <div className="dot"></div>
                                                <h3 className="text-white mb-0">30 nm</h3>
                                                <div className="text-white">Range</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="option last">
                                                <div className="dot"></div>
                                                <h3 className="text-white mb-0">30 nm</h3>
                                                <div className="text-white">Range</div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    <div className="capabilities-card">
                        <div className="row flex-row-reverse">
                            <div className="col-lg-6">
                                <motion.div initial={{ opacity: 0, x: 50}}
                                     animate={{ opacity: 1, x: 0 }}
                                     transition={{ duration: 0.5, ease: "easeIn" }}
                                     className="card-left">
                                    <div className="product-img mb-5">
                                        <video
                                            width="1905" height="909"
                                            className="w-100 h-100 rounded"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                        >
                                            <source src="/img/tab-video.mp4" type="video/mp4" />
                                            <source src="/img/tab-video.webm" type="video/webm" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                </motion.div>
                            </div>
                            <div className="col-lg-6">
                                <motion.div initial={{ opacity: 0, y: 50}}
                                     animate={{ opacity: 1, y: 0 }}
                                     transition={{ duration: 0.5, ease: "easeIn" }}
                                     className="card-right">
                                    <h3 className="mb-0 text-white">Secure Encrypted Communication</h3>
                                    <div className="text-white my-3">Description</div>
                                    <div className="text">Strydent’s AUVs provide real-time data collection and communication providing accurate and instant data transmission.  Each of Strydent’s AUVs is equipped an acoustic sensor providing high speed data transmission with low latency and minimal distortion.  Working in a swarm Strydent’s AUVs can communicate with one another collectively in a secure manner and transmit data to provide real-time decision-making.</div>
                                    <div className="text-white my-3 d-none">Specifications</div>
                                    <div className="row g-0 d-none">
                                        <div className="col-lg-4">
                                            <div className="option">
                                                <div className="dot"></div>
                                                <h3 className="text-white mb-0">30 nm</h3>
                                                <div className="text-white">Range</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="option">
                                                <div className="dot"></div>
                                                <h3 className="text-white mb-0">30 nm</h3>
                                                <div className="text-white">Range</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="option last">
                                                <div className="dot"></div>
                                                <h3 className="text-white mb-0">30 nm</h3>
                                                <div className="text-white">Range</div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
                        <div className="col-lg-10 mx-auto">
                            <motion.div
                                initial={{ opacity: 0, x: -50}}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, ease: "easeIn" }}
                                className="about-four-info bg-dark-v2 text-white px-4 py-4 px-lg-5 py-lg-5 rounded-top-2 d-block text-center">
                                <div className="heading-box">
                                    <p className="text-uppercase letter-spacing text-white">Strydent’s AUV</p>
                                    <h2 className="text-white">Help us continue our mission</h2>
                                </div>
                                <div className="section-details mb-4 px-lg-5">
                                    <p className="text-white">Strengthening our nation’s families through programs designed to encourage healing, reduce challenges, and overcome obstacles together.</p>
                                </div>
                                <Link href="/contact-us" className="btn btn-primary v2">Contact Us <i className="flaticon-next"></i></Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="features-section-one d-none">
                <div className="container-fluid">
                    <div className="row align-items-center justify-content-center justify-content-xl-start">
                        <div className="col-lg-6">
                            <div className="features-one-image">
                                <Image src="/img/features-1.jpg" width="444" height="750" alt="features-image" />
                                    <div className="image-shape">
                                        <span></span>
                                        <span></span>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="features-one-info">
                                <div className="heading-box">
                                    <h2 className="heading-title wow fadeInUp animated animated">Strydent’s AUV</h2>
                                </div>
                                <div className="features-one-list-block">
                                    <h3>Initial Focus</h3>
                                    <ul className="features-one-list">
                                        <li className="w-100">Create solar cells that can recharge the Li-ion battery in a harsh ocean environment.</li>
                                        <li className="w-100">Develop a generative AI Platform for navigation and multi-sensor, real-time data analysis.</li>
                                        <li className="w-100">Develop a laser-based data transfer system (Utilize RF in the interim).</li>
                                        <li className="w-100">Optimize in-situ communication among fleet of AUVs.</li>
                                    </ul>
                                </div>
                                <div className="features-one-list-block">
                                    <h3>Value Proposition</h3>
                                    <ul className="features-one-list">
                                        <li className="w-100">IPO or M&A after 4-5 years</li>
                                        <li className="w-100">Following optimization of small swarm (20-50 AUVs)</li>
                                        <li className="w-100">Average cost per AUV of approximately $500K</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Cta />
        </MainLayout>
    );
}

