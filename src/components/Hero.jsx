import heroImage from "../assets/hero.png";

export default function Hero() {
    return (
        <section className="hero">

            <div className="hero-image">
                <img src="./src/assets/angel.jpg" alt="Angel Rodriguez" />
            </div>

            <div className="hero-text">

                <p>Hey, I'm Angel.</p>

                <h1>Computer Science @ UCF</h1>

                <h2>Software Engineer</h2>

                <a href="#experience" className="learn-more">
                    Learn more about me
                    <span>↓</span>
                </a>

            </div>

        </section>
    );
}