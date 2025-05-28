// pages/team.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";

const teamMembers = [
    { name: "William Poster", role: "Chairman, Board of Directors, Strydent Autonomous Technologies", image: "/img/william-poster.jpg", text: "William Poster is Chair of the Board of Directors of Strydent Autonomous Technologies, Inc.  Mr. Poster is a seasoned business executive and entrepreneur with an outstanding track record of creating, growing, and harvesting business opportunities. The breadth of his capabilities is evidenced by his creation of successful businesses throughout the world. His accomplishments include being the Founder, Chairman, CEO and sole shareholder of multiple companies spanning five continents and over 50 countries. He is known publicly as the former President of General Dynamics-CSCC, a leading edge international communications and technology company that he founded and sold to General Dynamics Corporation (NYSE: GD). In addition to serving on numerous corporate boards, his less public endeavors include projects related to real estate, defense, education, energy, microfinance, and sports, media, music & entertainment. During Mr. Poster's career he has skillfully applied his international expertise on both business and political levels. His extensive knowledge of the international technology, defense and communications marketplace was acquired through direct negotiation and construction of sophisticated military and commercial systems for both business and governments in Europe, Asia, Africa, and the Middle East. He has also been successful, as both a principal and a general partner, in creating and developing large-scale real estate and investment projects in the U.S. and abroad. Mr. Poster's educational background includes a business degree and a law degree from The University of Michigan and The George Washington University, respectively. He has been  a member of the District of Columbia Bar Association, The Army Navy Club and numerous other professional, civic and social organizations. Other former noteworthy positions include Founder and Director of SECAF, Founder and Managing Partner of The Eagle Rock Group, as well as staff level positions at The United States Securities & Exchange Commission, The United States Small Business Administration, Mitsui Bank Limited, NY, et. al." },
    { name: "Dean L. Fanelli", role: "Ph.D., Chief Executive Officer and President, Strydent Autonomous Technologies", image: "/img/dean-l-fanelli.jpg", text: "" },
    { name: "John P. Shire", role: "J.D., Chief Operating Officer, Strydent Autonomous Technologies", image: "/img/john-p.jpg", text: "" },
    { name: "Mike Smith", role: "Board of Advisors Member, Strydent Autonomous Technologies", image: "/img/mike-smith.jpg", text: "" },
    { name: "Frank Gerace", role: "Director of Engineering, Board of Advisors Member, Strydent Autonomous Technologies", image: "/img/team/team-3.jpg", text: "" },
    { name: "Admiral Michael Jabaley Ret.", role: "Board of Advisors Member, Strydent Autonomous Technologies", image: "/img/admiral-michael-jabaley-ret.jpg", text: "" },
    { name: "Nickolas Guertin", role: "Board of Advisors Member, Strydent Autonomous Technologies", image: "/img/nickolas-guertin.jpg", text: "" },
    { name: "Thomas Reynolds", role: "Board of Advisors Member, Strydent Autonomous Technologies", image: "/img/thomas-reynolds.jpg", text: "" },
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
                                            text: member.text,
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