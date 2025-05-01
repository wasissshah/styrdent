import MainLayout from "./../layouts/MainLayout";
import Image from "next/image";
import Hero from "./../components/Hero";
import Services from "./../components/Services";
import Cta from "./../components/Cta";
import RecentBlogs from "./../components/Recent-Blogs";
import Testimonials from "./../components/Testimonials";
import Teams from "./../components/Teams";
import Process from "./../components/Process";
import Partners from "./../components/Partners";
import WhyChoose from "./../components/Why-Choose";
import WhoWeAre from "./../components/Who-We-Are";
import PageBanner from "../components/Page-Banner";
import ContactSection from "../components/Contact-Section";
import ContactForm from "../components/Contact-Form";
import AboutSection from "../components/About-Section";
import ProductSection from "../components/Product-Section";
import ProductSectionTwo from "../components/Product-Section-Two";

export default function AboutUs() {
    return (
        <MainLayout>
            <PageBanner
                title="Capabilities"
                backgroundImage=""
                breadcrumb={[
                    { label: "Home", href: "/" },
                    { label: "Capabilities", href: "#" },
                ]}
            />
            <section className="capabilities-section">
                <div className="container">
                    <div className="capabilities-card">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card-left">
                                    <h2 className="mb-0 text-white">Autonomous Navigation</h2>
                                    <div className="product-img my-5">
                                        <Image src="/img/ship-img.webp" className="img-fluid" width="100" height="100" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-right">
                                    <div className="text-white my-3">Description</div>
                                    <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                                    <div className="text-white my-3">Specifications</div>
                                    <div className="row g-0">
                                        <div className="col-lg-4">
                                            <div className="option">
                                                <div className="dot"></div>
                                                <h3 className="text-white mb-0">30 nm</h3>
                                                <div className="text-white">Range</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="option">
                                                <div className="dot"></div>
                                                <h3 className="text-white mb-0">30 nm</h3>
                                                <div className="text-white">Range</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="option last">
                                                <div className="dot"></div>
                                                <h3 className="text-white mb-0">30 nm</h3>
                                                <div className="text-white">Range</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="capabilities-card">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card-left">
                                    <h2 className="mb-0 text-white">Fleet Coordination (Swarm Intelligence)</h2>
                                    <div className="product-img my-5">
                                        <Image src="/img/ship-img.webp" className="img-fluid" width="100" height="100" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-right">
                                    <div className="text-white my-3">Description</div>
                                    <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                                    <div className="text-white my-3">Specifications</div>
                                    <div className="row g-0">
                                        <div className="col-lg-4">
                                            <div className="option">
                                                <div className="dot"></div>
                                                <h3 className="text-white mb-0">30 nm</h3>
                                                <div className="text-white">Range</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="option">
                                                <div className="dot"></div>
                                                <h3 className="text-white mb-0">30 nm</h3>
                                                <div className="text-white">Range</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="option last">
                                                <div className="dot"></div>
                                                <h3 className="text-white mb-0">30 nm</h3>
                                                <div className="text-white">Range</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="capabilities-card">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card-left">
                                    <h2 className="mb-0 text-white">Multi-Sensor Data Collection</h2>
                                    <div className="product-img my-5">
                                        <Image src="/img/ship-img.webp" className="img-fluid" width="100" height="100" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-right">
                                    <div className="text-white my-3">Description</div>
                                    <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                                    <div className="text-white my-3">Specifications</div>
                                    <div className="row g-0">
                                        <div className="col-lg-4">
                                            <div className="option">
                                                <div className="dot"></div>
                                                <h3 className="text-white mb-0">30 nm</h3>
                                                <div className="text-white">Range</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="option">
                                                <div className="dot"></div>
                                                <h3 className="text-white mb-0">30 nm</h3>
                                                <div className="text-white">Range</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="option last">
                                                <div className="dot"></div>
                                                <h3 className="text-white mb-0">30 nm</h3>
                                                <div className="text-white">Range</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="capabilities-card">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card-left">
                                    <h2 className="mb-0 text-white">Solar-Powered Energy System</h2>
                                    <div className="product-img my-5">
                                        <Image src="/img/ship-img.webp" className="img-fluid" width="100" height="100" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-right">
                                    <div className="text-white my-3">Description</div>
                                    <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                                    <div className="text-white my-3">Specifications</div>
                                    <div className="row g-0">
                                        <div className="col-lg-4">
                                            <div className="option">
                                                <div className="dot"></div>
                                                <h3 className="text-white mb-0">30 nm</h3>
                                                <div className="text-white">Range</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="option">
                                                <div className="dot"></div>
                                                <h3 className="text-white mb-0">30 nm</h3>
                                                <div className="text-white">Range</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="option last">
                                                <div className="dot"></div>
                                                <h3 className="text-white mb-0">30 nm</h3>
                                                <div className="text-white">Range</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="capabilities-card">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card-left">
                                    <h2 className="mb-0 text-white">Secure Encrypted Communication</h2>
                                    <div className="product-img my-5">
                                        <Image src="/img/ship-img.webp" className="img-fluid" width="100" height="100" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-right">
                                    <div className="text-white my-3">Description</div>
                                    <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                                    <div className="text-white my-3">Specifications</div>
                                    <div className="row g-0">
                                        <div className="col-lg-4">
                                            <div className="option">
                                                <div className="dot"></div>
                                                <h3 className="text-white mb-0">30 nm</h3>
                                                <div className="text-white">Range</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="option">
                                                <div className="dot"></div>
                                                <h3 className="text-white mb-0">30 nm</h3>
                                                <div className="text-white">Range</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="option last">
                                                <div className="dot"></div>
                                                <h3 className="text-white mb-0">30 nm</h3>
                                                <div className="text-white">Range</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
            <Cta />
        </MainLayout>
    );
}

