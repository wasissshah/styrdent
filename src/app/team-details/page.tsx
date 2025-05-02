"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Image from "next/image";
import MainLayout from "../layouts/MainLayout";
import PageBanner from "../components/Page-Banner";
import Cta from "../components/Cta";

function TeamDetailContent() {
    const searchParams = useSearchParams();
    const name = searchParams.get("name");
    const role = searchParams.get("role");
    const image = searchParams.get("image");

    return (
        <>
            <PageBanner
                title={name || "Team Member"}
                backgroundImage="/img/footer-bg.jpg"
                breadcrumb={[
                    { label: "Home", href: "/" },
                    { label: "Team", href: "/team" },
                    { label: name || "Details", href: "#" },
                ]}
            />

            <div className="team-details-section">
                <div className="container">
                    <div className="row gutter-y-30 gutter-x-15">
                        <div className="col-lg-4">
                            <div className="left-side-sticy">
                                <div className="team-details-block">
                                    <div className="team-images">
                                        {image && (
                                            <Image
                                                src={image}
                                                className="img-fluid"
                                                width={412}
                                                height={448}
                                                alt="team-image"
                                            />
                                        )}
                                    </div>
                                </div>
                                <div className="team-social-media">
                                    <h3>{role || "Specialist"}</h3>
                                    <ul>
                                        <li>
                                            <h4>Email Address</h4>
                                            <a href="mailto:example@example.com">example@example.com</a>
                                        </li>
                                        <li>
                                            <h4>Phone Number</h4>
                                            <a href="tel:+15551234567">(555) 123-4567</a>
                                        </li>
                                        <li>
                                            <h4>LinkedIn</h4>
                                            <a href="https://www.linkedin.com/">linkedin.com/in/example</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8">
                            <div className="team-details-block">
                                <p>
                                    {name} brings deep expertise to our organization, with a focus on innovation, leadership, and impact.
                                    Known for their strategic thinking and commitment to excellence, they play a vital role in our
                                    mission-driven approach.
                                </p>
                            </div>

                            <div className="team-details-block">
                                <h4>Career</h4>
                                <p>
                                    Their career path includes leadership positions in mission-critical industries, where they’ve
                                    influenced teams and delivered exceptional results.
                                </p>
                            </div>

                            <div className="team-details-block">
                                <h4>Work Experience</h4>
                                <ul className="team-details-list">
                                    <li>Senior Executive | DefenseCorp</li>
                                    <li>AI Strategist | NextGen Robotics</li>
                                    <li>Technical Director | DeepSea Systems</li>
                                </ul>
                            </div>

                            <div className="team-details-block">
                                <h4>Achievements</h4>
                                <ul className="team-details-list">
                                    <li>Developed key AUV AI algorithms used in real-world operations</li>
                                    <li>Led successful missions across strategic underwater domains</li>
                                    <li>Awarded for innovation in autonomous systems</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Cta />
        </>
    );
}

export default function TeamDetailPage() {
    return (
        <MainLayout>
            <Suspense fallback={<div>Loading...</div>}>
                <TeamDetailContent />
            </Suspense>
        </MainLayout>
    );
}
