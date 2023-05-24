import Tile from '../Tile/tile';
import { CodeBracketIcon, BriefcaseIcon, TrophyIcon, Cog8ToothIcon } from '@heroicons/react/24/outline';

const tileData = [
    {
        title: 'Skills',
        image: <CodeBracketIcon className="h-24 w-24 text-black self-center" />,
        link: '/skills',
        key: 2
    },
    { 
        title: 'Experience', 
        image: <BriefcaseIcon className="h-24 w-24 text-black self-center" />, 
        link: '/experience',
        key: 3 
    },
    { 
        title: 'Achievements', 
        image: <TrophyIcon className="h-24 w-24 text-black self-center" />, 
        link: '/achievements',
        key: 4 
    },
    { 
        title: 'Settings', 
        image: <Cog8ToothIcon className="h-24 w-24 text-black self-center" />,
        link: '/settings',
        key: 5 
    }
];

export default function TileList() {
    return (
        <ul className="flex lg:flex-row sm:flex-col md:flex-wrap space-x-3 justify-evenly">
            { tileData.map(tile => {
                return <Tile height="h-64" width="w-64" title={ tile.title } image={ tile.image } link={ tile.link } key={ tile.key } />
            }) }
        </ul>
    );
}