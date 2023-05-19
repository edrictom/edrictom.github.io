import Header from '../../components/Header/header';
import Image from 'next/image';

export default function AboutMe() {
    return (
        <main className="flex min-h-screen flex-col items-center p-8">
            <div className="flex flex-row justify-start w-full">
                <Image
                    src="/Icons/exit.svg"
                    alt="X icon to go back home"
                    className="dark:invert mr-6"
                    width={ 50 }
                    height={ 24 }
                />
                <Header />
            </div>
        </main>
    );
}