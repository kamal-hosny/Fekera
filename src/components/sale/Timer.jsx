import React, { useEffect, useState } from "react";

const Timer = ({ duration }) => {
    const [time, setTime] = useState(duration);

    useEffect(() => {
        const timer = setTimeout(() => {
            setTime(time - 1000);
        }, 1000);

        return () => clearTimeout(timer);
    }, [time]);

    const getFormattedTime = (milliseconds) => {
        let total_seconds = parseInt(Math.floor(milliseconds / 1000));
        let total_minutes = parseInt(Math.floor(total_seconds / 60));
        let total_hours = parseInt(Math.floor(total_minutes / 60));
        let days = parseInt(Math.floor(total_hours / 24));

        let seconds = parseInt(total_seconds % 60);
        let minutes = parseInt(total_minutes % 60);
        let hours = parseInt(total_hours % 24);

        return {
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };
    };

    const formattedTime = getFormattedTime(time);

    return (
        <div className="relative flex gap-4  md:py-4">
            <div className="flex flex-col items-center md:text-xl font-semibold">
                <span>{formattedTime.days}</span>
                <span>Days</span>
            </div>
            :
            <div className="flex flex-col items-center md:text-xl font-semibold">
                <span>{formattedTime.hours}</span>
                <span>Hours</span>
            </div>
            :
            <div className="flex flex-col items-center md:text-xl font-semibold">
                <span>{formattedTime.minutes}</span>
                <span>Minutes</span>
            </div>
            :
            <div className="flex flex-col items-center md:text-xl font-semibold">
                <span>{formattedTime.seconds}</span>
                <span>Seconds</span>
            </div>

        </div>
    );
};

export default Timer;
