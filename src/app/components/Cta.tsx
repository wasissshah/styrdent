"use client";

import Image from "next/image";
import {motion} from "framer-motion";

export default function CTA() {
    return (
        <section className="cta-one">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-lg-6">
                        <motion.div
                            initial={{ opacity: 0, x: -50}}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, ease: "easeIn" }}
                            className="cta-title text-white">
                            <h2 className="text-white font-900">Mission-Ready for Strategic Impact</h2>
                        </motion.div>
                    </div>
                    <div className="col-lg-6">
                        <motion.div
                            initial={{ opacity: 0, x: -50}}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2, ease: "easeIn" }}
                            className="cta-title text-white">
                            <p className="text-white">Built for U.S. military defense, offshore platform protection, mine detection, and real-time reconnaissance missions. Fleet units act as a coordinated barrier for national asset protection.</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};