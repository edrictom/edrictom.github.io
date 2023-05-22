import SocialsTile from '../SocialsTile/socialsTile';

const projectsTileData = {
    title: 'My projects & websites',
    image: '/Icons/window.svg',
    link: '/projects',
    key: 1
};

export default function ProjectsTile() {
    return (
        <SocialsTile 
            height="h-64"
            width="w-96"
            title={ projectsTileData.title }
            image={ projectsTileData.image }
            link={ projectsTileData.link }
            key={ projectsTileData.key }
        />
    );
}