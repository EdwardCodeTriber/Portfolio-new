import React, { useState, useEffect } from "react";
// import "./project.css"

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("React");

  useEffect(() => {
    // Simulating fetching data from a JSON file or API
    fetch("/src/project.json")
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
        <p>
          <strong>Description:</strong> {project.description}
        </p>
        <p>
          <strong>Tech Stack:</strong>{" "}
          {project.techStack ? project.techStack.join(", ") : "Not specified"}
        </p>
        <p>
          <strong>Key Features:</strong>
        </p>
        <ul>
          {project.features ? (
            project.features.map((feature, i) => <li key={i}>{feature}</li>)
          ) : (
            <li>Not specified</li>
          )}
        </ul>
        <p>
          <strong>Challenges Faced and Solutions:</strong>
        </p>
        <p>
          {project.challenges || "Not specified"} -{" "}
          {project.solution || "Not specified"}
        </p>
        <p>
          <strong>Links:</strong>
        </p>
        <p>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
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

      <style jsx>{`
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
