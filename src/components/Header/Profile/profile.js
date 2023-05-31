import { UserCircleIcon } from '@heroicons/react/24/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal } from '@fortawesome/free-solid-svg-icons';

export default function Profile() {
    return (
        <div className="flex flex-row flex-1">
            <UserCircleIcon className="h-10 w-10 md:h-11 md:w-11 xl:h-12 xl:w-12 text-white mt-4 xl:mt-3" />
            <div className="flex flex-col px-2 pt-4 md:px-4 md:pt-4">
                <p className="whitespace-nowrap">Edric Tom</p>
                <div className="flex flex-row">
                    <FontAwesomeIcon icon={ faMedal } className="text-sm xl:text-base mt-0.5 text-white mr-1" />
                    <span className="text-sm xl:text-base">94930</span>
                </div>
            </div>
        </div>
    );
}