import Profile from '@/components/Header/Profile/profile';
import Image from 'next/image';
import Link from 'next/link';

const navSections = ["Profile", "Hobbies", "Contact"];
let currentSelection = "Profile";

export default function AboutMe() {
    return (
        <main className="flex min-h-screen flex-row m-8">
            <nav className="flex flex-col justify-start border-r-2 border-black  pr-24">
                <div className="flex flex-row justify-start w-full">
                    <Link href="/">
                        <Image
                            src="/Icons/exit.svg"
                            alt="X icon to go back home"
                            className="dark:invert m-2 mr-7"
                            width={ 50 }
                            height={ 24 }
                        />
                    </Link>
                    <Profile />
                </div>
                <section className="mt-36 flex flex-col">
                    { navSections.map(section => {
                        return (
                            <button className="text-center text-xl my-3 py-6 font-bold hover:outline hover:outline-black">
                                <input
                                    className="hidden"
                                    type="radio"
                                    id={ section }
                                    name="navSelector"
                                />
                                <label className="" for={section}>{ section }</label>
                            </button>
                        );
                    }) }
                </section>
            </nav>
        </main>
    );
}