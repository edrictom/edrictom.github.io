import SocialsTile from '../SocialsTile/socialsTile';
import Image from 'next/image';

const socialsData = [
    {
        title: 'GitHub',
        image: <Image
            src={ '/Icons/github.svg' }
            alt={ "GitHub icon" }
            width={ 60 }
            height={ 40 }
            priority
        />,
        link: 'https://www.github.com/edrictom',
        key: 2
    },
    {
        title: 'LinkedIn',
        image: <Image
            src={ '/Icons/linkedin.svg' }
            alt={ "LinkedIn icon" }
            width={ 60 }
            height={ 40 }
            priority
        />,
        link: 'https://www.linkedin.com/in/edric-tom-98ba34178',
        key: 3
    },
    {
        title: 'Instagram',
        image: <Image
            src={ '/Icons/instagram.svg' }
            alt={ " Instagram icon" }
            width={ 60 }
            height={ 40 }
            priority
        />,
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