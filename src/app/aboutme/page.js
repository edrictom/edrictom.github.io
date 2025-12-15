// Tell Next.js to use the client side interactivity
'use client';

// Import components
import SidebarNav from '@/components/Utilities/sidebarNav';
import MainProfile from '@/components/Sections/AboutMe/mainProfile';
import Hobbies from '@/components/Sections/AboutMe/hobbies';
import Skills from '@/components/Sections/AboutMe/skills';
import { useState } from 'react';

// Object containing navigation titles and their appropriate React components for rendering
const nav = {
    "Profile": <MainProfile />,
    "Skills": <Skills />,
    "Hobbies": <Hobbies />
};

export default function AboutMe() {
    const [currentSection, setSection] = useState("Profile");
    const navName = "aboutMeNav";

    // Render different sections of the 'About Me' page based on which nav button is clicked
    // Pass click event handler into <SidebarNav /> child component
    const handleNavClick = event => {
        setSection(event.target.innerHTML);
    }

    // Render component
    return (
        <main className="flex min-w-screen max-w-full min-h-screen max-h-full flex-col md:flex-row">
            <SidebarNav navName={navName} navObject={ nav } handleNavClick={ handleNavClick } currentSection={currentSection}/>
            <section className="max-w-screen min-h-screen max-h-full grow pb-10">
                { nav[currentSection] }
            </section>
        </main>
    );
}