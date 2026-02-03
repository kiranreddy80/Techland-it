import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "./blogData"; // Make sure this path is correct

const BlogDetails = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  // --- Dynamic Data for Sidebar ---

  // 1. Get all unique categories from all blog posts
  const allCategories = useMemo(() => {
    const categoriesSet = new Set();
    blogPosts.forEach((post) => {
      if (post.category) {
        post.category.forEach((cat) => categoriesSet.add(cat));
      }
    });
    // Convert the Set back to an Array and sort alphabetically
    return Array.from(categoriesSet).sort();
  }, []); // Empty dependency array means this runs only once on component mount

  // 2. Get recent posts (e.g., the 3 most recent)
  const recentPosts = useMemo(() => {
    // Create a copy to avoid mutating the original array
    const sortedPosts = [...blogPosts];
    // Sort by date (newest first)
    // Note: This simple sort works for date formats like "May 29, 2025"
    sortedPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
    // Return the top 3
    return sortedPosts.slice(0, 3);
  }, []); // Empty dependency array means this runs only once

  // If no post is found, show a "Not Found" message
  if (!post) {
    return (
      <div>
        <div className="breadcumb-area style2 bg-smoke4">
          <div
            className="breadcumb-wrapper"
            style={{
              backgroundImage: 'url("/assets/img/bg/breadcumb-bg.jpg")',
            }}
          >
            <div className="container">
              <div className="breadcumb-content">
                <h1 className="breadcumb-title">Post Not Found</h1>
                <ul className="breadcumb-menu">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/blogs">Blogs</Link>
                  </li>
                  <li>Not Found</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <section className="th-blog-wrapper blog-details space-top space-extra-bottom">
          <div className="container text-center">
            <h2>Sorry, the blog post you're looking for doesn't exist.</h2>
            <Link to="/blogs" className="th-btn mt-4">
              Back to All Blogs
            </Link>
          </div>
        </section>
      </div>
    );
  }

  // If the post is found, render its details
  return (
    <div>
      {/* --- Breadcrumb Section - DYNAMIC --- */}
      <div
        className="breadcumb-area style2 bg-smoke4"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div
          className="breadcumb-wrapper"
          style={{ backgroundImage: 'url("/assets/img/bg/breadcumb-bg.jpg")' }}
        >
          <div className="container">
            <div className="breadcumb-content">
              <h1 className="breadcumb-title">{post.title}</h1>
              <ul className="breadcumb-menu">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/blogs">Blogs</Link>
                </li>
                <li>{post.title}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section
        className="th-blog-wrapper blog-details space-top space-extra-bottom"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-7">
              <div className="th-blog blog-single">
                <div className="blog-img">
                  <img src={post.imageUrl} alt={post.title} />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <a className="author" href="#">
                      <img
                        src="/assets/icons/user-male-circle.png"
                        alt="Author"
                        width="20"
                        height="20"
                        style={{ objectFit: "contain", marginRight: "6px" }}
                        loading="lazy"
                      />
                      {post.author}
                    </a>
                    <a href="#">
                      <img
                        src="/assets/icons/calendar.png"
                        alt="Date"
                        width="20"
                        height="20"
                        style={{ objectFit: "contain", marginRight: "6px" }}
                        loading="lazy"
                      />
                      {post.date}
                    </a>
                    <a href="#">
                      <img
                        src="/assets/icons/clock.png"
                        alt="Read time"
                        width="20"
                        height="20"
                        style={{ objectFit: "contain", marginRight: "6px" }}
                        loading="lazy"
                      />
                      {post.readTime}
                    </a>
                  </div>
                  <h2 className="blog-title">{post.title}</h2>
                  <p className="blog-text mb-30">{post.fullDescription}</p>

                  {/* Dynamically render all sections from the blog data */}
                  {post.sections.map((section, index) => (
                    <div key={index} className="blog-section">
                      <h3 className="pt-4 sec-title mb-3">{section.title}</h3>
                      {typeof section.content === "string" ? (
                        <p className="blog-text">{section.content}</p>
                      ) : (
                        section.content
                      )}

                      {section.additionalContent &&
                        (typeof section.additionalContent === "string" ? (
                          <h6>{section.additionalContent}</h6>
                        ) : (
                          section.additionalContent
                        ))}

                      {section.additionalContent2 && (
                        <p className="blog-text">
                          {section.additionalContent2}
                        </p>
                      )}

                      {section.points && (
                        <ul className="list-unstyled style-list">
                          {section.points.map((point, pointIndex) => (
                            <li className="mb-2" key={pointIndex}>
                              <img
                                className="icon"
                                src="/assets/icons/checkmark.png"
                                alt="checkmark"
                                width="20"
                                height="20"
                                style={{ objectFit: "contain" }}
                                loading="lazy"
                              />{" "}
                              {point}
                            </li>
                          ))}
                        </ul>
                      )}

                      {section.subSections && (
                        <div className="sub-sections">
                          {section.subSections.map((sub, subIndex) => (
                            <div key={subIndex}>
                              <h6>{sub.title}</h6>
                              {sub.content && (
                                <p className="blog-text">{sub.content}</p>
                              )}
                              {sub.points && (
                                <ul className="list-unstyled style-list">
                                  {sub.points.map((point, pointIndex) => (
                                    <li className="mb-2" key={pointIndex}>
                                      <img
                                        className="icon"
                                        src="/assets/img/icon/price-check.svg"
                                        alt="image"
                                      />{" "}
                                      {point}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}

                  <div className="share-links clearfix">
                    <div className="row justify-content-between">
                      <div className="col-md-auto">
                        <span className="share-links-title">Tags:</span>
                        <div className="tagcloud">
                          {post.category &&
                            post.category.map((cat, index) => (
                              <a key={index}>{cat}</a>
                            ))}
                        </div>
                      </div>
                      <div className="col-md-auto text-xl-end">
                        <div className="share-links_wrapp">
                          <span className="share-links-title">Share:</span>
                          <div className="social-links">
                            <a href="https://www.facebook.com/">
                              <img
                                src="/assets/icons/facebook.png"
                                alt="Facebook"
                                width="24"
                                height="24"
                                style={{ objectFit: "contain" }}
                                loading="lazy"
                              />
                            </a>
                            <a href="https://www.twitter.com/">
                              <img
                                src="/assets/icons/twitter.png"
                                alt="Twitter"
                                width="24"
                                height="24"
                                style={{ objectFit: "contain" }}
                                loading="lazy"
                              />
                            </a>
                            <a href="https://www.instagram.com/">
                              <img
                                src="/assets/icons/instagram.png"
                                alt="Instagram"
                                width="24"
                                height="24"
                                style={{ objectFit: "contain" }}
                                loading="lazy"
                              />
                            </a>
                            <a href="https://www.linkedin.com/">
                              <img
                                src="/assets/icons/linkedin.png"
                                alt="LinkedIn"
                                width="24"
                                height="24"
                                style={{ objectFit: "contain" }}
                                loading="lazy"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Column */}
            <div
              className="col-xxl-4 col-lg-5"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <aside className="sidebar-area">
                {/* <div className="widget widget_search">
                  <form className="search-form">
                    <input type="text" placeholder="Search" />
                    <button type="submit">
                      <i className="far fa-search"></i>
                    </button>
                  </form>
                </div> */}

                {/* --- DYNAMIC Categories Widget --- */}
                <div className="widget widget_categories">
                  <h3 className="widget_title">Categories</h3>
                  <ul>
                    {allCategories.map((category, index) => (
                      <li key={`cat-${index}`}>
                        {/* Link to a blog page filtered by this category */}
                        <Link
                          to={`/blogs?category=${encodeURIComponent(category)}`}
                        >
                          {category}
                        </Link>
                        <span>
                          <i className="fa-regular fa-arrow-up-right"></i>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* --- DYNAMIC Recent Posts Widget --- */}
                <div className="widget">
                  <h3 className="widget_title">Recent Posts</h3>
                  <div className="recent-post-wrap">
                    {recentPosts.map((recentPost) => (
                      <div
                        key={`recent-${recentPost.id}`}
                        className="recent-post"
                      >
                        <div className="media-img">
                          {/* Link to the details page of the recent post */}
                          <Link to={`/blogs/${recentPost.id}`}>
                            <img
                              src={recentPost.imageUrl}
                              alt={recentPost.title}
                            />
                          </Link>
                        </div>
                        <div className="media-body">
                          <div className="recent-post-meta">
                            <Link to={`/blogs/${recentPost.id}`}>
                              <img
                                src="/assets/icons/calendar.png"
                                alt="Date"
                                width="18"
                                height="18"
                                style={{
                                  objectFit: "contain",
                                  marginRight: "6px",
                                }}
                                loading="lazy"
                              />
                              {recentPost.date}
                            </Link>
                          </div>
                          <h4 className="post-title">
                            <Link
                              className="text-inherit"
                              to={`/blogs/${recentPost.id}`}
                            >
                              {recentPost.title}
                            </Link>
                          </h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* --- "Need Help?" Banner Widget (Static) --- */}
                <div
                  className="widget widget_banner"
                  style={{
                    backgroundImage: 'url("/assets/img/bg/widget_banner.jpg")',
                  }}
                >
                  <div className="widget-banner position-relative text-center">
                    <span className="icon">
                      <img
                        src="/assets/icons/phone.png"
                        alt="Phone"
                        width="48"
                        height="48"
                        style={{ objectFit: "contain" }}
                        loading="lazy"
                      />
                    </span>
                    <span className="text">Need Help? Call Here</span>
                    <a className="phone" href="tel:+25669872564">
                      +91 78423 85604
                    </a>
                    <Link to="/contact" className="th-btn style6">
                      Get A Quote <i className="fa-regular fa-comment-dots"></i>
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;
