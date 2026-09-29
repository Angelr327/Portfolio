import minoriaLogo from "../assets/minoriatech.webp";
import nasaLogo from "../assets/lspace.jpg";
import botballLogo from "../assets/robotics.webp";
import knightHacksLogo from "../assets/knight-hacks.jpeg";


const experiences = [
    {
        date: "Aug 2026 — Present",
        company: "Knight Hacks",
        title: "Kickstart Mentee",
        image: knightHacksLogo,
        bullets: [
            <>
                Member of <span className="highlight">UCF’s largest software engineering club</span>, which hosts UCF’s official hackathon.
            </>,
            <>
                Participate in the <span className="highlight">Kickstart mentorship program</span> alongside four other mentees, guided by mentor Jason Sacerio.
            </>,
            <>
                Attend <span className="highlight">hackathons and workshops</span>, build technical experience through Knight Hacks projects, and connect with other developers.
            </>
        ]
    },
    {
        date: "Jan 2026 — Apr 2026",
        company: "Minoria Tech",
        title: "Software Engineering Intern",
        image: minoriaLogo,
        bullets: [
            <>
                Designed <span className="highlight">authentication systems and database architecture</span> supporting CRM workflows for enterprise clients including Lockheed Martin, Dell, and Red Hat.
            </>,
            <>
                Developed <span className="highlight">RESTful APIs with FastAPI and SQL</span>, replacing third-party CRM dependencies and improving system control and scalability.
            </>,
            <>
                Collaborated in a <span className="highlight">Git-based team</span>, contributing to code reviews and API design documentation for maintainability and efficient onboarding.
            </>
        ]
    },

    {
        date: "Jan 2026 — Mar 2026",
        company: "NASA L’SPACE",
        title: "NPWEE Member",
        image: nasaLogo,
        bullets: [
            <>
                Selected for NASA’s competitive <span className="highlight">L’SPACE program</span>, contributing to a mission proposal focused on low-temperature Sabatier reactors for Mars ISRU fuel production.
            </>,
            <>
                Collaborated on a <span className="highlight">nickel–manganese catalyst system</span> to convert CO₂ and H₂ into methane, targeting an operating temperature reduction from approximately 400°C to 250°C.
            </>
        ]
    },

    {
        date: "Sep 2023 — Jun 2025",
        company: "Botball New Jersey",
        title: "Robotics Team Lead Programmer",
        image: botballLogo,
        bullets: [
            <>
                Led a <span className="highlight">10-person programming team</span> for an autonomous robot using C and the KIPR Wombat Controller, enabling full task automation in competition scenarios.
            </>,
            <>
                Integrated <span className="highlight">sensors, camera vision, servos, and motor controls</span> to achieve a 75% task success rate in autonomous navigation and object manipulation challenges.
            </>,
            <>
                Developed and tested <span className="highlight">modular C code</span> for obstacle navigation and object handling, improving consistency across competition runs.
            </>
        ]
    }
];


export default function Experience() {
    return (
        <section id="experience" className="experience">

            <h2>Experience</h2>

            <div className="experience-list">

                {experiences.map((experience) => (
                    <article className="experience-card" key={experience.company}>

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

                    </article>
                ))}

            </div>

        </section>
    );
}
