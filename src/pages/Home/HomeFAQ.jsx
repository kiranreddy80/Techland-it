import React, { useState } from "react"; // Import useState
import { Link } from "react-router-dom";

const HomeFAQ = () => {
  // --- UPDATED FAQ DATA (without isOpen) ---
  // The data is cleaner as it doesn't contain UI state.
  const faqData = [
    {
      id: 1,
      question: "01. What services does Techland IT Solutions offer?",
      answer:
        "Techland IT Solutions provides end-to-end mobile app development, web development, UI/UX design, software development, and digital marketing services. We specialize in creating user-centric applications for Android, iOS, and cross-platform solutions.",
    },
    {
      id: 2,
      question:
        "02. Why is Techland IT Solutions considered one of the best mobile app development companies in Hyderabad?",
      answer:
        "We are known for delivering custom mobile app development solutions that blend innovation, scalability, and great design. Our team of experienced developers focuses on turning business ideas into functional, high-performing apps trusted by clients across India, Dubai, California, and Denmark.",
    },
    {
      id: 3,
      question: "03. Do you develop both Android and iOS mobile apps?",
      answer:
        "Yes. We offer native app development for Android and iOS, as well as cross-platform app development using Flutter and React Native ensuring your app performs seamlessly on all devices.",
    },
    {
      id: 4,
      question: "04. How long does it take to develop a mobile app?",
      answer:
        "The development timeline depends on your app's complexity, design requirements, and feature set. A simple app may take 6-8 weeks, while feature-rich enterprise apps may require 3-6 months. We provide clear project timelines during our initial consultation.",
    },
    {
      id: 5,
      question: "05. How much does mobile app development cost?",
      answer:
        "App development cost varies based on features, technology stack, and platform choice. Techland IT Solutions offers cost-effective packages tailored to your business goals whether you need a startup MVP or a full-scale enterprise solution.",
    },
    {
      id: 6,
      question:
        "06. Can you help with app maintenance and post-launch support?",
      answer:
        "Absolutely! We provide ongoing maintenance, updates, and performance optimization services after your app goes live. Our team ensures your app remains secure, fast, and up-to-date with the latest OS versions.",
    },
  ];

  // --- STATE MANAGEMENT ---
  // 'openItemId' holds the ID of the currently open FAQ.
  // Initialize it to 1 to open the first item by default.
  const [openItemId, setOpenItemId] = useState(1);

  // Function to handle click events on the accordion buttons
  const handleToggle = (id) => {
    // If the clicked item is already open, close it (set to null).
    // Otherwise, open the clicked item.
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <div className="cta-4 position-relative overflow-hidden">
      <div
        className="cta-sec5 space bg-title"
        style={{ backgroundImage: "url('/assets/img/bg/cta_bg_3.jpg')" }}
      >
        <div className="container">
          <div className="row gy-50 justify-content-between">
            {/* Left Column: Title, Description, and CTA */}
            <div
              className="col-xl-4"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="title-area mb-30">
                <span
                  className="sub-title"
                  data-aos="fade-down"
                  data-aos-duration="800"
                >
                  <span className="squre-shape left me-3"></span>FAQ
                </span>
                <h2
                  className="sec-title"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <span className="scroll-text-ani">
                    Frequently Asked Questions
                  </span>
                </h2>
              </div>
              <p
                className="mb-0"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                With years of experience in the IT industry, our certified
                professionals bring deep knowledge and proven solutions to every
                project.
              </p>

              <div
                className="faq-img4 mt-30"
                data-aos="zoom-in"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <img
                  className="spin"
                  src="/assets/img/shape/counter-bg-shape6-1.png"
                  alt="decorative shape"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Column: FAQ Accordion */}
            <div
              className="col-xl-7"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              {/* The data-bs-parent attribute is removed as state now controls the behavior */}
              <div className="accordion" id="faqAccordion">
                {faqData.map((faq, index) => {
                  const isOpen = openItemId === faq.id;
                  return (
                    <div
                      className="accordion-card style5"
                      key={faq.id}
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay={index * 100}
                    >
                      <div
                        className="accordion-header"
                        id={`collapse-item-${faq.id}`}
                      >
                        <button
                          className={`accordion-button ${
                            !isOpen ? "collapsed" : ""
                          }`}
                          type="button"
                          // Use onClick handler instead of data-bs-toggle
                          onClick={() => handleToggle(faq.id)}
                          aria-expanded={isOpen}
                          aria-controls={`collapse-${faq.id}`}
                        >
                          {faq.question}
                        </button>
                      </div>
                      <div
                        id={`collapse-${faq.id}`}
                        className={`accordion-collapse collapse ${
                          isOpen ? "show" : ""
                        }`}
                        aria-labelledby={`collapse-item-${faq.id}`}
                      >
                        <div className="accordion-body">
                          <p className="faq-text">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFAQ;
