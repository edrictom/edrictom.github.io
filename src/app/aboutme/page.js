import Profile from '@/components/Header/Profile/profile';
import Link from 'next/link';

const navSections = ["Profile", "Hobbies", "Contact"];
let currentSelection = "Profile";

export default function AboutMe() {
    return (
        <main className="flex min-h-screen flex-row m-8">
            <nav className="flex flex-col justify-start border-r-2 border-black pr-24">
                <div className="flex flex-row">
                    <Link href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-12 h-12 m-5 mr-7 stroke-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </Link>
                    <Profile />
                </div>
                <section className="mt-36 flex flex-col">
                    { navSections.map(section => {
                        return (
                            <button className="text-center text-xl my-3 py-6 font-bold rounded-lg hover:ring hover:ring-blue-500">
                                { section }
                            </button>
                        );
                    }) }
                </section>
            </nav>
        </main>
    );
}