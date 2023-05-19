import SocialsTile from '../SocialsTile/socialsTile';

const socialsData = [
    {
        title: 'GitHub',
        image: '/Icons/github.svg',
        link: 'https://www.github.com/edrictom',
        id: 1
    },
    {
        title: 'LinkedIn',
        image: '/Icons/linkedin.svg',
        link: 'https://www.linkedin.com/in/edric-tom-98ba34178',
        id: 2
    },
    {
        title: 'Instagram',
        image: 'Icons/instagram.svg',
        link: 'https://www.instagram.com/el_edric',
        id: 3
    }
];

export default function SocialTileList() {
    return (
        <ul className="flex flex-row space-x-3 justify-evenly">
            { socialsData.map(tile => {
                return <SocialsTile
                    height="h-48"
                    width="w-80"
                    title={ tile.title }
                    image={ tile.image }
                    link={ tile.link }
                />
            }) }
        </ul>
    );
}