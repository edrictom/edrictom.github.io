import Tile from '../Tile/tile';
import { CodeBracketIcon, BriefcaseIcon, TrophyIcon, Cog8ToothIcon } from '@heroicons/react/24/outline';
import { UserCircleIcon } from '@heroicons/react/24/solid';

const tileData = [
    {
        title: 'About Me',
        image: <UserCircleIcon className="h-12 w-12 xl:h-24 xl:w-24 text-black self-center" />,
        link: '/aboutme',
        height: "h-24 xl:h-96",
        width: "w-24 xl:w-96",
        key: 1
    },
    {
        title: 'Skills',
        image: <CodeBracketIcon className="h-12 w-12 xl:h-24 xl:w-24 text-black self-center" />,
        link: '/skills',
        height: "h-24 xl:h-64 self-end",
        width: "w-24 xl:w-64",
        key: 2
    },
    { 
        title: 'Experience', 
        image: <BriefcaseIcon className="h-12 w-12 xl:h-24 xl:w-24 text-black self-center" />, 
        link: '/experience',
        height: "h-24 xl:h-64",
        width: "w-24 xl:w-64",
        key: 3 
    },
    { 
        title: 'Achievements', 
        image: <TrophyIcon className="h-12 w-12 xl:h-24 xl:w-24 text-black self-center" />, 
        link: '/achievements',
        height: "h-24 xl:h-64",
        width: "w-24 xl:w-64",
        key: 4 
    },
    { 
        title: 'Settings', 
        image: <Cog8ToothIcon className="h-12 w-12 xl:h-24 xl:w-24 text-black self-center" />,
        link: '/settings',
        height: "h-24 xl:h-64",
        width: "w-24 xl:w-64",
        key: 5 
    }
];

export default function TileList() {
    return (
        <ul className="flex flex-row flex-wrap md:flex-wrap space-x-3 justify-evenly">
            { tileData.map(tile => {
                return <Tile height={ tile.height } width={ tile.width } title={ tile.title } image={ tile.image } link={ tile.link } key={ tile.key } />
            }) }
        </ul>
    );
}