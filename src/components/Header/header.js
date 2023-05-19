import Profile from './Profile/profile';
import Time from './updateTime';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="flex flex-row w-full">
            <Profile />
            <div className="flex flex-row p-1">
                <Image
                    src="/Icons/battery.svg"
                    alt="Static Battery Icon"
                    className="dark:invert"
                    width={45}
                    height={24}
                    priority
                />
                <Time />
            </div>
        </header>
    );
}