// pages/team.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";

const teamMembers = [
    { name: "Dean L. Fanelli", role: "Ph.D, J.D", image: "/img/team/team-1.jpg" },
    { name: "Johne Shire", role: "J.D", image: "/img/team/team-3.jpg" },
    { name: "William Poster", role: "Former Chairman", image: "/img/team/team-1.jpg" },
    { name: "Mike Smith", role: "President & CEO", image: "/img/team/team-3.jpg" },
    { name: "Michael Golda", role: "Ph.D.", image: "/img/team/team-1.jpg" },
    { name: "Frank Gerace", role: "Former Division Quality", image: "/img/team/team-3.jpg" },
    { name: "Michael Gilday", role: "Former Chief of Naval", image: "/img/team/team-1.jpg" },
];

export default function TeamPage() {
    const pathname = usePathname();
    const isHome = pathname === "/";

    return (
        <section className="team-one bg-white">
            <div className="container">
                {
                    isHome
                        ?
                        <div className="row mb-4">
                            <div className="col-lg-8 col-md-12 m-auto">
                                <div className="heading-box text-center">
                                    <span className="heading-subtitle border-0">OUR TEAM</span>
                                    <h2 className="heading-title">Meet the Minds Behind the Mission</h2>
                                </div>
                            </div>
                        </div>
                        :
                        ''
                }
                <div className="row gutter-y-30 justify-content-center" id="team-sliderd">
                    {teamMembers.map((member, index) => (
                        <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
                            <div className="team-one-box">
                                <Link
                                    href={{
                                        pathname: "/team-details",
                                        query: {
                                            name: member.name,
                                            role: member.role,
                                            image: member.image,
                                        },
                                    }}
                                >
                                    <div className="team-one-image">
                                        <Image
                                            src={member.image}
                                            width={306}
                                            height={435}
                                            alt={member.name}
                                        />
                                    </div>
                                    <div className="team-one-details">
                                        <div className="team-one-details-inner">
                                            <h5>{member.name}</h5>
                                            <p>{member.role}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}