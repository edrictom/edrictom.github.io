// Tell Next.js to use the client side interactivity
'use client';

// Import components
import SidebarNav from '@/components/Utilities/sidebarNav';
import Educational from '@/components/Sections/Experience/educational';
import Professional from '@/components/Sections/Experience/professional';
import { useState } from 'react';

// Object containing navigation titles and their appropriate React components for rendering
const nav = {
    "Professional": <Professional />,
    "Educational": <Educational />
};

export default function Experience() {
    const [currentSection, setSection] = useState("Professional");

    // Render different sections of the 'Experience' page based on which nav button is clicked,
    // Pass click event handler into <SidebarNav /> child component
    const handleNavClick = event => {
        setSection(event.target.innerHTML);
    }

    // Render component
    return (
        <main className="flex min-h-screen flex-row">
            <SidebarNav navObject={nav} handleNavClick={handleNavClick} />
            <section className="min-w-screen flex-grow">
                {nav[currentSection]}
            </section>
        </main>
    );
}