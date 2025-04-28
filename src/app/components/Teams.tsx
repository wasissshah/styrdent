import Image from "next/image";

export default function Teams() {
    return (
        <section className="team-one bg-white">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12 m-auto">
                        <div className="heading-box text-center">
                            <span className="heading-subtitle wow fadeInUp animated animated">OUR TEAM</span>
                            <h2 className="heading-title wow fadeInUp animated animated">Meet the Minds Behind the Mission</h2>
                        </div>
                    </div>
                </div>
                <div className="row gutter-y-30 justify-content-center">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="team-one-box">
                            <a href="team-details.html" className="team-one-image">
                                <Image src="/img/team/team-1.jpg" width="306" height="435" alt="team-image" />
                            </a>
                            <div className="team-one-details">
                                <div className="team-one-details-inner">
                                    <h5>Dean L. Fanelli</h5>
                                    <p>Ph.D, J.D</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="team-one-box">
                            <a href="team-details.html" className="team-one-image">
                                <Image src="/img/team/team-5.jpg" width="306" height="435" alt="team-image" />
                            </a>
                            <div className="team-one-details">
                                <div className="team-one-details-inner">
                                    <h5>Johne Shire</h5>
                                    <p>J.D</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="team-one-box">
                            <a href="team-details.html" className="team-one-image">
                                <Image src="/img/team/team-3.jpg" width="306" height="435" alt="team-image" />
                            </a>
                            <div className="team-one-details">
                                <div className="team-one-details-inner">
                                    <h5>William Poster</h5>
                                    <p>Former Chairman</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="team-one-box">
                            <a href="team-details.html" className="team-one-image">
                                <Image src="/img/team/team-7.jpg" width="306" height="435" alt="team-image" />
                            </a>
                            <div className="team-one-details">
                                <div className="team-one-details-inner">
                                    <h5>Mike Smith</h5>
                                    <p>President & CEO</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="team-one-box">
                            <a href="team-details.html" className="team-one-image">
                                <Image src="/img/team/team-8.jpg" width="306" height="435" alt="team-image" />
                            </a>
                            <div className="team-one-details">
                                <div className="team-one-details-inner">
                                    <h5>Micheal Golda</h5>
                                    <p>Ph.D.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="team-one-box">
                            <a href="team-details.html" className="team-one-image">
                                <Image src="/img/team/team-9.jpg" width="306" height="435" alt="team-image" />
                            </a>
                            <div className="team-one-details">
                                <div className="team-one-details-inner">
                                    <h5>Frank Gerace</h5>
                                    <p>Former Division Quality</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="team-one-box">
                            <a href="team-details.html" className="team-one-image">
                                <Image src="/img/team/team-10.jpg" width="306" height="435" alt="team-image" />
                            </a>
                            <div className="team-one-details">
                                <div className="team-one-details-inner">
                                    <h5>Micheal Gilday</h5>
                                    <p>Former Chief of Naval</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};