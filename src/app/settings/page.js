// Tell Next.js to use the client side interactivity
'use client';

// Import components
import SidebarNav from '@/components/Utilities/sidebarNav';
import ThemePicker from '@/components/Sections/Settings/theme';
import About from '@/components/Sections/Settings/about';
import Background from '../../components/Sections/Settings/backgound';
import { useState } from 'react';

// Object containing navigation titles and their appropriate React components for rendering
const nav = {
    "Background": <Background />,
    "Color Theme": <ThemePicker />,
    "About": <About />
};

export default function Settings() {
    const [currentSection, setSection] = useState("Background");
    const navName = "settingsNav";

    // Render different sections of the 'Settings' page based on which nav button is clicked,
    // Pass click event handler into <SidebarNav /> child component
    const handleNavClick = event => {
        setSection(event.target.innerHTML);
    }

    // Render component
    return (
        <main className="flex min-w-screen max-w-full min-h-screen max-h-full flex-col md:flex-row">
            <SidebarNav navName={navName} navObject={nav} handleNavClick={handleNavClick} currentSection={currentSection} />
            <section className="min-w-screen max-w-full min-h-screen max-h-full flex-grow">
                {nav[currentSection]}
            </section>
        </main>
    );
}