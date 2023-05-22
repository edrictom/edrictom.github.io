import Tile from '../Tile/tile';

const tileData = [
    {
        title: 'Skills',
        image: '/Icons/code-bracket.svg',
        link: '/skills',
        key: 2
    },
    { 
        title: 'Work Experience', 
        image: '/Icons/briefcase.svg', 
        link: '/workexperience',
        key: 3 
    },
    { 
        title: 'Achievements', 
        image: '/Icons/trophy.svg', 
        link: '/achievements',
        key: 4 
    },
    { 
        title: 'Settings', 
        image: '/Icons/gear.svg',
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