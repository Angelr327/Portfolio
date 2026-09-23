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
            <>
                Developed a suite of <span className="highlight">RESTful APIs using FastAPI and SQL</span>,
                replacing third-party CRM dependencies and improving <span className="highlight">system control and scalability</span>.
            </>,
            <>
                Designed and implemented <span className="highlight">authentication and database architecture</span>
                for enterprise clients including <span className="highlight">Lockheed Martin, Dell, and Red Hat</span>.
            </>,
            <>
                Collaborated in a <span className="highlight">Git-based team environment</span>,
                contributing to code reviews and API design documentation to ensure maintainability and efficient onboarding.
            </>
        ]
    },

    {
        date: "Jan 2026 — Mar 2026",
        company: "NASA L'SPACE",
        title: "NPWEE Member",
        image: nasaLogo,
        bullets: [
            <>
                Selected for NASA's competitive <span className="highlight">L'SPACE program</span>,
                contributing to a mission proposal focused on <span className="highlight">low-temperature Sabatier reactors</span>
                for Mars ISRU fuel production.
            </>,
            <>
                Collaborated on the design of a <span className="highlight">Nickel-Manganese catalyst system</span>
                to convert CO2 and H2 into methane (CH4), targeting a reduction in operating temperature
                from <span className="highlight">~400°C to ~250°C</span>.
            </>,
            <>
                Contributed to technical analysis and documentation evaluating
                <span className="highlight"> CO2 conversion efficiency, catalyst performance, and cost reduction</span>
                to support long-duration Mars mission sustainability.
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
                Led programming team of <span className="highlight">10</span> for an autonomous robot using
                <span className="highlight"> C and KIPR Wombat Controller</span>, enabling full task automation in competition scenarios.
            </>,
            <>
                Integrated <span className="highlight">sensors, camera vision, servos, and motor control systems</span>
                to achieve <span className="highlight">75% task success rate</span> in autonomous navigation and object manipulation challenges.
            </>,
            <>
                Developed and tested <span className="highlight">modular C code</span> for obstacle navigation
                and object handling, improving execution consistency and reliability across competition runs.
            </>
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