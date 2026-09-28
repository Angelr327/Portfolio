import { useState } from "react";
import dslImage from "../assets/projects/DSL.png";
import haloHelmetImage from "../assets/projects/helmet.jpg";
import haloHardwareImage from "../assets/projects/hardware.jpg";
import haloCvImage from "../assets/projects/cv.png";

const projects = [
    {
        name: "DSL - Hackalytics 2026 Winner",
        title: "AI Humanitarian Crisis Intelligence Platform",
        description:
            "An AI-driven platform for humanitarian funding analysis. The application analyzes humanitarian datasets, computes funding gaps and crisis metrics, and provides an interactive dashboard with an AI assistant for data exploration.",
        technologies: ["Python", "FastAPI", "React", "SQL"],
        image: dslImage,
        link: "https://devpost.com/software/data-saves-lives-dsl",
        awards: [
        "3rd / 24 — Databricks Challenge"
],
    },

    {
        name: "Halo - ShellHacks 2026 Winner",
        title: "Smart Cycling Safety Helmet",
        description:
            "A real-time cyclist safety system combining Raspberry Pi 5, dual-camera YOLO perception, ultrasonic sensing, and a SwiftUI companion app. Halo detects blind-spot traffic and front collision risks, estimates time-to-collision, and synchronizes visual, haptic, audio, and mobile alerts. The app provides GPS navigation, live helmet telemetry, incident playback, camera debugging, and AI-generated post-event analysis.",
        technologies: ["Python", "Raspberry Pi", "YOLO", "SwiftUI"],
        images: [haloHelmetImage, haloHardwareImage, haloCvImage],
        link: "https://devpost.com/software/halo-1q59hf",
        awards: [
        "1st / 77 — Waymo Mobility Challenge",
        "1st / 34 — State Farm Challenge"
],
    },

    {
        name: "Information Aggregator",
        title: "Python Information Aggregator App",
        description:
            "A Python CLI application that integrates multiple external APIs to aggregate real-time weather, technology, news, and sports information, with automated email delivery for daily summaries.",
        technologies: ["Python"],
        image: "/projects/aggregator.png",
        link: "https://github.com/Angelr327/Resume-Projects/tree/main/Information-Aggregator"
    }
];

export default function Projects() {

    const [selectedProject, setSelectedProject] = useState(projects[0]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const selectedImages = selectedProject.images ?? [selectedProject.image];

    const selectProject = (project) => {
        setSelectedProject(project);
        setCurrentImageIndex(0);
    };

    const showPreviousImage = () => {
        setCurrentImageIndex((currentIndex) =>
            (currentIndex - 1 + selectedImages.length) % selectedImages.length
        );
    };

    const showNextImage = () => {
        setCurrentImageIndex((currentIndex) =>
            (currentIndex + 1) % selectedImages.length
        );
    };

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
                            onClick={() => selectProject(project)}
                        >

                            <h3>{project.name}</h3>

                            <p>{project.title}</p>

                        </div>
                    ))}

                </div>


                <div className="project-details">

                    <div className="project-media">
                        <a
                            href={selectedProject.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-image-link"
                        >

                            <img
                                src={selectedImages[currentImageIndex]}
                                alt={`${selectedProject.title} — image ${currentImageIndex + 1} of ${selectedImages.length}`}
                            />

                        </a>

                        {selectedImages.length > 1 && (
                            <>
                                <button
                                    type="button"
                                    className="project-carousel-button previous"
                                    onClick={showPreviousImage}
                                    aria-label="Show previous Halo image"
                                >
                                    &#8249;
                                </button>
                                <button
                                    type="button"
                                    className="project-carousel-button next"
                                    onClick={showNextImage}
                                    aria-label="Show next Halo image"
                                >
                                    &#8250;
                                </button>
                                <span className="project-carousel-count" aria-live="polite">
                                    {currentImageIndex + 1} / {selectedImages.length}
                                </span>
                            </>
                        )}
                    </div>


                    <div className="project-info">

                        <h3>{selectedProject.title}</h3>

                        <p>
                            {selectedProject.description}
                        </p>

                        {selectedProject.awards && (
                            <div className="project-awards">
                                {selectedProject.awards.map((award) => (
                                    <span key={award}>
                                        🏆 {award}
                                    </span>
                                    ))}
                                </div>
                        )}

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
