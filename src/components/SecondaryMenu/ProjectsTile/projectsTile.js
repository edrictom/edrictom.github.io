import SocialsTile from '../SocialsTile/socialsTile';

const projectsTileData = {
    title: 'My projects & websites',
    image: '/Icons/window.svg',
    link: '/projects',
    id: 0
};

export default function ProjectsTile() {
    return (
        <SocialsTile 
            height="h-64"
            width="w-96"
            title={ projectsTileData.title }
            image={ projectsTileData.image }
            link={ projectsTileData.link }
        />
    );
}