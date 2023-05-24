import Profile from '@/components/Header/Profile/profile';
import { XMarkIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function SidebarNav({ navObject, handleNavClick }) {
    const navTitles = Object.keys(navObject);

    return (
        <nav className="flex-shrink-0 flex flex-col justify-start border-r-2 border-black pr-24 pt-8 ml-8 my-0">
            <div className="flex flex-row">
                <Link href="/">
                    <XMarkIcon className="w-12 h-12 m-5 mr-7 text-white" />
                </Link>
                <Profile />
            </div>
            <tablist className="mt-36 flex flex-col">
                { navTitles.map(section => {
                    return (
                        <button 
                            key={ section }
                            role="tab"
                            aria-selected={ section === navTitles[0] ? "true" : "false" }
                            onClick={ handleNavClick }
                            className="text-center text-xl my-3 py-6 font-bold rounded-lg hover:ring hover:ring-blue-500 hover:shadow-2xl focus:bg-sky-600 active:bg-sky-800 transition-colors duration-75">
                            { section }
                        </button>
                    );
                }) }
            </tablist>
        </nav>
    );
}