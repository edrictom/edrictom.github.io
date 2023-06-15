import Profile from '@/components/Header/profile';
import { IconContext } from 'react-icons';
import { HiX } from 'react-icons/hi';
import Link from 'next/link';

export default function SidebarNav({ navName, navObject, handleNavClick, currentSection }) {
    const navTitles = Object.keys(navObject);

    return (
        <nav className="flex flex-col md:flex-shrink-0 justify-start md:border-r-2 border-gray-200 md:pr-24 md:ml-8 my-0">
            <div className="sticky top-0 pt-4 md:pt-8">
                <div className="flex flex-row max-md:pr-4">
                    <div className="flex-grow">
                        <Link href="/">
                            <IconContext.Provider value={{className: "w-12 h-12 m-5 mr-7 text-white hover:shadow-2xl hover:text-gray-400 transition-colors duration-75 ease-in-out"}}>
                                <HiX />
                            </IconContext.Provider>
                        </Link>
                    </div>
                    <div className="max-md:pt-2 pt-1.5">
                        <Profile />
                    </div>
                </div>
                <div id={ navName } className="my-8 md:mt-36 flex md:flex-col max-md:justify-around">
                    { navTitles.map(section => {
                        return (
                            <button
                                key={ section }
                                onClick={ handleNavClick }
                                className={ section === currentSection ? "selected-section hover-outline-color max-md:p-3" : "button-primary hover-outline-color max-md:p-3" }
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