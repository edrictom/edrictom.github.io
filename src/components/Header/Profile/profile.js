import Image from 'next/image';

export default function Profile() {
    return (
        <div className="flex flex-row flex-1">
            <Image
                src="/Icons/defaultuser.svg"
                alt="Default user profile picture"
                className="dark:invert"
                width={ 50 }
                height={ 24 }
                priority
            />
            <div className="flex flex-col p-4">
                <p className="whitespace-nowrap">Edric Tom</p>
                <div className="flex flex-row">
                    <Image
                        src="/Icons/fire.svg"
                        alt="Fire icon"
                        className="dark:invert px-1"
                        width={ 25 }
                        height={ 35 }
                        priority
                    />
                    <span>54250</span>
                </div>
            </div>
        </div>
    );
}