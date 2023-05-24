import Profile from './Profile/profile';
import Time from './updateTime';
import { Battery50Icon } from '@heroicons/react/24/solid';

export default function Header() {
    return (
        <header className="flex flex-row w-full max-w-full">
            <Profile />
            <div className="flex flex-row p-1">
                <Battery50Icon className="invisible lg:visible h-12 w-12 mt-2 text-white" />
                <Time />
            </div>
        </header>
    );
}