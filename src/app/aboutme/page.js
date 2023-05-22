// Tell Next.js to use the client side interactivity
'use client';

// Import components
import Profile from '@/components/Header/Profile/profile';
import MainProfile from '@/components/Sections/AboutMe/MainProfile/mainProfile';
import Hobbies from '@/components/Sections/AboutMe/Hobbies/hobbies';
import Contact from '@/components/Sections/AboutMe/Contact/contact';
import { useState } from 'react';
import Link from 'next/link';

// Object containing navigation titles and their appropriate React components for rendering
const nav = {
    "Profile": <MainProfile />,
    "Hobbies": <Hobbies />,
    "Contact": <Contact />
};

// Render page
export default function AboutMe() {
    const [currentSection, setSection] = useState("Profile");
    const navTitles = Object.keys(nav);

    // Render different sections of the 'About Me' page based on which nav button is clicked
    const handleNavClick = event => {
        setSection(event.target.innerHTML);
    }

    return (
        <main className="flex min-h-screen flex-row">
            <nav className="flex-shrink-0 flex flex-col justify-start border-r-2 border-black pr-24 pt-8 ml-8 my-0">
                <div className="flex flex-row">
                    <Link href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-12 h-12 m-5 mr-7 stroke-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </Link>
                    <Profile />
                </div>
                <section className="mt-36 flex flex-col">
                    { navTitles.map(section => {
                        return (
                            <button key={navTitles.indexOf(nav)} onClick={handleNavClick} className="text-center text-xl my-3 py-6 font-bold rounded-lg hover:ring hover:ring-blue-500 hover:shadow-2xl focus:bg-sky-600 active:bg-sky-800 transition-colors duration-75">
                                { section }
                            </button>
                        );
                    }) }
                </section>
            </nav>
            <section className="min-w-screen flex-grow">
                {nav[currentSection]}
            </section>
        </main>
    );
}