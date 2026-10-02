import { useEffect, useState } from "react";

const Timer = () => {
    const [running, setRunning] = useState(false);

    useEffect(() => {
        if (!running) {
            return;
        }

        const timer = setInterval(() => {
            console.log("Hello");
        }, 1000);

        return () => {
            console.log("Cleaning up...");
            clearInterval(timer);
        };

    }, [running]);

    return (
        <div>
            <button onClick={() => setRunning(true)}>
                Start
            </button>

            <button onClick={() => setRunning(false)}>
                Stop
            </button>

            <h2>
                Timer: {running ? "Running " : "Stopped "}
            </h2>
        </div>
    );
};

export default Timer;