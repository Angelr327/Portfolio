import { useEffect, useState } from "react";

const bubbles = [
    "bubble bubble-1",
    "bubble bubble-2",
    "bubble bubble-3",
    "bubble bubble-4",
    "bubble bubble-5",
    "bubble bubble-6",
    "bubble bubble-7",
    "bubble bubble-8",
];

export default function AnimatedBackground() {

    const [mousePosition, setMousePosition] = useState({
        x: "50%",
        y: "50%",
    });

    useEffect(() => {

        const handleMouseMove = (event) => {
            setMousePosition({
                x: `${event.clientX}px`,
                y: `${event.clientY}px`,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };

    }, []);

    return (
        <div
            className="animated-background"
            style={{
                "--mouse-x": mousePosition.x,
                "--mouse-y": mousePosition.y,
            }}
        >
            <div className="mouse-glow"></div>

            <div className="line-pattern"></div>

            {bubbles.map((bubble, index) => (
                <div
                    key={index}
                    className={bubble}
                ></div>
            ))}
        </div>
    );
}