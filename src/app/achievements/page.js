// Import components
import Profile from '@/components/Header/Profile/profile';
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
                Achievements
            </h1>
        </main>
    );
}