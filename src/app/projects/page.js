// Tell Next.js to use the client side interactivity
'use client';

// Import components
import SidebarNav from '@/components/Utilities/sidebarNav';
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
    }

    // Render component
    return (
        <main className="flex min-w-screen max-w-full min-h-screen max-h-full flex-col md:flex-row">
            <SidebarNav navName={navName} navObject={nav} handleNavClick={handleNavClick} currentSection={currentSection} />
            <section className="min-w-screen max-w-full min-h-screen max-h-full flex-grow">
                <section className="flex min-h-screen min-w-screen flex-col">
                    <h3 className="self-center text-4xl font-semibold mt-16 py-16 px-10 rounded-xl bg-blue-800">
                        Coming soon...
                    </h3>
                </section>
            </section>
        </main>
    );
}