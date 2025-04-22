import MainLayout from "./layouts/MainLayout";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Cta from "./components/Cta";
import RecentBlogs from "./components/Recent-Blogs";
import Testimonials from "./components/Testimonials";
import Teams from "./components/Teams";
import Process from "./components/Process";
import Partners from "./components/Partners";
import WhyChoose from "./components/Why-Choose";
import WhoWeAre from "./components/Who-We-Are";
import AboutSection from "./components/About-Section";
import Image from "next/image";

export default function Home() {
    return (
        <MainLayout>
            <Hero />
            <Partners />
            <Services />
            <div className="about-four bg-primary pt-5 pb-0">
                <video
                    width="1905" height="909"
                    className="w-100 h-100 background"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/img/background.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="container pt-5">
                    <div className="row gutter-y-60">
                        <div className="col-lg-7 offset-lg-5">
                            <div className="about-four-info bg-dark-v2 text-white px-5 py-5 rounded-top-2">
                                <div className="heading-box">
                                    <h2 className="heading-title text-white wow fadeInUp animated animated">Mission Below the Surface</h2>
                                </div>
                                <div className="section-details">
                                    <p className="text-white">Watch Strydent’s autonomous underwater fleet operate in real-time — navigating, analyzing, and executing with zero human input. Built for stealth. Designed for resilience. Powered by AI.</p>
                                </div>
                                <a href="contact-us.html" className="btn btn-primary v2">Specifications <i className="flaticon-next"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<WhoWeAre />*/}
            {/*<WhyChoose />*/}
            {/*<Process />*/}
            <Teams />
            {/*<Testimonials />*/}
            {/*<RecentBlogs />*/}
            <Cta />
        </MainLayout>
    );
}

