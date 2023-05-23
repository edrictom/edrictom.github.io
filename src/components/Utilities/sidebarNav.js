import Profile from '@/components/Header/Profile/profile';
import Link from 'next/link';

export default function SidebarNav({ navObject, handleNavClick }) {
    const navTitles = Object.keys(navObject);

    return (
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
                        <button key={ navTitles.indexOf(navObject) }
                            onClick={ handleNavClick }
                            className="text-center text-xl my-3 py-6 font-bold rounded-lg hover:ring hover:ring-blue-500 hover:shadow-2xl focus:bg-sky-600 active:bg-sky-800 transition-colors duration-75">
                            { section }
                        </button>
                    );
                }) }
            </section>
        </nav>
    );
}