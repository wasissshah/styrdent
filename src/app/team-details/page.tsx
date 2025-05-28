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
    const text = searchParams.get("text");

    return (
        <>
            <PageBanner
                title={name || "Team Member"}
                backgroundImage="/img/footer-bg.jpg"
                breadcrumb={[
                    { label: role || "Details", href: "#" },
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
                                    {text}
                                </p>
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
