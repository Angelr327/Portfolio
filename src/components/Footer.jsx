export default function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                <div className="footer-left">
                    <a href="/" className="footer-logo">
                        arodriguez.dev
                    </a>
                </div>

                <div className="footer-center">
                    <p>
                        Made by Angel
                    </p>

                    <a href="#" className="back-to-top">
                        Back to top
                    </a>
                </div>

                <div className="footer-right">
                    <a
                        href="https://github.com/Angelr327"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/angelr327"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>

                    <a href="./src/assets/resume/Angel_s_Resume.pdf">Resume</a>
                </div>

            </div>

            <div className="footer-bottom">
                © 2026 Angel Rodriguez. All rights reserved.
            </div>

        </footer>
    )
}