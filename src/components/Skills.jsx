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
        title: "Frameworks & Libraries",
        skills: [
            "Flask",
            "FastAPI",
            "React",
            "Node.js",
            "Pandas",
            "OpenCV",
            "PyTorch",
            "Tailwind CSS"
        ]
    },
    {
        title: "Developer Tools",
        skills: [
            "Git",
            "VS Code",
            "Visual Studio",
            "PyCharm",
            "Eclipse"
        ]
    },
    {
        title: "AI Tools",
        skills: [
            "Claude",
            "Codex",
            "Cursor",
            "RAG"
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