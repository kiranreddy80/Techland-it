import React, { useState, useEffect, useRef } from "react";

const toolsData = {
  "Frontend Development": [
    {
      name: "HTML",
      icon: "/assets/img/tool-icons/html5.svg",
      color: "#E34F26",
    },
    {
      name: "CSS",
      icon: "/assets/img/tool-icons/css3.svg",
      color: "#1572B6",
    },
    {
      name: "Bootstrap",
      icon: "/assets/img/tool-icons/bootstrap.svg",
      color: "#7952B3",
    },
    {
      name: "JavaScript",
      icon: "/assets/img/tool-icons/javascript.svg",
      color: "#F7DF1E",
    },
    {
      name: "React JS",
      icon: "/assets/img/tool-icons/react.svg",
      color: "#61DAFB",
    },
    {
      name: "Next JS",
      icon: "/assets/img/tool-icons/nextjs.svg",
      color: "#000000",
    },
    {
      name: "Vue JS",
      icon: "/assets/img/tool-icons/vuejs.svg",
      color: "#4FC08D",
    },
    {
      name: "Angular",
      icon: "/assets/img/tool-icons/angularjs.svg",
      color: "#DD0031",
    },
    {
      name: "Tailwind CSS",
      icon: "/assets/img/tool-icons/tailwindcss.svg",
      color: "#06B6D4",
    },
  ],
  "Backend Development": [
    {
      name: "Node JS",
      icon: "/assets/img/tool-icons/nodejs.svg",
      color: "#339933",
    },
    {
      name: "Express JS",
      icon: "/assets/img/tool-icons/express.svg",
      color: "#000000",
    },
    {
      name: "PHP",
      icon: "/assets/img/tool-icons/php.svg",
      color: "#777BB4",
    },
    {
      name: "Laravel",
      icon: "/assets/img/tool-icons/laravel.svg",
      color: "#FF2D20",
    },
    {
      name: "Java",
      icon: "/assets/img/tool-icons/java.svg",
      color: "#007396",
    },
    {
      name: "Python",
      icon: "/assets/img/tool-icons/python.svg",
      color: "#3776AB",
    },
    {
      name: "Django",
      icon: "/assets/img/tool-icons/django.svg",
      color: "#092E20",
    },
    {
      name: "Flask",
      icon: "/assets/img/tool-icons/flask.svg",
      color: "#000000",
    },
    {
      name: "FastAPI",
      icon: "/assets/img/tool-icons/fastapi.svg",
      color: "#009688",
    },
  ],
  "Mobile App Development": [
    {
      name: "Flutter",
      icon: "/assets/img/tool-icons/flutter.svg",
      color: "#02569B",
    },
    {
      name: "React Native",
      icon: "/assets/img/tool-icons/react.svg",
      color: "#61DAFB",
    },
    {
      name: "Swift",
      icon: "/assets/img/tool-icons/swift.svg",
      color: "#FA7343",
    },
    {
      name: "Kotlin",
      icon: "/assets/img/tool-icons/kotlin.svg",
      color: "#7F52FF",
    },
    {
      name: "Android",
      icon: "/assets/img/tool-icons/android.svg",
      color: "#3DDC84",
    },
    { name: "iOS", icon: "/assets/img/tool-icons/ios.png", color: "#000000" },
  ],
  "Cloud Platforms": [
    {
      name: "AWS",
      icon: "/assets/img/tool-icons/aws.svg",
      color: "#FF9900",
    },
    {
      name: "Google Cloud",
      icon: "/assets/img/tool-icons/googlecloud.svg",
      color: "#4285F4",
    },
    {
      name: "Azure",
      icon: "/assets/img/tool-icons/azure.svg",
      color: "#0078D4",
    },
    {
      name: "Docker",
      icon: "/assets/img/tool-icons/docker.svg",
      color: "#2496ED",
    },
    {
      name: "Kubernetes",
      icon: "/assets/img/tool-icons/kubernetes.svg",
      color: "#326CE5",
    },
  ],
  Databases: [
    {
      name: "MongoDB",
      icon: "/assets/img/tool-icons/mongodb.svg",
      color: "#47A248",
    },
    {
      name: "MySQL",
      icon: "/assets/img/tool-icons/mysql.svg",
      color: "#4479A1",
    },
    {
      name: "PostgreSQL",
      icon: "/assets/img/tool-icons/postgresql.svg",
      color: "#336791",
    },
    {
      name: "Firebase",
      icon: "/assets/img/tool-icons/firebase.svg",
      color: "#FFCA28",
    },
    {
      name: "Redis",
      icon: "/assets/img/tool-icons/redis.svg",
      color: "#DC382D",
    },
  ],
  "Machine Learning & AI": [
    {
      name: "TensorFlow",
      icon: "/assets/img/tool-icons/tensorflow.svg",
      color: "#FF6F00",
    },
    {
      name: "PyTorch",
      icon: "/assets/img/tool-icons/pytorch.svg",
      color: "#EE4C2C",
    },
    {
      name: "Pandas",
      icon: "/assets/img/tool-icons/pandas.svg",
      color: "#150458",
    },
    {
      name: "Scikit-learn",
      icon: "/assets/img/tool-icons/scikit-learn.svg",
      color: "#F7931E",
    },
  ],
  "DevOps & CI/CD": [
    {
      name: "Jenkins",
      icon: "/assets/img/tool-icons/jenkins.svg",
      color: "#D24939",
    },
    {
      name: "GitLab",
      icon: "/assets/img/tool-icons/gitlab.svg",
      color: "#FC6D26",
    },
    {
      name: "Bitbucket",
      icon: "/assets/img/tool-icons/bitbucket.svg",
      color: "#0052CC",
    },
  ],
  "Testing & Automation": [
    {
      name: "Selenium",
      icon: "/assets/img/tool-icons/selenium.svg",
      color: "#43B02A",
    },
    {
      name: "Jest",
      icon: "/assets/img/tool-icons/jest.svg",
      color: "#C21325",
    },
    {
      name: "Cypress",
      icon: "/assets/img/tool-icons/cypress.svg",
      color: "#17202C",
    },
  ],
  Blockchain: [
    {
      name: "Solidity",
      icon: "/assets/img/tool-icons/solidity.svg",
      color: "#363636",
    },
    {
      name: "Ethereum",
      icon: "/assets/img/tool-icons/ethereum.svg",
      color: "#3C3C3D",
    },
  ],
};

