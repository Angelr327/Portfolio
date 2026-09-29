import { useState } from "react";
import shellhacksTeam from "../assets/blog/shellhacks-team.jpeg";
import shellhacksRideApp from "../assets/blog/shellhacks-ride-app.jpeg";
import shellhacksAlertsApp from "../assets/blog/shellhacks-alerts-app.jpeg";
import shellhacksWinners from "../assets/blog/shellhacks-winners.jpeg";
import hackalyticsTeam from "../assets/blog/hackalytics-team.jpeg";
import hackalyticsAwards from "../assets/blog/hackalytics-awards.jpeg";
import hackalyticsTeamAlt from "../assets/blog/hackalytics-team-alt.jpeg";

const posts = [
    {
        date: "2026-09-29",
        event: "ShellHacks 2026",
        title: "Building Halo: a smarter cycling helmet",
        summary: "My team built Halo, a cycling safety helmet that combines computer vision, ultrasonic sensing, real-time alerts, and a SwiftUI companion app. We won first place in both the Waymo Mobility Challenge and the State Farm Challenge.",
        learned: "Bringing embedded hardware, computer vision, backend communication, and mobile development into one working prototype showed me the value of integration, debugging, and teamwork under a deadline.",
        photos: [
            { src: shellhacksTeam, alt: "Halo team posing with awards at ShellHacks", caption: "Our team with the ShellHacks awards" },
            { src: shellhacksRideApp, alt: "Halo iOS app showing a mapped cycling route", caption: "Ride tracking in the Halo app" },
            { src: shellhacksAlertsApp, alt: "Halo iOS app showing nearby vehicle alerts", caption: "Live vehicle alerts in the Halo app" },
            { src: shellhacksWinners, alt: "ShellHacks winners gathered for a group photo", caption: "ShellHacks winners" },
        ],
        url: "https://www.linkedin.com/posts/angelr327_shellhacks-hackathon-softwareengineering-activity-7510763372154376192-qrZ6",
    },
    {
        date: "2026-02-26",
        event: "Hackalytics 2026",
        title: "Making humanitarian data easier to act on",
        summary: "At Hackalytics, my team built DSL, a full-stack platform that surfaces underfunded humanitarian crises through data analysis and an AI-powered analyst. We placed third in the Databricks Challenge.",
        learned: "I grew in full-stack development, data modeling, API design, and grounding AI responses in real data. Cleaning inconsistent datasets and explaining the results clearly were the hardest parts.",
        photos: [
            { src: hackalyticsTeam, alt: "Hackalytics team and Databricks sponsor posing together", caption: "Our team at Hackalytics" },
            { src: hackalyticsAwards, alt: "Hackalytics awards displayed on a stage screen", caption: "Third place in the Databricks Challenge" },
            { src: hackalyticsTeamAlt, alt: "Hackalytics team posing for a second group photo", caption: "Another moment with the team" },
        ],
        url: "https://www.linkedin.com/posts/angelr327_hackalytics-databricks-ai-activity-7432814587705655296-diM6",
    },
];

const dateFormatter = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
});

function BlogGallery({ event, photos }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentPhoto = photos[currentIndex];
    const showPhoto = (direction) => {
        setCurrentIndex((index) => (index + direction + photos.length) % photos.length);
    };

    return (
        <figure className="blog-gallery">
            <div className="blog-photo-stage">
                <img className="blog-photo-backdrop" src={currentPhoto.src} alt="" aria-hidden="true" loading="lazy" />
                <img className="blog-photo-main" src={currentPhoto.src} alt={currentPhoto.alt} loading="lazy" />
                <button type="button" className="blog-photo-control previous" onClick={() => showPhoto(-1)} aria-label={`Previous ${event} photo`}>&#8249;</button>
                <button type="button" className="blog-photo-control next" onClick={() => showPhoto(1)} aria-label={`Next ${event} photo`}>&#8250;</button>
            </div>
            <figcaption className="blog-photo-caption">
                <span>{currentPhoto.caption}</span>
                <span>{currentIndex + 1} / {photos.length}</span>
            </figcaption>
            <div className="blog-photo-thumbnails" aria-label={`${event} photos`}>
                {photos.map((photo, index) => (
                    <button
                        type="button"
                        key={photo.src}
                        className={index === currentIndex ? "active" : ""}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Show photo ${index + 1}: ${photo.caption}`}
                        aria-pressed={index === currentIndex}
                    >
                        <img src={photo.src} alt="" loading="lazy" />
                    </button>
                ))}
            </div>
        </figure>
    );
}

export default function Blog() {
    return (
        <section id="blog" className="blog">
            <h2>Blog</h2>
            <p className="blog-intro">Notes from hackathons, events, and the things I learn while building.</p>

            <div className="blog-list">
                {[...posts]
                    .sort((a, b) => b.date.localeCompare(a.date))
                    .map((post) => (
                        <article className="blog-card" key={post.url}>
                            <div className="blog-meta">
                                <span className="blog-event">{post.event}</span>
                                <time dateTime={post.date}>Posted {dateFormatter.format(new Date(`${post.date}T12:00:00Z`))}</time>
                            </div>
                            <h3>{post.title}</h3>
                            <p>{post.summary}</p>
                            <BlogGallery event={post.event} photos={post.photos} />
                            <div className="blog-learning">
                                <h4>What I learned</h4>
                                <p>{post.learned}</p>
                            </div>
                            <a href={post.url} target="_blank" rel="noopener noreferrer" aria-label={`Read my ${post.event} post on LinkedIn`}>
                                Read the original post <span aria-hidden="true">↗</span>
                            </a>
                        </article>
                    ))}
            </div>
        </section>
    );
}
