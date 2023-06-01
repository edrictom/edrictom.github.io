import Tile from '../Tile/tile';
import { CodeBracketIcon, BriefcaseIcon, Cog8ToothIcon } from '@heroicons/react/24/outline';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal } from '@fortawesome/free-solid-svg-icons';

const tileData = [
    {
        title: 'About Me',
        image: <UserCircleIcon className="h-10 w-10 md:h-12 md:w-12 lg:h-16 lg:w-16 2xl:h-24 2xl:w-24 text-black self-center" />,
        link: '/aboutme',
        height: "h-24 md:h-32 lg:h-44 2xl:h-96",
        width: "w-24 md:w-32 lg:w-44 2xl:w-96 2xl:m-6 md:mb-6",
        key: 1
    },
    {
        title: 'Skills',
        image: <CodeBracketIcon className="h-10 w-10 md:h-12 md:w-12 lg:h-16 lg:w-16 2xl:h-24 2xl:w-24 text-black self-center" />,
        link: '/skills',
        height: "h-24 md:h-32 lg:h-44 2xl:h-64",
        width: "w-24 md:w-32 lg:w-44 2xl:w-64 md:mb-6",
        key: 2
    },
    { 
        title: 'Experience', 
        image: <BriefcaseIcon className="h-10 w-10 md:h-12 md:w-12 lg:h-16 lg:w-16 2xl:h-24 2xl:w-24 text-black self-center" />, 
        link: '/experience',
        height: "h-24 md:h-32 lg:h-44 2xl:h-64",
        width: "w-24 md:w-32 lg:w-44 2xl:w-64 md:mb-6",
        key: 3 
    },
    { 
        title: 'Medals', 
        image: <FontAwesomeIcon 
                    icon={faMedal} 
                    className="text-4xl lg:text-5xl 2xl:text-7xl text-black self-center" 
                />, 
        link: '/medals',
        height: "h-24 md:h-32 lg:h-44 2xl:h-64",
        width: "w-24 md:w-32 lg:w-44 2xl:w-64 md:mb-6",
        key: 4 
    },
    { 
        title: 'Settings', 
        image: <Cog8ToothIcon className="h-10 w-10 md:h-12 md:w-12 lg:h-16 lg:w-16 2xl:h-24 2xl:w-24 text-black self-center" />,
        link: '/settings',
        height: "h-24 md:h-32 lg:h-44 2xl:h-64",
        width: "w-24 md:w-32 lg:w-44 2xl:w-64 md:mb-6",
        key: 5 
    }
];

export default function TileList() {
    return (
        <ul className="grid grid-cols-2 max-md:gap-2 md:flex md:flex-row md:flex-wrap md:max-xl:gap-x-2 xl:space-x-3 justify-evenly items-end">
            { tileData.map(tile => {
                return <Tile height={ tile.height } width={ tile.width } title={ tile.title } image={ tile.image } link={ tile.link } key={ tile.key } />
            }) }
        </ul>
    );
}