// Import components
import Profile from '@/components/Header/profile';
import { XMarkIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function Projects() {
    // Render component
    return (
        <main className="flex min-h-screen min-w-screen flex-col">
            <div className="flex flex-row pt-10">
                <Link href="/">
                    <XMarkIcon className="w-12 h-12 m-5 mr-7 text-white" />
                </Link>
                <Profile />
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