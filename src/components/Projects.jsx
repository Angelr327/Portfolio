import { useState } from "react";

const projects = [
    {
        name: "DSL",
        title: "AI Humanitarian Crisis Intelligence Platform",
        description:
            "An AI-driven platform for humanitarian funding analysis. The application analyzes humanitarian datasets, computes funding gaps and crisis metrics, and provides an interactive dashboard with an AI assistant for data exploration.",
        technologies: ["Python", "FastAPI", "React", "SQL"],
        image: "./src/assets/projects/dsl.png",
        link: "https://devpost.com/software/data-saves-lives-dsl"
    },

    {
        name: "Information Aggregator",
        title: "Python Information Aggregator App",
        description:
            "A Python CLI application that integrates multiple external APIs to aggregate real-time weather, technology, news, and sports information, with automated email delivery for daily summaries.",
        technologies: ["Python"],
        image: "/projects/aggregator.png",
        link: "https://github.com/Angelr327/Resume-Projects/tree/main/Information-Aggregator"
    },

    {
        name: "Weather App",
        title: "Full-Stack Weather Web Application",
        description:
            "A responsive weather application integrating the OpenWeatherMap API with asynchronous API calls, dynamic rendering, conditional UI, and responsive design for desktop and mobile.",
        technologies: ["JavaScript", "HTML", "CSS"],
        image: "/projects/weather.png",
        link: "https://github.com/Angelr327/Resume-Projects/tree/main/weather%20app"
    }
];

export default function Projects() {

    const [selectedProject, setSelectedProject] = useState(projects[0]);

    return (
        <section id="projects" className="projects">

            <h2>Projects</h2>

            <div className="projects-container">

                <div className="project-list">

                    {projects.map((project) => (
                        <div
                            key={project.name}
                            className={`project-card ${
                                selectedProject.name === project.name
                                    ? "active"
                                    : ""
                            }`}
                            onClick={() => setSelectedProject(project)}
                        >

                            <h3>{project.name}</h3>

                            <p>{project.title}</p>

                        </div>
                    ))}

                </div>


                <div className="project-details">

                    <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-image-link"
                    >

                        <img
                            src={selectedProject.image}
                            alt={selectedProject.title}
                        />

                    </a>


                    <div className="project-info">

                        <h3>{selectedProject.title}</h3>

                        <p>
                            {selectedProject.description}
                        </p>


                        <div className="project-technologies">

                            {selectedProject.technologies.map((technology) => (
                                <span key={technology}>
                                    {technology}
                                </span>
                            ))}

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}