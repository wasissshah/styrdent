"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
const MotionImage = motion(Image);

export default function Hero2() {
    return (
        <section className="banner-two">
            <div className="logo-wrapper">
                <MotionImage
                    src="/img/logo2.svg"
                    className="logo-lg fadeOut"
                    initial={{ opacity: 0, x: -400}}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeIn" }}
                    width="200"
                    height="100"
                    alt="logo" />
            </div>

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
                                <source src="/img/hero.webm" type="video/webm" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="container">
                            <motion.div
                                className="m-auto"
                                initial={{ opacity: 0, y: 50}}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 1, ease: "easeIn" }}
                            >
                                <div className="banner-two-info text-center">
                                    <div className="section-details">
                                        <p className="text-uppercase letter-spacing">Strydent Autonomous Technologies</p>
                                    </div>
                                    <div className="banner-title">
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
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};