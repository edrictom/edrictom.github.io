'use client';
// TODO: Configure form validation and form submission routes.
// Import components
import Profile from '@/components/Header/profile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { IconContext } from 'react-icons';
import { HiX } from 'react-icons/hi';
import Link from 'next/link';

export default function Contact() {
    // Render component
    return (
        <main className="min-w-screen min-h-screen flex flex-col justify-start items-center ">
            <div className="flex flex-row max-lg:pr-4 self-start pb-2 pt-3 pl-3">
                <div className="flex-grow">
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
            <h2 className="font-bold text-white text-4xl self-center py-3">
                Got an idea for a project? Please let me know!
            </h2>
            <form action="/api/form" method="POST" className="flex flex-col justify-between w-2/5">
                <label htmlFor="fullName" className="font-bold py-2">Full Name:</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 top-1 flex items-center pl-3 pointer-events-none">
                        <FontAwesomeIcon icon={ faUser } className="text-gray-500" />
                    </div>
                    <input
                        required
                        type="text"
                        id="fullName"
                        name="fullName"
                        placeholder={ "Edric Tom" }
                        className="mt-1 block w-full px-10 rounded-md text-black bg-gray-200 border-transparent focus:border-blue-500 focus:bg-gray-100 focus:ring-0 placeholder-gray-400"
                    />
                </div>
                <label htmlFor="email" className="font-bold py-2">Email:</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 bottom-3 flex items-center pl-3 pointer-events-none">
                        <FontAwesomeIcon icon={ faEnvelope } className="text-gray-500" />
                    </div>
                    <input
                        required
                        type="text"
                        id="email"
                        name="email"
                        placeholder="person@example.com"
                        className="mt-1 mb-4 block w-full px-10 rounded-md text-black bg-gray-200 border-transparent focus:border-blue-500 focus:bg-gray-100 focus:ring-0 placeholder-gray-400"
                    />
                </div>
                <textarea
                    required
                    placeholder="What project do you have in mind?"
                    rows="8"
                    className="mt-3 resize-none block w-full rounded-md text-black bg-gray-200 border-transparent focus:border-blue-500 focus:bg-gray-100 focus:ring-0 placeholder-gray-400"></textarea>
                <button type="submit" className="w-2/5 self-center px-6 my-10 text-lg font-bold selected-section hover-outline-color transition-colors duration-75 rounded-xl">
                    Submit
                </button>
            </form>
        </main>
    );
}