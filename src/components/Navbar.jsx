export default function Navbar() {
    return (
        <header className="navbar">
            <nav className="navbar-container">

                <div className="navbar-left">
                    <a href="/" className="logo">
                        arodriguez.dev
                    </a>
                </div>

                <div className="navbar-center">
                    <a href="#experience">Experience</a>
                    <a href="#projects">Projects</a>
                    <a href="#skills">Skills</a>
                </div>

                <div className="navbar-right">
                    <a
                        href="https://www.linkedin.com/in/angelr327"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>

                    <a
                        href="https://github.com/Angelr327"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>

                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                        Resume
                    </a>
                </div>

            </nav>
        </header>
    );
}