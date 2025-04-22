import Image from "next/image";

export default function Testimonials() {
    return (
        <section className="testimonial-one white-font">
            <div className="container">
                <div className="row gutter-y-30">
                    <div className="col-lg-4 col-md-6 col-sm-10 col-12 ms-auto me-auto">
                        <div className="testimonial-video-one">
                            <Image src="/img/blog/blog-three-1.jpg" width="416" height="471" alt="testimonial-video-thamb" />
                                <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M"
                                   className="testimonial-video-btn-one"><i
                                    className="fa-solid fa-play"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-8 align-self-center">
                        <div className="testimonial-one-right">
                            <div className="heading-box heading-white">
                                <span
                                    className="heading-subtitle wow fadeInUp animated animated">🤝 SUCCESS STORY</span>
                                <h2 className="heading-title wow fadeInUp animated animated">Customer experiences with
                                    us</h2>
                            </div>
                            <div className="testimonial-slider-one">
                                <div className="testimonial-one-item">
                                    <p>Signing the agreement and completing the documentation with Loanlift was seamless
                                        and straightforward. Their team guided me through every step, ensuring I
                                        understood all the details. I felt confident and well-informed throughout
                                        the entire process.
                                    </p>
                                    <div className="testimonial-one-details-inner">
                                        <div className="testimonial-one-details">
                                            <Image src="/img/testimonial/testimonial-1.png" width="78" height="78" alt="" />
                                                <div>
                                                    <h5 className="white-font">Michael Smith</h5>
                                                    <p className="white-font m-0">Satisfied Client</p>
                                                </div>
                                        </div>
                                        <i className="flaticon-quote-1"></i>
                                    </div>
                                </div>
                                <div className="testimonial-one-item">
                                    <p>The process with Loanlift was incredibly smooth. From signing the agreement to
                                        completing the documentation, their team made sure everything was clear and easy
                                        to follow. I felt supported every step of the way.Working with
                                        Loanlift was a breeze! Their expert guidance made the paperwork simple.</p>
                                    <div className="testimonial-one-details-inner">
                                        <div className="testimonial-one-details">
                                            <Image src="/img/testimonial/testimonial-2.png" width="78" height="78" alt="" />
                                                <div>
                                                    <h5 className="white-font">Emily Martin</h5>
                                                    <p className="white-font m-0">Satisfied Client</p>
                                                </div>
                                        </div>
                                        <i className="flaticon-quote-1"></i>
                                    </div>
                                </div>
                                <div className="testimonial-one-item">
                                    <p>The agreement process with Loanlift was hassle-free and efficient. Their team
                                        ensured I understood every detail and made the documentation straightforward,
                                        giving me confidence throughout the entire journey, Loanlift’s
                                        team made the entire agreement and documentation process seamless.</p>
                                    <div className="testimonial-one-details-inner">
                                        <div className="testimonial-one-details">
                                            <Image src="/img/testimonial/testimonial-3.png" width="78" height="78" alt="" />
                                                <div>
                                                    <h5 className="white-font">Brian Clark</h5>
                                                    <p className="white-font m-0">Satisfied Client</p>
                                                </div>
                                        </div>
                                        <i className="flaticon-quote-1"></i>
                                    </div>
                                </div>
                                <div className="testimonial-one-item">
                                    <p>Loanlift made the entire loan process incredibly easy. Their team walked me
                                        through every step, ensuring I understood all the terms. I felt completely
                                        confident and well-supported throughout the process, Loanlift made the
                                        entire loan process incredibly easy.</p>
                                    <div className="testimonial-one-details-inner">
                                        <div className="testimonial-one-details">
                                            <Image src="/img/testimonial/testimonial-4.png" width="78" height="78" alt="" />
                                                <div>
                                                    <h5 className="white-font">Ashley Harris</h5>
                                                    <p className="white-font m-0">Satisfied Client</p>
                                                </div>
                                        </div>
                                        <i className="flaticon-quote-1"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};