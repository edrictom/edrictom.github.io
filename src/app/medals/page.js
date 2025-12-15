'use client';

// Import components
import Profile from '@/components/Header/profile';
import { IconContext } from 'react-icons';
import { HiX } from 'react-icons/hi';
import Link from 'next/link';

export default function Medals() {
    // Render component
    return (
        <main className="flex min-h-screen max-w-screen flex-col">
            <div className="flex flex-row max-lg:pr-4 self-start py-6">
                <div className="grow">
                    <Link href="/#home">
                        <IconContext.Provider value={{ className: "w-12 h-12 m-5 mr-7 text-white hover:text-gray-400 transition-colors duration-75 ease-in-out" }}>
                            <HiX />
                        </IconContext.Provider>
                    </Link>
                </div>
                <div className="max-lg:pt-2 pt-1.5">
                    <Profile />
                </div>
            </div>
            <h1 className="py-16 text-7xl font-extrabold self-center">
                Medals
            </h1>
            <h3 className="self-center text-4xl font-semibold mt-16 py-16 px-10 rounded-xl bg-blue-800">
                Coming soon...
            </h3>
        </main>
    );
}