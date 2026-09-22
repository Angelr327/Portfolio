import heroImage from "../assets/angel.jpg";

export default function Hero() {
    return (
        <section className="hero">

            <div className="hero-image">
                <img src={heroImage} alt="Angel Rodriguez" />
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