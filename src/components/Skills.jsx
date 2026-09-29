const skillCategories = [
    {
        title: "Languages",
        skills: [
            "Python",
            "Java",
            "C",
            "JavaScript",
            "SQL",
            "HTML/CSS"
        ]
    },
    {
        title: "Frameworks & Data",
        skills: [
            "React",
            "FastAPI",
            "Node.js",
            "SQLite",
            "Pandas",
            "Tailwind CSS"
        ]
    },
    {
        title: "AI",
        skills: [
            "PyTorch",
            "OpenCV",
            "YOLO",
            "RAG",
            "Gemini",
            "Claude Code",
            "Codex"
        ]
    },
    {
        title: "Developer Tools",
        skills: [
            "Linux",
            "Git",
            "Vercel",
            "VS Code"
        ]
    }
];

function Skills() {
    return (
        <section id="skills" className="skills">

            <h2>Skills</h2>

            <div className="skills-grid">

                {skillCategories.map((category) => (
                    <div
                        className="skill-category"
                        key={category.title}
                    >

                        <h3>{category.title}</h3>

                        <div className="skill-list">

                            {category.skills.map((skill) => (
                                <span
                                    className="skill-pill"
                                    key={skill}
                                >
                                    {skill}
                                </span>
                            ))}

                        </div>

                    </div>
                ))}

            </div>

        </section>
    );
}

export default Skills;
