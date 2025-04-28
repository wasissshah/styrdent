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
import Hero2 from "./components/Hero2";

export default function Home() {
    return (
        <MainLayout>
            <Hero2 />
            {/*<Hero />*/}
            <div className="features-two">
                <div className="container-fluid p-0">
                    <div className="features-slider-three font-play">
                        <div className="features-three-slider-item">
                            <h3>Next-Gen AUVs</h3>
                        </div>
                        <div className="features-three-slider-item">
                            <h3>AI-Driven Navigation</h3>
                        </div>
                        <div className="features-three-slider-item">
                            <h3>Underwater Surveillance</h3>
                        </div>
                        <div className="features-three-slider-item">
                            <h3>Smart Ocean Drones</h3>
                        </div>
                        <div className="features-three-slider-item">
                            <h3>Real-Time Recon</h3>
                        </div>
                        <div className="features-three-slider-item">
                            <h3>Tactical Sea Tech</h3>
                        </div>
                        <div className="features-three-slider-item">
                            <h3>Deepwater Defense</h3>
                        </div>
                    </div>
                </div>
            </div>
            <Services />
            {/*<Partnnpers />*/}
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
            <div className="services-two">
                <div className="services-two-inner-bg bg-white">
                    <div className="container">
                        <div className="heading-box mb-5">
                            <span className="heading-subtitle wow fadeInUp animated animated">Strydent Technology</span>
                            <h2 className="heading-title wow fadeInUp animated animated">Technology That Powers the Depths</h2>
                        </div>
                        <ul className="nav nav-tabs justify-content-between border-0" id="services-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="personal-tab" data-bs-toggle="tab"
                                        data-bs-target="#personal-tab-pane" type="button" role="tab"
                                        aria-controls="personal-tab-pane" aria-selected="true">
                                    <span>AI Navigation</span>
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="mortgage-tab" data-bs-toggle="tab"
                                        data-bs-target="#mortgage-tab-pane" type="button" role="tab"
                                        aria-controls="mortgage-tab-pane" aria-selected="false">
                                    <span>Swarm Coordination</span>
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="emergency-tab" data-bs-toggle="tab"
                                        data-bs-target="#emergency-tab-pane" type="button" role="tab"
                                        aria-controls="emergency-tab-pane" aria-selected="false">
                                    <span>Sensor Intelligence</span>
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="business-tab" data-bs-toggle="tab"
                                        data-bs-target="#business-tab-pane" type="button" role="tab"
                                        aria-controls="business-tab-pane" aria-selected="false">
                                    <span>Power Supply</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="tab-content" id="services-tab-content">
                    <div className="tab-pane fade show active" id="personal-tab-pane" role="tabpanel"
                         aria-labelledby="personal-tab" tabIndex="0">
                        <div className="container">
                            <div className="row align-items-start align-items-xl-center gutter-y-30">
                                <div className="col-lg-4">
                                    <div className="services-two-image">
                                        <Image src="/img/tab1.jpg" className="img-fluid rounded" width="526" height="586" alt="services-image" />
                                            <div className="image-shape">
                                                <span></span>
                                                <span></span>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="services-two-info">
                                        <h3>Autonomous AI Navigation</h3>
                                        <div className="services-two-details">
                                            <p>Strydent’s AUVs are equipped with a next-generation generative AI platform that enables true autonomy below the surface. Each vehicle makes independent decisions based on environmental data, mission parameters, and real-time sensor inputs. With no need for GPS or surface communication, the AI navigates terrain, avoids hazards, and adjusts paths dynamically — even in highly unpredictable or GPS-denied environments. This autonomy transforms mission capabilities and minimizes operational risk.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="mortgage-tab-pane" role="tabpanel" aria-labelledby="mortgage-tab"
                         tabIndex="0">
                        <div className="container">
                            <div className="row align-items-start align-items-xl-center gutter-y-30">
                                <div className="col-lg-4">
                                    <div className="services-two-image">
                                        <Image src="/img/tab2.jpg" width="526" className="img-fluid rounded" height="586" alt="services-image" />
                                            <div className="image-shape">
                                                <span></span>
                                                <span></span>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="services-two-info">
                                        <h3>Swarm Coordination</h3>
                                        <div className="services-two-details">
                                            <p>Our fleet-based architecture allows AUVs to work together as an intelligent swarm. Each vehicle communicates in real-time with others in the network to share reconnaissance data, identify threats, and maintain optimal formation. This distributed coordination creates a virtual underwater barrier capable of protecting vast regions. Whether deployed as a small tactical unit or a swarm of thousands, Strydent’s AUVs operate as one cohesive system — adaptive, scalable, and resilient.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="emergency-tab-pane" role="tabpanel"
                         aria-labelledby="emergency-tab" tabIndex="0">
                        <div className="container">
                            <div className="row align-items-start align-items-xl-center gutter-y-30">
                                <div className="col-lg-4">
                                    <div className="services-two-image">
                                        <Image src="/img/tab3.jpg" className="img-fluid rounded" width="526" height="586" alt="services-image" />
                                            <div className="image-shape">
                                                <span></span>
                                                <span></span>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="services-two-info">
                                        <h3>Multi-Sensor Intelligence</h3>
                                        <div className="services-two-details">
                                            <p>Every Strydent AUV carries a sophisticated suite of sensors — including sonar, LiDAR, chemical sensors, thermal imaging, electromagnetic sensors, and high-definition video. These components work in unison to scan, detect, and analyze the surrounding environment in real time. The result is deep situational awareness for threat detection, environmental monitoring, and data-driven decision-making. Modular design also allows for sensor upgrades or customization based on specific mission needs.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="business-tab-pane" role="tabpanel" aria-labelledby="business-tab"
                         tabIndex="0">
                        <div className="container">
                            <div className="row align-items-start align-items-xl-center gutter-y-30">
                                <div className="col-lg-4">
                                    <div className="services-two-image">
                                        <Image src="/img/tab4.jpg" className="img-fluid rounded" width="526" height="586" alt="services-image" />
                                            <div className="image-shape">
                                                <span></span>
                                                <span></span>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="services-two-info">
                                        <h3>Continuous Power Supply</h3>
                                        <div className="services-two-details">
                                            <p>Built for long-duration operations, Strydent’s AUVs feature a solar-powered, rechargeable lithium-ion battery system. Wing-mounted solar cells capture energy even in harsh marine conditions, allowing each vehicle to remain mission-ready without returning to base. For environments where solar is not viable, we offer a prototype with direct-charge capability. This dual-power design ensures flexibility, sustained deployment, and near-limitless mission durations — making the fleet ideal for persistent underwater presence.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="why-choose-section-one">
                {/*<Image src="/img/bg-blue2.jpg" className="bg" width="1920" height="1000"></Image>*/}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="heading-box heading-white text-center">
                                <h2 className="heading-title wow fadeInUp animated animated">Key Capabilities of Strydent AUVs</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 pe-lg-5">
                            <div className="why-choose-one-box text-center text-lg-end mb-5">
                                <div className="why-choose-box-one-title d-block">
                                    <Image src="/img/solar.svg" width="60" height="80" alt="team-image" />
                                    <h4>Solar Powered</h4>
                                </div>
                                <p>Harnesses solar energy to enable long-duration underwater missions without the need for surfacing.
                                </p>
                            </div>
                            <div className="why-choose-one-box text-center text-lg-end mb-5">
                                <div className="why-choose-box-one-title d-block">
                                    <Image src="/img/sensors.svg" width="60" height="80" alt="team-image" />
                                    <h4>Array of Sensors</h4>
                                </div>
                                <p>Equipped with multi-spectrum sensors for real-time data collection and persistent underwater awareness.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                            <div className="why-choose-one-box">
                                <video
                                    width="1905" height="909"
                                    className="capabilities-video rounded shadow shadow-lg"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                >
                                    <source src="/img/future.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 ps-lg-5">
                            <div className="why-choose-one-box text-center text-lg-start mb-5">
                                <div className="why-choose-box-one-title d-block">
                                    <Image src="/img/ai.svg" width="60" height="80" alt="team-image" />
                                    <h4>Generative AI</h4>
                                </div>
                                <p>Empowered by AI to make mission-critical decisions independently and adapt to changing conditions.
                                </p>
                            </div>
                            <div className="why-choose-one-box mb-5">
                                <div className="why-choose-box-one-title text-center text-lg-start d-block">
                                    <Image src="/img/tactical.svg" width="50" height="60" alt="team-image" />
                                    <h4>Tactical</h4>
                                </div>
                                <p>Designed to detect, deter, or neutralize underwater threats with precision tactical capabilities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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

