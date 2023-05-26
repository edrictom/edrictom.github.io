import Profile from '@/components/Header/Profile/profile';
import { XMarkIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function SidebarNav({navName, navObject, handleNavClick }) {
    const navTitles = Object.keys(navObject);

    return (
        <nav className="flex-shrink-0 flex flex-col justify-start border-r-2 border-black pr-24 pt-8 ml-8 my-0">
            <div className="flex flex-row">
                <Link href="/">
                    <XMarkIcon className="w-12 h-12 m-5 mr-7 text-white" />
                </Link>
                <Profile />
            </div>
            <div id={ navName } className="mt-36 flex flex-col">
                { navTitles.map(section => {
                    return (
                        <button 
                            key={ section }
                            aria-selected={ section === navTitles[0] ? "true" : "false" }
                            onClick={ handleNavClick }
                            className="button-primary aria-selected:bg-sky-600"
                        >
                            { section }
                        </button>
                    );
                }) }
            </div>
        </nav>
    );
}