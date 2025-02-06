import { useState, useEffect } from "react";
// import "./project.css"

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("React");

  useEffect(() => {
    // Simulating fetching data from a JSON file or API
    fetch("https://node-server-tawny-nu.vercel.app/api/projects")
      .then((response) => response.json())
      .then((data) => setProjectsData(data.projects))
      .catch((error) => console.error("Error fetching projects data:", error));
  }, []);

  const renderProjects = () => {
    const topicData = projectsData.find(
      (topic) => topic.topic === selectedTopic
    );

    if (!topicData) {
      return <p>No projects available for this topic.</p>;
    }

    return topicData.projects.map((project, index) => (
      <div key={index} className="card">
        <h2>{project.title}</h2>
        <p
          style={{
            fontSize: "16px",
            color: "#f6fff8",
            lineHeight: "1.6",
            marginBottom: "10px",
          }}
        >
          <strong style={{ color: "#73d2de", fontWeight: "600" }}>
            Description:
          </strong>{" "}
          {project.description}
        </p>
        <p
          style={{
            fontSize: "16px",
            color: "#f6fff8",
            lineHeight: "1.6",
            marginBottom: "10px",
          }}
        >
          <strong style={{ color: "#73d2de", fontWeight: "600" }}>
            Tech Stack:
          </strong>{" "}
          {project.techStack ? project.techStack.join(", ") : "Not specified"}
        </p>
        <p style={{ fontSize: "16px", color: "#73d2de", fontWeight: "600" }}>
          <strong>Key Features:</strong>
        </p>
        <ul style={{ paddingLeft: "20px", marginBottom: "10px" }}>
          {project.features ? (
            project.features.map((feature, i) => (
              <li
                key={i}
                style={{ fontSize: "16px", color: "#06d6a0", marginBottom: "5px" }}
              >
                ✔ {feature}
              </li>
            ))
          ) : (
            <li
              style={{ fontSize: "16px", color: "#555", marginBottom: "5px" }}
            >
              Not specified
            </li>
          )}
        </ul>
        <p style={{ fontSize: "16px", color: "#73d2de", fontWeight: "600" }}>
          <strong>Challenges Faced and Solutions:</strong>
        </p>
        <p
          style={{
            fontSize: "16px",
            color: "#f6fff8",
            lineHeight: "1.6",
            marginBottom: "10px",
          }}
        >
          {project.challenges || "Not specified"} -{" "}
          {project.solution || "Not specified"}
        </p>
        <p style={{ fontSize: "16px", color: "#73d2de", fontWeight: "600" }}>
          <strong>Links:</strong>
        </p>

        <p>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              backgroundColor: "#1e293b",
              color: "#ffffff",
              padding: "10px 16px",
              fontSize: "16px",
              fontWeight: "500",
              textDecoration: "none",
              borderRadius: "8px",
              transition: "background-color 0.3s ease, transform 0.2s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#334155")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#1e293b")}
          >
            GitHub Repository
          </a>
        </p>
      </div>
    ));
  };

  return (
    <div>
      {/* <h1>Projects by Topic</h1> */}
      <div className="topics">
        {projectsData.map((topic, index) => (
          <button
            key={index}
            onClick={() => setSelectedTopic(topic.topic)}
            className={selectedTopic === topic.topic ? "active" : ""}
          >
            {topic.topic}
          </button>
        ))}
      </div>
      <div className="projects-list">{renderProjects()}</div>

      <style>{`
        .topics button {
            
          margin: 20px 5px 5px;
          padding: 10px;
          border: none;
          background-color: #eee;
          cursor: pointer;
          padding: 0.5em 1em;
          font-weight: 800;
          letter-spacing: 1px;
          border-radius: 0.5em;
          font-size: 1.1em;
          border: 2px solid white;
          cursor: pointer;
          transition: 0.3s ease-in-out;
        }

        .topics button.active {
          background: linear-gradient(to right, #6cff52, #3ec5ff);
          background-clip: text;
          color: transparent;
        }

        .card {
          background: rgb(24, 24, 24);
          border: 3px solid rgb(49, 49, 49);
          border-radius: 0.5em;
          padding: 20px;
          color: white;
          margin: 20px 0;
          justify-content: space-between;
        }
        .card:hover {
          border: 3px solid rgb(100, 100, 100);
        }

        .projects-list {
          margin-top: 20px;
        }
        .h1 {
          font-size: 2em;
          background: linear-gradient(to right, #6cff52, #3ec5ff);
          background-clip: text;
          color: transparent;
        }
      `}</style>
    </div>
  );
};

export default Projects;
