"use client";

import Image from "next/image";
import {motion} from "framer-motion";

interface BreadcrumbItem {
    label: string;
    href: string;
}

interface PageBannerProps {
    title: string;
    backgroundImage: string;
    breadcrumb: BreadcrumbItem[];
}

export default function PageBanner({
    title,
    backgroundImage,
    breadcrumb,
    }: PageBannerProps) {
    return (
        <div
            className="inner-page-hero bg-dark-v2"
            style={{ backgroundImage: `url(${backgroundImage}) !important` }}
        >
            <motion.div
                initial={{ opacity: 0, y: 50}}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeIn" }}
                className="container">
                <div
                    className="hero-heading-title text-center">
                    <p className="text-uppercase letter-spacing text-primary position-relative z-3">Strydent Autonomous Technologies</p>
                    <h1 className="text-white display-1 fw-bold">{title}</h1>
                </div>
                <ul className="bradcrumb justify-content-center">
                    {breadcrumb.map((item, index) => (
                        <li key={index}>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </div>
    );
}
