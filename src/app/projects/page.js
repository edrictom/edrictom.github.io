// Tell Next.js to use the client side interactivity
'use client';

// Import components
import SidebarNav from '@/components/Utilities/sidebarNav';
import { BookOpenIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

// Object containing navigation titles and their appropriate React components for rendering
const nav = {
    "All Projects": <div>All Projects</div>,
    "Personal": <div>Personal</div>,
    "Educational": <div>Educational</div>
};

export default function Projects() {
    const [currentSection, setSection] = useState("All Projects");
    const navName = "projectsNav";

    // Render different sections of the 'Projects' page based on which nav button is clicked,
    // Pass click event handler into <SidebarNav /> child component
    const handleNavClick = event => {
        setSection(event.target.innerHTML);
        const buttons = document.getElementById(navName).children;
        for (let i = 0; i < buttons.length; ++i) {
            let button = buttons[i];
            if (button !== event.target) {
                button.ariaSelected = "false";
            }
        }
    }

    // Render component
    return (
        <main className="flex min-h-screen flex-row">
            <SidebarNav navName={navName} navObject={nav} handleNavClick={handleNavClick} />
            <section className="min-w-screen flex-grow">
                {nav[currentSection]}
            </section>
        </main>
    );
}