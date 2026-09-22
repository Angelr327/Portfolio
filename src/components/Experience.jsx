import minoriaLogo from "../assets/minoriatech.webp";
import nasaLogo from "../assets/lspace.jpg";
import botballLogo from "../assets/robotics.webp";


const experiences = [
    {
        date: "Jan 2026 — Apr 2026",
        company: "Minoria Tech",
        title: "Software Engineering Intern",
        image: minoriaLogo,
        bullets: [
            "Developed a suite of RESTful APIs using FastAPI and SQL, replacing third-party CRM dependencies and improving system control and scalability.",
            "Designed and implemented authentication and database architecture for enterprise clients including Lockheed Martin, Dell, and Red Hat.",
            "Collaborated in a Git-based team environment, contributing to code reviews and API design documentation to ensure maintainability and efficient onboarding."
        ]
    },

    {
        date: "Jan 2026 — Mar 2026",
        company: "NASA L'SPACE",
        title: "NPWEE Member",
        image: nasaLogo,
        bullets: [
            "Selected for NASA's competitive L'SPACE program, contributing to a mission proposal focused on low-temperature Sabatier reactors for Mars ISRU fuel production.",
            "Collaborated on the design of a Nickel-Manganese catalyst system to convert CO2 and H2 into methane (CH4), targeting a reduction in operating temperature from ~400°C to ~250°C.",
            "Contributed to technical analysis and documentation evaluating CO2 conversion efficiency, catalyst performance, and cost reduction to support long-duration Mars mission sustainability."
        ]
    },

    {
        date: "Sep 2023 — Jun 2025",
        company: "Botball New Jersey",
        title: "Robotics Team Lead Programmer",
        image: botballLogo,
        bullets: [
            "Led programming team of 10 for an autonomous robot using C and KIPR Wombat Controller, enabling full task automation in competition scenarios.",
            "Integrated sensors, camera vision, servos, and motor control systems to achieve 75% task success rate in autonomous navigation and object manipulation challenges.",
            "Developed and tested modular C code for obstacle navigation and object handling, improving execution consistency and reliability across competition runs."
        ]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="experience">

            <h2>Experience</h2>

            <div className="experience-list">

                {experiences.map((experience, index) => (
                    <div className="experience-card" key={index}>

                        <div className="experience-date">
                            {experience.date}
                        </div>

                        <div className="experience-logo">
                            <img
                                src={experience.image}
                                alt={`${experience.company} logo`}
                            />
                        </div>

                        <div className="experience-content">

                            <div className="experience-company">
                                <h3>{experience.company}</h3>
                            </div>

                            <h4>{experience.title}</h4>

                            <ul>
                                {experience.bullets.map((bullet, bulletIndex) => (
                                    <li key={bulletIndex}>
                                        {bullet}
                                    </li>
                                ))}
                            </ul>

                        </div>

                    </div>
                ))}

            </div>

        </section>
    );
}