"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("https://strydentdefense.com/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          mobile: "",
          message: "",
        });
      } else {
        setStatus(data.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="contact-form">
      <div className="container">
        <div className="row gutter-y-30">
          <div className="col-lg-8">
            <div className="contact-form-inner">
              <form onSubmit={handleSubmit}>
                <div className="inquiry-form-group-one">
                  <label>
                    <i className="fa-regular fa-user"></i>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div className="inquiry-form-group-one">
                  <label>
                    <i className="fa-solid fa-phone"></i>
                  </label>
                  <input
                    type="number"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Your Mobile Number"
                  />
                </div>
                <div className="inquiry-form-group-one">
                  <label>
                    <i className="fa-regular fa-envelope"></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>
                <div className="inquiry-form-group-one">
                  <label>
                    <i className="fa-solid fa-message"></i>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Your Message Here"
                  ></textarea>
                </div>
                <div className="form-group">
                  <div className="btn-wrapper">
                    <button type="submit" className="btn btn-primary v2">
                      Submit
                    </button>
                  </div>
                </div>
                <p
                  className={`form-status ${
                    status.includes("successfully")
                      ? "success"
                      : status.includes("Failed")
                      ? "error"
                      : "info"
                  }`}
                >
                  {status}
                </p>
              </form>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="contact-form-right">
              <h3>Say Hii to STRYDENT</h3>
              <Image
                src="./img/contact-us/contact-from-image.jpg"
                width="336"
                height="224"
                alt="team"
                loading="lazy"
                className="img-fluid"
              />
              <div className="contact-details">
                <p className="text-white mb-0 letter-spacing text-uppercase">
                  Phone
                </p>
                <a href="tel:+1 (555) 123-4567" className="menu-phone">
                  {" "}
                  <i className="flaticon-phone"></i>+1 (555) 123-4567
                </a>
                <p className="text-white mb-0 letter-spacing text-uppercase">
                  Email
                </p>
                <a href="mailto:info@strydentdefense.com" className="menu-phone">
                  {" "}
                  <i className="flaticon-phone"></i>info@strydentdefense.com
                </a>
              </div>
              <p className="text-white mb-0 letter-spacing text-uppercase">
                Social media
              </p>
              <ul className="contact-social-media">
                <li>
                  <a href="https://www.facebook.com/">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="https://x.com/">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://in.linkedin.com/">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
