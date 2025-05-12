import Image from "next/image";
import Link from "next/link";

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
                                    <div className="btn-wrapper">
                                        <button type="submit" className="btn btn-primary v2">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="contact-form-right">
                            <h3>Say Hii to STRYDENT</h3>
                            <Image src="/img/contact-us/contact-from-image.jpg" width="336" height="224" alt="" />
                                <div className="contact-details">
                                    <p className="text-white mb-0 letter-spacing text-uppercase">Phone</p>
                                    <a href="tel:+1 (555) 123-4567" className="menu-phone"> <i className="flaticon-phone"></i>+1 (555) 123-4567</a>
                                    <p className="text-white mb-0 letter-spacing text-uppercase">Email</p>
                                    <a href="mailto:info@strydent.com" className="menu-phone"> <i className="flaticon-phone"></i>info@strydentdefense.com</a>
                                </div>
                                <p className="text-white mb-0 letter-spacing text-uppercase">Social media</p>
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