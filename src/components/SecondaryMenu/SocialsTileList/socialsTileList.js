import SocialsTile from '../SocialsTile/socialsTile';

const socialsData = [
    {
        title: 'GitHub',
        image: '/Icons/github.svg',
        link: 'https://www.github.com/edrictom',
        key: 2
    },
    {
        title: 'LinkedIn',
        image: '/Icons/linkedin.svg',
        link: 'https://www.linkedin.com/in/edric-tom-98ba34178',
        key: 3
    },
    {
        title: 'Instagram',
        image: 'Icons/instagram.svg',
        link: 'https://www.instagram.com/el_edric',
        key: 4
    }
];

export default function SocialTileList() {
    return (
        <ul className="flex lg:flex-row sm:flex-col md:flex-wrap space-x-3 justify-evenly">
            { socialsData.map(tile => {
                return <SocialsTile
                    height="h-48"
                    width="w-80"
                    title={ tile.title }
                    image={ tile.image }
                    link={ tile.link }
                    key={ tile.key }
                />
            }) }
        </ul>
    );
}