import Image from 'next/image';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import { FireIcon } from '@heroicons/react/20/solid'

export default function Profile() {
    return (
        <div className="flex flex-row flex-1">
            <UserCircleIcon className="h-12 w-12 text-white mt-3" />
            <div className="flex flex-col p-4">
                <p className="whitespace-nowrap">Edric Tom</p>
                <div className="flex flex-row">
                    <FireIcon className="h-6 w-6 text-white mr-1" />
                    <span>54250</span>
                </div>
            </div>
        </div>
    );
}