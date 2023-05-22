// Tell Next.js to use the client side interactivity
'use client';

// Import components
import Profile from '@/components/Header/Profile/profile';
import Link from 'next/link';

// Render different sections of the 'About Me' page based on which nav button is clicked
const navSections = ["Languages", "Frameworks & Tools", "Apps", "Soft Skills"];
let currentSelection = "Profile";

const navClickHandler = (event) => {
    if (event.target.innerHTML === navSections[0] && currentSelection !== navSections[0]) {
        currentSelection = navSections[0];
    } else if (event.target.innerHTML === navSections[1] && currentSelection !== navSections[1]) {
        currentSelection = navSections[1];
    } else if (event.target.innerHTML === navSections[2] && currentSelection !== navSections[2]) {
        currentSelection = navSections[2];
    }

    changeSection(currentSelection);
};

const changeSection = (sectionName) => {
    /*
    if (sectionName === 'Profile') {
        return <MainProfile />;
    } else if (sectionName === 'Hobbies') {
        return <Hobbies />;
    } else if (sectionName === 'Contact') {
        return <Contact />;
    }
    */
}

// Render page
export default function Skills() {
    return (
        <main className="flex min-h-screen flex-row">
            <nav className="flex flex-col justify-start border-r-2 border-black pr-24 pt-8 ml-8 my-0">
                <div className="flex flex-row">
                    <Link href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-12 h-12 m-5 mr-7 stroke-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </Link>
                    <Profile />
                </div>
                <section className="mt-36 flex flex-col">
                    { navSections.map(section => {
                        return (
                            <button key={navSections.indexOf(section)} onClick={navClickHandler} className="text-center text-xl my-3 py-6 font-bold rounded-lg hover:ring hover:ring-blue-500 hover:shadow-2xl focus:bg-sky-600 active:bg-sky-800 transition-colors duration-75">
                                { section }
                            </button>
                        );
                    }) }
                </section>
            </nav>
            <section id="mainContent" className="min-w-screen flex-grow">
            </section>
        </main>
    );
}