import Image from "next/image";

export default function CTA() {
    return (
        <section className="cta-one">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-lg-6">
                        <div className="cta-title text-white">
                            <h2 className="text-white font-900">Mission-Ready for Strategic Impact</h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="cta-title text-white">
                            <p className="text-white">Built for U.S. military defense, offshore platform protection, mine detection, and real-time reconnaissance missions. Fleet units act as a coordinated barrier for national asset protection.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};