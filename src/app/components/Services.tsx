import Image from "next/image";
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
                    <div className="col-lg-6 m-auto">
                        <div className="heading-box text-center">
                            <span className="heading-subtitle wow fadeInUp animated animated">OUR FEATURES</span>
                            <h2 className="heading-title wow fadeInUp animated animated">Advanced Features Powering Next-Gen AUVs</h2>
                        </div>
                    </div>
                </div>
                <div className="service-one-inner">
                    {services.map((service, index) => (
                        <div className="service-one-box" key={index}>
                            <div className="service-one-box-image">
                                <Image src={service.image} width={60} height={60} alt="service images" />
                            </div>
                            <div className="service-one-icon-box">
                                <Image src={service.iconClass} width={60} height={60} alt="service images" />
                            </div>
                            <div className="service-one-info">
                                <h4>{service.title}</h4>
                                <p>{service.description}</p>
                            </div>
                            <a href="service-details.html" className="read-more-btn">
                                <i className="flaticon-next"></i>
                            </a>
                        </div>
                    ))}
                </div>
                <div className="text-center">
                    <a href="service.html" className="btn btn-secondary">View More<i className="flaticon-next"></i></a>
                </div>
            </div>
        </section>
    );
};