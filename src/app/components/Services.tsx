import Image from "next/image";
const services = [
    {
        title: "Personal Loans",
        description: "Our Personal Loans offer flexible terms and competitive rates, tailored to meet your individual needs.",
        image: "/img/services/services-1.png",
        iconClass: "flaticon-personal",
    },
    {
        title: "Emergency Loans",
        description: "Quick and reliable emergency loans, providing fast access to funds when you need them most. Apply now for instant relief.",
        image: "/img/services/services-2.png",
        iconClass: "flaticon-money-bag-1",
    },
    {
        title: "Business Loans",
        description: "Empower your business with our flexible financing options. Tailored to meet the unique needs of your enterprise.",
        image: "/img/services/services-3.png",
        iconClass: "flaticon-money-bag",
    },
    {
        title: "Student Loans",
        description: "Student loans open doors to education but can also become a heavy financial burden if not managed wisely. Plan carefully.",
        image: "/img/services/services-4.png",
        iconClass: "flaticon-mortarboard",
    },
    {
        title: "Mortgage Loans",
        description: "Secure your dream home with our competitive mortgage loans. Enjoy flexible terms, low interest rates",
        image: "/img/services/services-5.png",
        iconClass: "flaticon-mortgage-loan",
    },
    {
        title: "Small Business Loans",
        description: "This content highlights the key benefits of your small business loan offerings, appealing to entrepreneurs seeking financial support.",
        image: "/img/services/services-6.png",
        iconClass: "flaticon-loan-1",
    },
];
export default function Services() {
    return (
        <section className="services-section-one">
            <div className="service-one-shape-1">
                <Image src="/img/shape/service-shape-1.png" width="120" height="120" alt="shape" />
            </div>
            <div className="service-one-shape-2">
                <Image src="/img/shape/service-shape-2.png" width="121" height="127" alt="shape" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 m-auto">
                        <div className="heading-box text-center">
                            <span className="heading-subtitle wow fadeInUp animated animated">🤝 OUR SERVICES</span>
                            <h2 className="heading-title wow fadeInUp animated animated">Comprehensive financial
                                solutions tailored to your needs</h2>
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
                                <i className={service.iconClass}></i>
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