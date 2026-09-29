const bubbles = Array.from({ length: 8 }, (_, index) => `bubble bubble-${index + 1}`);

export default function AnimatedBackground() {
    return (
        <div className="animated-background" aria-hidden="true">
            {bubbles.map((bubble) => <div key={bubble} className={bubble} />)}
        </div>
    );
}
