import Tile from '../Tile/tile';
import { UserCircleIcon } from '@heroicons/react/24/solid';

const mainTileData = {
    title: 'About Me',
    image: <UserCircleIcon className="h-12 w-12 xl:h-24 xl:w-24 text-black self-center" />,
    link: '/aboutme',
    key: 1
};

export default function MainTile() {
    return (
        <Tile height="h-24 xl:h-96" width="w-24 xl:w-96" title={ mainTileData.title } image={ mainTileData.image } link={ mainTileData.link } />
    );
}