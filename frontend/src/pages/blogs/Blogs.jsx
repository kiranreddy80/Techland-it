import React, { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
import { getSEO } from "../../config/seoConfig";
import { blogPosts as importedBlogPosts } from "./blogData";

const Blogs = () => {
  const seo = getSEO("blogs");
  // Transform the imported blog data to match the format expected by the component
  const transformedBlogPosts = importedBlogPosts.map((post) => ({
    id: post.id,
    title: post.title,
    excerpt: post.fullDescription,
    date: post.date,
    readTime: post.readTime,
    image: post.imageUrl,
    slug: post.title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, ""),
    category: post.category,
    author: post.author,
  }));

  // State for search and filtering
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(transformedBlogPosts);

  // Handle search input change
  const handleSearch = (e) => {
    const term = e.target.toLowerCase();
    setSearchTerm(term);

    // Filter blog posts based on search term
    const filtered = transformedBlogPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(term) ||
        post.excerpt.toLowerCase().includes(term) ||
        (post.category &&
          post.category.some((cat) => cat.toLowerCase().includes(term)))
    );

    setFilteredPosts(filtered);
  };

  return (
    <div>
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonical={seo.canonical}
      />
      {/* Breadcrumb Section */}
      <div
        className="breadcumb-area style2 bg-smoke4"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div
          className="breadcumb-wrapper"
          style={{ backgroundImage: 'url("assets/img/bg/breadcumb-bg.jpg")' }}
        >
          <div className="container">
            <div className="breadcumb-content">
              <h1 className="breadcumb-title">Blogs</h1>
              <ul className="breadcumb-menu">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>Blogs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Section with Search */}
      <section
        className="blog-area space space-extra2-bottom"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="container">
          <div className="blog-area">
            {/* Blog Posts Grid */}
            <div className="service-wrapper">
              <div className="row">
                {filteredPosts.length > 0 ? (
                  filteredPosts.map((post, index) => (
                    <div
                      className="col-xl-4 col-md-6 mb-4"
                      key={post.id}
                      data-aos="zoom-in"
                      data-aos-duration="800"
                      data-aos-delay={index * 100}
                    >
                      <div className="service-box service-style-1 service-style9">
                        <div className="service-img">
                          <Link to={`/blogs/${post.id}`}>
                            <img src={post.image} alt={post.title} />
                          </Link>
                        </div>
                        <div className="service-content sv-content6">
                          <div className="blog-meta">
                            <div className="tags-area">
                              <ul className="d-flex flex-row align-items-center ps-0">
                                <li className="d-flex align-items-center">
                                  <img
                                    src="/assets/icons/user-male-circle.png"
                                    alt="Author"
                                    width="18"
                                    height="18"
                                    style={{
                                      objectFit: "contain",
                                      marginRight: "4px",
                                    }}
                                    loading="lazy"
                                  />
                                  <a href="#">{post.author}</a>
                                </li>
                                <li className="d-flex align-items-center pe-5">
                                  <img
                                    src="/assets/icons/calendar.png"
                                    alt="Date"
                                    width="18"
                                    height="18"
                                    style={{
                                      objectFit: "contain",
                                      marginRight: "4px",
                                    }}
                                    loading="lazy"
                                  />
                                  <a href="#">{post.date}</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <h3 className="box-title">
                            <Link to={`/blogs/${post.id}`}>{post.title}</Link>
                          </h3>
                          <p className="service-box_text">{post.excerpt}</p>
                          {post.category && (
                            <div className="blog-categories mb-2">
                              {post.category.map((cat, index) => (
                                <span
                                  key={index}
                                  className="badge bg-secondary me-1"
                                >
                                  {cat}
                                </span>
                              ))}
                            </div>
                          )}
                          <Link className="th-btn" to={`/blogs/${post.id}`}>
                            Read More{" "}
                            <i className="fa-regular fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-12 text-center">
                    <h3>No blog posts found matching your search.</h3>
                    <button
                      className="th-btn mt-3"
                      onClick={() => {
                        setSearchTerm("");
                        setFilteredPosts(transformedBlogPosts);
                      }}
                    >
                      View All Posts
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
