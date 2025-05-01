import Image from "next/image";
import Link from "next/link";
const services = [
    {
        title: "Fleet-Based Swarm Intelligence",
        description: "AUVs operate as a coordinated swarm to create real-time virtual defense perimeters.",
        image: "/img/services/services-1.png",
        iconClass: "/img/swarm-intelligence.svg",
    },
    {
        title: "Generative AI Navigation",
        description: "Autonomous decision-making powered by real-time data from multi-sensor inputs.",
        image: "/img/services/services-4.png",
        iconClass: "/img/ai.svg",
    },
    {
        title: "Solar-Powered Endurance",
        description: "Wing-mounted solar panels recharge the Li-ion battery, enabling continuous missions.",
        image: "/img/services/services-4.png",
        iconClass: "/img/solar.svg",
    },
    {
        title: "Encrypted Data Transmission",
        description: "Blockchain-backed systems ensure secure communication and mission integrity.",
        image: "/img/services/services-4.png",
        iconClass: "/img/data.svg",
    },
    {
        title: "Modular Sensor Architecture",
        description: "Easily integrates sonar, LiDAR, chemical, thermal, and electromagnetic sensors.",
        image: "/img/services/services-5.png",
        iconClass: "/img/sensors.svg",
    },
    {
        title: "Mission Flexibility",
        description: "From reconnaissance to mine detection, AUVs adapt to a wide range of naval tasks.",
        image: "/img/services/services-6.png",
        iconClass: "/img/mission.svg",
    },
];
export default function Services() {
    return (
        <section className="services-section-one">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3 mb-2 mb-lg-5">
                        <Image src="/img/object.svg" className="img-fluid object" width="782" height="345" alt="object" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-10 m-auto">
                        <div className="text-center mb-5">
                            <span className="heading-subtitle border-0 text-uppercase mb-0">About Us</span>
                            <h1 className="heading-title text-uppercase font-800 mb-2"><span className="text-primary">Strydent’s</span> Autonomous Underwater Vehicles</h1>
                            <p>Strydent Autonomous Technologies’ fleet of next-generation Autonomous Underwater Vehicles will provide strategic real-time data analysis in coordination with all branches of the U.S. military to protect the homeland especially areas surrounding the U.S. extended continental shelf, U.S. military sea assets, and all assets in the U.S. national interest.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 m-auto">
                        <div className="heading-box text-center">
                            <h3 className="heading-title font-dm-sans text-uppercase fw-bolder">Advanced Features Powering Next-Gen AUVs</h3>
                        </div>
                    </div>
                </div>
                <div className="service-one-inner">
                    {services.map((service, index) => (
                        <div className="service-one-box" key={index}>
                            <div className="service-one-box-image">
                                <Image src={service.image} width={80} height={80} alt="service images" />
                            </div>
                            <div className="service-one-icon-box">
                                <Image src={service.iconClass} width={80} height={80} alt="service images" />
                            </div>
                            <div className="service-one-info">
                                <h5 className="font-dm-sans text-uppercase">{service.title}</h5>
                                <p>{service.description}</p>
                            </div>
                            {/*<a href="service-details.html" className="read-more-btn">*/}
                            {/*    <i className="flaticon-next"></i>*/}
                            {/*</a>*/}
                        </div>
                    ))}
                </div>
                <div className="text-center">
                    <Link href="" className="btn btn-primary v2">Learn More</Link>
                </div>
            </div>
        </section>
    );
};