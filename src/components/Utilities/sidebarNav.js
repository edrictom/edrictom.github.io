import Profile from '@/components/Header/Profile/profile';
import { XMarkIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function SidebarNav({ navName, navObject, handleNavClick, currentSection }) {
    const navTitles = Object.keys(navObject);

    return (
        <nav aria-label="Sidebar navigation" className="flex-shrink-0 flex flex-col justify-start border-r-2 border-black pr-24 ml-8 my-0">
            <div className="sticky top-0 pt-8">
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
                                onClick={ handleNavClick }
                                className={section === currentSection ? "selected-section hover-outline-color" : "button-primary hover-outline-color"}
                            >
                                { section }
                            </button>
                        );
                    }) }
                </div>
            </div>
        </nav>
    );
}