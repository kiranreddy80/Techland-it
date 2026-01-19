import React from "react";

const StartWorkWithUS = () => {
  return (
    <div>
      <div className="cta-4  position-relative overflow-hidden">
        <div
          className="cta-sec5 space bg-title  "
          style={{ backgroundImage: "url('assets/img/bg/cta_bg_3.jpg')" }}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              {/* Left Column: Content */}
              <div className="col-lg-7">
                <div className="">
                  <div className="title-area cta-3_title-box mb-40">
                    {/* UPDATED: Main title */}
                    <span
                      className="sub-title style1 text-white mb-10 text-anime-style-2"
                      data-aos="fade-right"
                      data-aos-duration="800"
                    >
                      Start Work With Us
                    </span>
                    {/* UPDATED: Subtitle */}
                    <h2
                      className="sec-title text-white text-anime-style-3"
                      data-aos="fade-right"
                      data-aos-duration="1000"
                      data-aos-delay="200"
                    >
                      The Best Mobile App Development Company.
                    </h2>

                    {/* UPDATED: Paragraph content condensed into two paragraphs */}
                    <p className="text-white wow fadeInUp" data-wow-delay=".3s">
                      We are a top-rated mobile app development company,
                      committed to turning your app ideas into reality with the
                      help of our expert team. Our professional and best app
                      developers in Hyderabad work closely with you to ensure
                      your app vision is brought to life with precision and
                      quality. At our company, we take pride in offering
                      top-notch mobile application development services,
                      focusing on crafting seamless, user-friendly apps tailored
                      to your business needs.
                    </p>
                    <p className="text-white wow fadeInUp" data-wow-delay=".4s">
                      With years of experience, we ensure that each app is built
                      to enhance functionality and performance. When you choose
                      us, you're partnering with a company known for delivering
                      exceptional results. We combine innovation, technology,
                      and professionalism to help your business succeed. Let us
                      help you bring your dream app to life and drive your
                      business forward.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 pb-5">
                <div className="app-mockup  pb-lg-5 movingX">
                  <video
                    className=""
                    src="/assets/img/mobile_projects/start-work.mp4"
                    alt="app mockup"
                    data-aos="zoom-in"
                    data-aos-duration="1200"
                    loading="lazy"
                    autoPlay
                    muted
                    loop
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Shape (unchanged) */}
          <div className="shape-mockup background-img-start-with  " data-bottom="0%" data-right="0%">
            <img
              src="assets/img/normal/cta-left-img.png"
              alt="decorative shape"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartWorkWithUS;
