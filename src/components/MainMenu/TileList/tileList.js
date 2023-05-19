import Tile from '../Tile/tile';

const tileData = [
    {
        title: 'Skills',
        image: '/Icons/code-bracket.svg',
        link: '/skills',
        id: 2
    },
    { 
        title: 'Work Experience', 
        image: '/Icons/briefcase.svg', 
        link: '/workexperience',
        id: 3 
    },
    { 
        title: 'Achievements', 
        image: '/Icons/trophy.svg', 
        link: '/achievements',
        id: 4 
    },
    { 
        title: 'Settings', 
        image: '/Icons/gear.svg',
        link: '/settings',
        id: 5 
    }
];

export default function TileList() {
    return (
        <ul className="flex flex-row space-x-3 justify-evenly">
            { tileData.map(tile => {
                return <Tile height="h-64" width="w-64" title={ tile.title } image={ tile.image } link={ tile.link }/>
            }) }
        </ul>
    );
}