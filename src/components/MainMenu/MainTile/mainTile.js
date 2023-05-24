import Tile from '../Tile/tile';
import { UserCircleIcon } from '@heroicons/react/24/solid';

const mainTileData = {
    title: 'About Me',
    image: <UserCircleIcon className="h-24 w-24 text-black self-center" />,
    link: '/aboutme',
    key: 1
};

export default function MainTile() {
    return (
        <Tile height="h-96" width="w-96" title={ mainTileData.title } image={ mainTileData.image } link={ mainTileData.link } key={ mainTileData.key } />
    );
}