import Image from "next/image";

export default function CTA() {
    return (
        <section className="cta-one">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-xl-8 col-md-9 col-sm-9 col-9">
                        <div className="cta-title">
                            <h2>Mission-Ready for Strategic Impact</h2>
                            <h3>Built for U.S. military defense, offshore platform protection, mine detection,
                                and real-time reconnaissance missions. Fleet units act as a coordinated barrier for national
                                asset protection.</h3>
                        </div>
                        <a href="contact-us.html" className="btn btn-primary v2">Contact us <i className="flaticon-next"></i></a>
                    </div>
                    <div className="col-md-3 col-sm-3 col-3">
                        <Image src="/img/cta-Logo.png" width="300" height="300" alt="logo" />
                    </div>
                </div>
            </div>
        </section>
    );
};