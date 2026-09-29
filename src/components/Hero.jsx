import heroImage from "../assets/angel.jpg";

export default function Hero() {
    return (
        <section id="top" className="hero">

            <div className="hero-image">
                <img src={heroImage} alt="Angel Rodriguez" />
            </div>

            <div className="hero-text">

                <p className="hero-eyebrow">Hey, I’m Angel Rodriguez.</p>

                <h1>Building software for the real world.</h1>

                <h2>Computer Science at UCF · Software Engineer</h2>

                <p className="hero-summary">I build useful systems across web, AI, and hardware—from humanitarian data tools to safer cycling technology.</p>

                <a href="#experience" className="learn-more">
                    Learn more about me
                    <span aria-hidden="true">↓</span>
                </a>

            </div>

        </section>
    );
}
