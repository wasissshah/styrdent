import Image from "next/image";

export default function FAQSection() {
    return (
        <div className="faq-section">
            <div className="container">
                <div className="row gutter-y-30 gutter-x-15">
                    <div className="col-lg-8">
                        <div className="accordion" id="accordionfaq">
                            <div className="fqa-block">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne" aria-expanded="true"
                                                aria-controls="collapseOne">
                                            1. What documents are required to apply for a loan?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show"
                                         data-bs-parent="#accordionfaq">
                                        <div className="accordion-body">
                                            <p>To apply for a home loan, you'll need to provide proof of income, your
                                                credit
                                                history, and employment verification. Additionally, you'll need to
                                                submit
                                                recent tax returns and details about your assets and liabilities. To
                                                apply
                                                for a home loan, you'll need to provide proof of income, your credit
                                                history, and employment verification.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                aria-expanded="false" aria-controls="collapseTwo">
                                            2. How recent should my documents be?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse"
                                         data-bs-parent="#accordionfaq">
                                        <div className="accordion-body">
                                            <p>To apply for a home loan, you'll need to provide proof of income, your
                                                credit
                                                history, and employment verification. Additionally, you'll need to
                                                submit
                                                recent tax returns and details about your assets and liabilities. To
                                                apply
                                                for a home loan, you'll need to provide proof of income, your credit
                                                history, and employment verification.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                aria-expanded="false" aria-controls="collapseThree">
                                            3. Can I submit digital copies of my documents?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse"
                                         data-bs-parent="#accordionfaq">
                                        <div className="accordion-body">
                                            <p>To apply for a home loan, you'll need to provide proof of income, your
                                                credit
                                                history, and employment verification. Additionally, you'll need to
                                                submit
                                                recent tax returns and details about your assets and liabilities. To
                                                apply
                                                for a home loan, you'll need to provide proof of income, your credit
                                                history, and employment verification.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapsefour"
                                                aria-expanded="false" aria-controls="collapsefour">
                                            4. What should I do if I’m missing some of the required documents?
                                        </button>
                                    </h2>
                                    <div id="collapsefour" className="accordion-collapse collapse"
                                         data-bs-parent="#accordionfaq">
                                        <div className="accordion-body">
                                            <p>To apply for a home loan, you'll need to provide proof of income, your
                                                credit
                                                history, and employment verification. Additionally, you'll need to
                                                submit
                                                recent tax returns and details about your assets and liabilities. To
                                                apply
                                                for a home loan, you'll need to provide proof of income, your credit
                                                history, and employment verification.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapsefive"
                                                aria-expanded="false" aria-controls="collapsefive">
                                            5. What should I do if I’m missing some of the required documents?
                                        </button>
                                    </h2>
                                    <div id="collapsefive" className="accordion-collapse collapse"
                                         data-bs-parent="#accordionfaq">
                                        <div className="accordion-body">
                                            <p>To apply for a home loan, you'll need to provide proof of income, your
                                                credit
                                                history, and employment verification. Additionally, you'll need to
                                                submit
                                                recent tax returns and details about your assets and liabilities. To
                                                apply
                                                for a home loan, you'll need to provide proof of income, your credit
                                                history, and employment verification.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="fqa-block stcky">
                            <div className="faq-right">
                                <div className="faq-right-inner">
                                    <h4>Still have questions? Feel free to ask us!</h4>
                                    <p>Contact us directly, drop us an email!</p>
                                    <Image src="/img/faq-image.jpg" width="322" height="158" alt="fqa-image" />
                                        <div className="faq-details">
                                            <p>We’d love to hear from you! Whether you have questions, need assistance,
                                                or want
                                                to learn more about our services, feel free to reach out to us
                                                anytime.</p>
                                        </div>
                                        <a href="contact-us.html" className="btn btn-primary">Contact Us <i
                                            className="flaticon-next"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};