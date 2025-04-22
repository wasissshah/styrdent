import Image from "next/image";

export default function Teams() {
    return (
        <section className="team-one">
            <div className="team-shape-one-1">
                <Image src="/img/shape/team-shape-1.png" width="90" height="70" alt="shape" />
            </div>
            <div className="team-shape-one-2">
                <Image src="/img/shape/team-shape-2.png" width="90" height="70" alt="shape" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12 m-auto">
                        <div className="heading-box text-center">
                            <span className="heading-subtitle wow fadeInUp animated animated">🤝 OUR TEAM</span>
                            <h2 className="heading-title wow fadeInUp animated animated">The team driving innovation and
                                excellence in financial services</h2>
                        </div>
                    </div>
                </div>
                <div className="row gutter-y-30">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="team-one-box">
                            <a href="team-details.html" className="team-one-image">
                                <Image src="/img/team/team-1.jpg" width="306" height="435" alt="team-image" />
                            </a>
                            <div className="team-one-details">
                                <div className="team-one-details-inner">
                                    <h5>Joan Johnson</h5>
                                    <p>Chief Financial Officer</p>
                                    <div className="team-one-social-media">
                                        <ul>
                                            <li><a href="https://www.facebook.com/" target="_blank"><i
                                                className="fa-brands fa-facebook-f"></i></a></li>
                                            <li><a href="https://www.instagram.com/" target="_blank"><i
                                                className="fa-brands fa-instagram"></i></a></li>
                                            <li><a href="https://in.linkedin.com/" target="_blank"><i
                                                className="fa-brands fa-linkedin-in"></i></a></li>
                                            <li><a href="https://x.com/" target="_blank"><i
                                                className="fa-brands fa-twitter"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="team-one-box">
                            <a href="team-details.html" className="team-one-image">
                                <Image src="/img/team/team-2.jpg" width="306" height="435" alt="team-image" />
                            </a>
                            <div className="team-one-details">
                                <div className="team-one-details-inner">
                                    <h5>Donnie Southern</h5>
                                    <p>Head Of Operation</p>
                                    <div className="team-one-social-media">
                                        <ul>
                                            <li><a href="https://www.facebook.com/" target="_blank"><i
                                                className="fa-brands fa-facebook-f"></i></a></li>
                                            <li><a href="https://www.instagram.com/" target="_blank"><i
                                                className="fa-brands fa-instagram"></i></a></li>
                                            <li><a href="https://in.linkedin.com/" target="_blank"><i
                                                className="fa-brands fa-linkedin-in"></i></a></li>
                                            <li><a href="https://x.com/" target="_blank"><i
                                                className="fa-brands fa-twitter"></i></a>
                                            </li>
                                        </ul>
                                    </div>
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
                                    <h5>Alexandra Southern</h5>
                                    <p>Branch Manager</p>
                                    <div className="team-one-social-media">
                                        <ul>
                                            <li><a href="https://www.facebook.com/" target="_blank"><i
                                                className="fa-brands fa-facebook-f"></i></a></li>
                                            <li><a href="https://www.instagram.com/" target="_blank"><i
                                                className="fa-brands fa-instagram"></i></a></li>
                                            <li><a href="https://in.linkedin.com/" target="_blank"><i
                                                className="fa-brands fa-linkedin-in"></i></a></li>
                                            <li><a href="https://x.com/" target="_blank"><i
                                                className="fa-brands fa-twitter"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="team-one-box">
                            <a href="team-details.html" className="team-one-image">
                                <Image src="/img/team/team-4.jpg" width="306" height="435" alt="team-image" />
                            </a>
                            <div className="team-one-details">
                                <div className="team-one-details-inner">
                                    <h5>Alexandra Southern</h5>
                                    <p>Regional Manager</p>
                                    <div className="team-one-social-media">
                                        <ul>
                                            <li><a href="https://www.facebook.com/" target="_blank"><i
                                                className="fa-brands fa-facebook-f"></i></a></li>
                                            <li><a href="https://www.instagram.com/" target="_blank"><i
                                                className="fa-brands fa-instagram"></i></a></li>
                                            <li><a href="https://in.linkedin.com/" target="_blank"><i
                                                className="fa-brands fa-linkedin-in"></i></a></li>
                                            <li><a href="https://x.com/" target="_blank"><i
                                                className="fa-brands fa-twitter"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};