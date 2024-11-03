import SocialsTile from '../SocialsTile/socialsTile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faYoutube} from '@fortawesome/free-brands-svg-icons';
import { WindowIcon } from '@heroicons/react/24/solid';


const socialsData = [
    {
        title: 'My projects & websites',
        altTitle: 'Projects',
        image: <WindowIcon className="h-10 w-10 lg:h-16 lg:w-16 2xl:h-20 2xl:w-20 text-black self-center" />,
        link: '/projects',
        style: "h-24 md:h-28 lg:h-40 2xl:h-64 w-32 md:w-40 lg:w-60 2xl:w-96 2xl:mr-10 md:mb-6",
        key: 1
    },
    {
        title: 'GitHub',
        image: <FontAwesomeIcon
                icon={faGithub}
                className="text-black text-4xl lg:text-5xl 2xl:text-6xl self-center"
                />,
        link: 'https://www.github.com/edrictom',
        style: "h-24 md:h-28 lg:h-40 2xl:h-48 w-32 md:w-40 lg:w-60 2xl:w-80 md:mb-6",
        key: 2
    },
    {
        title: 'LinkedIn',
        image: <FontAwesomeIcon
                icon={faLinkedin}
                className="text-black text-4xl lg:text-5xl 2xl:text-6xl self-center"
                />,
        link: 'https://www.linkedin.com/in/edric-tom-98ba34178',
        style: "h-24 md:h-28 lg:h-40 2xl:h-48 w-32 md:w-40 lg:w-60 2xl:w-80 md:mb-6",
        key: 3
    },
    {
        title: 'YouTube',
        image: <FontAwesomeIcon
                icon={faYoutube}
                className="text-black text-4xl lg:text-5xl 2xl:text-6xl self-center"
                />,
        link: 'https://youtube.com/@EdricTom',
        style: "h-24 md:h-28 lg:h-40 2xl:h-48 w-32 md:w-40 lg:w-60 2xl:w-80 md:mb-6",
        key: 4
    }
];

export default function SocialTileList() {
    return (
        <ul className="grid grid-cols-2 max-md:gap-4 md:flex md:flex-row md:flex-wrap md:max-xl:gap-x-2 xl:space-x-3 justify-evenly items-end">
            { socialsData.map(tile => {
                return <SocialsTile
                    title={ tile.title }
                    altTitle={ tile.altTitle }
                    image={ tile.image }
                    style= { tile.style }
                    link={ tile.link }
                    key={ tile.key }
                />
            }) }
        </ul>
    );
}