// Tell Next.js to use the client side interactivity
'use client';

// Import components
import SidebarNav from '@/components/Utilities/sidebarNav';
import Languages from '@/components/Sections/Skills/languages';
import DevTools from '@/components/Sections/Skills/devtools';
import Apps from '@/components/Sections/Skills/apps';
import { useState } from 'react';

// Object containing navigation titles and their appropriate React components for rendering
const nav = {
    "Languages": <Languages />,
    "Dev Tools": <DevTools />,
    "Apps": <Apps />
};

export default function Skills() {
    const [currentSection, setSection] = useState("Languages");
    const navName = "skillsNav";

    // Render different sections of the 'Skills' page based on which nav button is clicked,
    // Pass click event handler into <SidebarNav /> child component
    const handleNavClick = event => {
        setSection(event.target.innerHTML);
    }

    // Render component
    return (
        <main className="flex min-h-screen flex-row">
            <SidebarNav navName={navName} navObject={nav} handleNavClick={handleNavClick} currentSection={currentSection} />
            <section className="min-w-screen flex-grow">
                {nav[currentSection]}
            </section>
        </main>
    );
}