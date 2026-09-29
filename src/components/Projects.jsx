import { useState } from "react";
import dslImage from "../assets/projects/DSL.png";
import haloHelmetImage from "../assets/projects/helmet.jpg";
import haloHardwareImage from "../assets/projects/hardware.jpg";
import haloCvImage from "../assets/projects/cv.png";

const projects = [
    {
        name: "DSL",
        title: "AI Humanitarian Crisis Intelligence Platform",
        description: "Built a FastAPI and Pandas backend to analyze humanitarian datasets and calculate funding gaps and crisis metrics. Developed a React dashboard with an AI assistant using retrieval-augmented generation for real-time data exploration.",
        technologies: ["Python", "FastAPI", "React", "SQL", "Pandas", "RAG"],
        images: [dslImage],
        link: "https://devpost.com/software/data-saves-lives-dsl",
        linkLabel: "View DSL on Devpost",
        awards: ["3rd of 24 · Georgia Tech Databricks Challenge"],
    },
    {
        name: "Halo",
        title: "Smart Cycling Safety Helmet",
        description: "Led iOS and systems integration for a SwiftUI safety app with MapKit navigation, GPS-aware search, Raspberry Pi telemetry at approximately 30 updates per second, incident playback, and haptic alerts. Collaborated on a dual-camera YOLO26n-to-NCNN perception pipeline with object tracking, time-to-collision hazard detection, ultrasonic sensor fusion, and Arduino alerts, achieving approximately 18–21 ms detection latency. Synchronized helmet display, audio, mobile UI, and iPhone haptics for front-obstacle events, with incident capture and post-event analysis.",
        technologies: ["Python", "Raspberry Pi", "YOLO", "SwiftUI", "OpenCV"],
        images: [haloHelmetImage, haloHardwareImage, haloCvImage],
        link: "https://devpost.com/software/halo-1q59hf",
        linkLabel: "View Halo on Devpost",
        awards: ["1st of 77 · Waymo Mobility Challenge", "1st of 34 · State Farm Challenge"],
    },
    {
        name: "Personal Portfolio",
        title: "Responsive Developer Portfolio",
        description: "Built and deployed this responsive portfolio with React, JavaScript, Vite, and Vercel. It uses reusable components, optimized production builds, and a custom developer domain.",
        technologies: ["React", "JavaScript", "CSS", "Vite", "Vercel"],
        images: [],
        link: "https://github.com/Angelr327/Portfolio",
        linkLabel: "View the source on GitHub",
    },
];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(projects[0]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const selectedImages = selectedProject.images;

    const selectProject = (project) => {
        setSelectedProject(project);
        setCurrentImageIndex(0);
    };

    const changeImage = (direction) => {
        setCurrentImageIndex((index) =>
            (index + direction + selectedImages.length) % selectedImages.length
        );
    };

    return (
        <section id="projects" className="projects">
            <h2>Projects</h2>
            <div className="projects-container">
                <div className="project-list" aria-label="Select a project">
                    {projects.map((project) => (
                        <button
                            type="button"
                            key={project.name}
                            className={`project-card ${selectedProject.name === project.name ? "active" : ""}`}
                            onClick={() => selectProject(project)}
                            aria-pressed={selectedProject.name === project.name}
                        >
                            <span className="project-card-name">{project.name}</span>
                            <span className="project-card-title">{project.title}</span>
                        </button>
                    ))}
                </div>

                <article className="project-details" aria-live="polite">
                    <div className="project-media">
                        {selectedImages.length > 0 ? (
                            <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="project-image-link" aria-label={selectedProject.linkLabel}>
                                <img
                                    src={selectedImages[currentImageIndex]}
                                    alt={`${selectedProject.name} project view ${currentImageIndex + 1} of ${selectedImages.length}`}
                                />
                            </a>
                        ) : (
                            <div className="portfolio-preview" aria-label="Portfolio project preview">
                                <div className="portfolio-preview-window">
                                    <div className="portfolio-preview-bar"><span /><span /><span /></div>
                                    <div className="portfolio-preview-content">
                                        <span>angelrod.work</span>
                                        <strong>Building software<br />for the real world.</strong>
                                        <small>React · JavaScript · Vite</small>
                                    </div>
                                </div>
                            </div>
                        )}
                        {selectedImages.length > 1 && (
                            <>
                                <button type="button" className="project-carousel-button previous" onClick={() => changeImage(-1)} aria-label="Show previous Halo image">&#8249;</button>
                                <button type="button" className="project-carousel-button next" onClick={() => changeImage(1)} aria-label="Show next Halo image">&#8250;</button>
                                <span className="project-carousel-count">{currentImageIndex + 1} / {selectedImages.length}</span>
                            </>
                        )}
                    </div>
                    <div className="project-info">
                        <h3>{selectedProject.title}</h3>
                        <p>{selectedProject.description}</p>
                        {selectedProject.awards && (
                            <div className="project-awards">
                                {selectedProject.awards.map((award) => <span key={award}>🏆 {award}</span>)}
                            </div>
                        )}
                        <div className="project-technologies">
                            {selectedProject.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                        </div>
                        <a className="project-link" href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                            {selectedProject.linkLabel} <span aria-hidden="true">↗</span>
                        </a>
                    </div>
                </article>
            </div>
        </section>
    );
}
