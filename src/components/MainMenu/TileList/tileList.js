import Tile from '../Tile/tile';
import { UserCircleIcon, EnvelopeIcon, BriefcaseIcon, Cog8ToothIcon } from '@heroicons/react/24/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal } from '@fortawesome/free-solid-svg-icons';

const tileData = [
    {
        title: 'About Me',
        image: <UserCircleIcon className="h-10 w-10 md:h-12 md:w-12 lg:h-16 lg:w-16 2xl:h-24 2xl:w-24 text-black self-center" />,
        link: '/aboutme',
        style: "h-24 md:h-32 lg:h-44 2xl:h-96 w-24 md:w-32 lg:w-44 2xl:w-96 2xl:m-6 md:mb-6",
        key: 1
    },
    { 
        title: 'Experience', 
        image: <BriefcaseIcon className="h-10 w-10 md:h-12 md:w-12 lg:h-16 lg:w-16 2xl:h-24 2xl:w-24 text-black self-center" />, 
        link: '/experience',
        style: "h-24 md:h-32 lg:h-44 2xl:h-64 w-24 md:w-32 lg:w-44 2xl:w-64 md:mb-6",
        key: 2 
    },
    { 
        title: 'Medals', 
        image: <FontAwesomeIcon 
                    icon={faMedal} 
                    className="text-4xl lg:text-5xl 2xl:text-7xl text-black self-center" 
                />, 
        link: '/medals',
        style: "h-24 md:h-32 lg:h-44 2xl:h-64 w-24 md:w-32 lg:w-44 2xl:w-64 md:mb-6",
        key: 3 
    },
    {
        title: 'Contact',
        image: <EnvelopeIcon className="h-10 w-10 md:h-12 md:w-12 lg:h-16 lg:w-16 2xl:h-24 2xl:w-24 text-black self-center" />,
        link: '/contact',
        style: "h-24 md:h-32 lg:h-44 2xl:h-64 w-24 md:w-32 lg:w-44 2xl:w-64 md:mb-6",
        key: 4
    },
    { 
        title: 'Settings', 
        image: <Cog8ToothIcon className="h-10 w-10 md:h-12 md:w-12 lg:h-16 lg:w-16 2xl:h-24 2xl:w-24 text-black self-center" />,
        link: '/settings',
        style: "h-24 md:h-32 lg:h-44 2xl:h-64 w-24 md:w-32 lg:w-44 2xl:w-64 md:mb-6",
        key: 5 
    },
];

export default function TileList() {
    return (
        <ul className="grid grid-cols-2 max-md:gap-2 md:flex md:flex-row md:flex-wrap md:max-xl:gap-x-2 xl:space-x-3 justify-evenly items-end">
            { tileData.map(tile => {
                return <Tile style={ tile.style } title={ tile.title } image={ tile.image } link={ tile.link } key={ tile.key } />
            }) }
        </ul>
    );
}