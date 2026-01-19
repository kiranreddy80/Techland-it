import React from "react";
// You might not need Link here if there are no links, but it's good practice to have it available.
// import { Link } from 'react-router-dom';

const OurFeatures = () => {
  // Create a data array for features to make the component cleaner and more maintainable
  const featuresData = [
    {
      id: 1,
      icon: "/assets/img/cdn-assets/icons8-security-checked.png",
      title: "Enhanced Security",
      description:
        "Immutable and encrypted transactions prevent fraud and unauthorized access.",
    },
    {
      id: 2,
      icon: "/assets/img/cdn-assets/icons8-handshake.png",
      title: "Transparency & Trust",
      description:
        "Public ledgers ensure accountability and build trust with all stakeholders.",
    },
    {
      id: 3,
      icon: "/assets/img/cdn-assets/icons8-rocket.png",
      title: "Faster Transactions",
      description:
        "Enable instant cross-border payments and near-real-time processing.",
    },
    {
      id: 4,
      icon: "/assets/img/cdn-assets/icons8-money-bag.png",
      title: "Cost Reduction",
      description:
        "Eliminates intermediaries and reduces operational and transactional costs.",
    },
    {
      id: 5,
      icon: "/assets/img/cdn-assets/icons8-bank-building.png",
      title: "Financial Inclusion",
      description:
        "Provides access to banking services for the unbanked and underbanked populations.",
    },
    {
      id: 6,
      icon: "/assets/img/cdn-assets/flaticon-4712027.png",
      title: "Smart Automation",
      description:
        "Leverages smart contracts to automate processes and reduce manual errors.",
    },
  ];

  return (
    <section>
      <div
        className="overflow-hidden space light-bg"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="title-area feature-5-titlebox text-center mb-55">
                <span
                  className="sub-title extra-sub text-anime-style-2"
                  data-aos="zoom-in"
                  data-aos-duration="800"
                  data-aos-delay="100"
                >
                  Our Features
                </span>
                {/* UPDATED: Title and description to be more generic and on-brand */}
                <h2
                  className="sec-title text-white text-anime-style-3"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  Innovative Solutions for Modern Business
                </h2>
                <p
                  className="text-white"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  Techland IT Solutions is dedicated to being the best
                  technology partner for your business. Our teams collaborate,
                  brainstorm, and develop leading strategies to create digital
                  solutions that are engaging, intuitive, and innovative. We
                  capture the essence of your business through a blend of
                  essential design patterns and sophisticated technology,
                  ensuring your digital presence is not just functional, but
                  exceptional.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="feature-area5">
          <div className="container">
            <div className="row gy-4 justify-content-center">
              {/* Map over the featuresData array to create feature cards */}
              {featuresData.map((feature, index) => (
                <div
                  className="col-xxl-2 col-xl-3 col-lg-3 col-md-6 feature_wrapp"
                  key={feature.id}
                  data-aos="flip-left"
                  data-aos-duration="1000"
                  data-aos-delay={index * 100}
                >
                  <div className="feature-item style-5 text-center">
                    <div className="feature_icon">
                      <img src={feature.icon} alt={`${feature.title} Icon`} />
                    </div>
                    <div className="feature_content">
                      <h3 className="box-title text-white">{feature.title}</h3>
                      {/* <p className="sec-text">{feature.description}</p> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFeatures;
