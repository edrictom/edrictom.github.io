import Profile from './profile';
import Time from './time';
import { Battery50Icon } from '@heroicons/react/24/solid';

export default function Header() {
    return (
        <header className="flex flex-row w-full max-w-full px-9 pt-9">
            <Profile />
            <div className="flex flex-row">
                <Battery50Icon className="hidden md:block mt-3.5 h-9 w-9 xl:h-12 xl:w-12 md:mt-5 xl:mt-4 text-white" />
                <Time />
            </div>
        </header>
    );
}