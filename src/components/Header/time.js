"use client";

import { useState, useEffect } from 'react';

export default function Time() {
    // Set both date and setDate to the current time
    let [date, setDate] = useState(new Date());

    // Using the Effect Hook, the date state is updated every 1000ms
    useEffect(() => {
        let timer = setInterval(() => setDate(new Date()), 1000);

        // Clean up any memory leaks
        return function cleanUp() {
            clearInterval(timer);
        }
    });

    // Render React component
    return (
        <p className="pt-6 md:py-7 md:px-5 text-md xl:text-lg">{date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</p>
    );
};