import Image from "next/image";

export default function CTA() {
    return (
        <section className="cta-one">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-xl-8 col-md-9 col-sm-9 col-9">
                        <div className="cta-title">
                            <h2>We build trust with our customers by combining creativity with tailored business loan
                                solutions.</h2>
                        </div>
                        <a href="contact-us.html" className="btn btn-secondary">Contact us <i
                            className="flaticon-next"></i></a>
                    </div>
                    <div className="col-md-3 col-sm-3 col-3">
                        <Image src="/img/cta-Logo.png" width="300" height="300" alt="logo" />
                    </div>
                </div>
            </div>
        </section>
    );
};