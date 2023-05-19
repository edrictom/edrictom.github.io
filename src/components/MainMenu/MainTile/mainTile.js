import Tile from '../Tile/tile';

const mainTileData = {
    title: 'About Me',
    image: '/Icons/defaultuser.svg',
    link: '/aboutme',
    id: 1
};

export default function MainTile() {
    return (
        <Tile height="h-96" width="w-96" title={ mainTileData.title } image={ mainTileData.image } link={ mainTileData.link } />
    );
}