const TechCard = ({ tool, index, activeTab }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      if (!isHovered) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
    };

    const handleMouseLeave = () => {
      card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)";
    };

    if (isHovered) {
      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isHovered]);

  return (
    <div
      className="p-2"
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.05}s both`,
      }}
    >
      <div
        ref={cardRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
          backdropFilter: "blur(10px)",
          borderRadius: "20px",
          padding: "30px 20px",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: isHovered
            ? `0 20px 60px ${tool.color}40, 0 0 0 1px ${tool.color}60`
            : "0 8px 32px rgba(0,0,0,0.3)",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          cursor: "pointer",
          transformStyle: "preserve-3d",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(circle at 50% 50%, ${tool.color}20 0%, transparent 70%)`,
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        />

        <div
          style={{
            height: "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "15px",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: "70px",
              height: "70px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: `linear-gradient(135deg, ${tool.color}20 0%, ${tool.color}10 100%)`,
              borderRadius: "16px",
              padding: "12px",
              transform: isHovered ? "scale(1.1) rotateY(10deg)" : "scale(1)",
              transition: "transform 0.3s ease",
            }}
          >
            <img
              src={tool.icon}
              alt={tool.name}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
                filter: isHovered
                  ? "drop-shadow(0 4px 8px rgba(0,0,0,0.3))"
                  : "none",
              }}
            />
          </div>
        </div>

        <h3
          style={{
            fontSize: "15px",
            fontWeight: "600",
            color: "#fff",
            textAlign: "center",
            margin: 0,
            position: "relative",
            zIndex: 1,
            textShadow: isHovered ? `0 0 20px ${tool.color}80` : "none",
            transition: "text-shadow 0.3s ease",
          }}
        >
          {tool.name}
        </h3>
      </div>
    </div>
  );
};

const UsedToolsTab = () => {
  const [activeTab, setActiveTab] = useState("Frontend Development");

  return (
    <div
      style={{
        background:
          "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)",
        minHeight: "100vh",
        padding: "80px 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated background particles */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at 20% 50%, rgba(14, 89, 242, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div
            style={{
              display: "inline-block",
              background: "linear-gradient(90deg, #0E59F2, #6366F1)",
              padding: "8px 24px",
              borderRadius: "50px",
              marginBottom: "20px",
              fontSize: "14px",
              fontWeight: "600",
              letterSpacing: "2px",
              color: "#fff",
              boxShadow: "0 4px 20px rgba(14, 89, 242, 0.4)",
            }}
          >
            TECHNOLOGIES
          </div>
          <h1
            style={{
              fontSize: "48px",
              fontWeight: "700",
              color: "#fff",
              margin: "0 0 15px 0",
              background: "linear-gradient(90deg, #fff, #a0a0a0)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Technologies We Use
          </h1>
          <p
            style={{
              color: "#888",
              fontSize: "18px",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Cutting-edge tools and frameworks powering modern development
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="row justify-content-center mb-50">
          <div className="col-lg-12">
            <div className="tech-tabs-wrapper text-center">
              {Object.keys(toolsData).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`tech-tab-btn ${
                    activeTab === category ? "active" : ""
                  }`}
                  style={{
                    background: "transparent",
                    border: "none",
                    borderBottom:
                      activeTab === category
                        ? "2px solid #0E59F2"
                        : "2px solid transparent",
                    color: activeTab === category ? "#fff" : "#aaa",
                    padding: "10px 20px",
                    margin: "0 5px 10px",
                    fontSize: "16px",
                    fontWeight: "500",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tools Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
            gap: "20px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {toolsData[activeTab].map((tool, index) => (
            <TechCard
              key={index}
              tool={tool}
              index={index}
              activeTab={activeTab}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 36px !important;
          }
        }

        @media (max-width: 480px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)) !important;
          }
        }
      `}</style>
    </div>
  );
};

export default UsedToolsTab;

