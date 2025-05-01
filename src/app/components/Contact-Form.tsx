import Image from "next/image";

export default function ContactForm() {
    return (
        <div className="contact-form">
            <div className="container">
                <div className="row gutter-y-30">
                    <div className="col-lg-8">
                        <div className="contact-form-inner">
                            <form action="#">
                                <div className="inquiry-form-group-one">
                                    <label><i className="fa-regular fa-user"></i></label>
                                    <input type="text" name="name" className="form-control" placeholder="Your Name"/>
                                </div>
                                <div className="inquiry-form-group-one">
                                    <label><i className="fa-solid fa-phone"></i></label>
                                    <input type="number" name="mobail-nomber" className="form-control"
                                           placeholder="Your Mobile Number" />
                                </div>
                                <div className="inquiry-form-group-one">
                                    <label><i className="fa-regular fa-envelope"></i></label>
                                    <input type="email" name="email" className="form-control" placeholder="Your Email"
                                    />
                                </div>
                                <div className="inquiry-form-group-one">
                                    <label><i className="fa-solid fa-message"></i></label>
                                    <textarea name="massage" className="form-control"
                                              placeholder="Your Massage Here"></textarea>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-outline-secondary">Get a Quote <i
                                        className="flaticon-next"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="contact-form-right">
                            <h3>Say Hii to LoanLift 👋</h3>
                            <Image src="/img/contact-us/contact-from-image.jpg" width="336" height="224" alt="" />
                                <div className="contact-details">
                                    <p>Have questions about your loan options? Our team is here to help! Whether you're
                                        seeking guidance on loan products.</p>
                                    <p>We're committed to providing personalized support. Reach out today and let's take
                                        the next step towards securing the financing you need.</p>
                                </div>
                                <h4>Social media</h4>
                                <ul className="contact-social-media">
                                    <li><a href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></a>
                                    </li>
                                    <li><a href="https://x.com/"><i className="fa-brands fa-twitter"></i></a></li>
                                    <li><a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>
                                    </li>
                                    <li><a href="https://in.linkedin.com/"><i className="fa-brands fa-linkedin-in"></i></a>
                                    </li>
                                </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};