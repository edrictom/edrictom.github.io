import SocialsTile from '../SocialsTile/socialsTile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faYoutube} from '@fortawesome/free-brands-svg-icons';

const socialsData = [
    {
        title: 'GitHub',
        image: <FontAwesomeIcon
                icon={faGithub}
                size="4x"
                className="text-black self-center"
                />,
        link: 'https://www.github.com/edrictom',
        key: 2
    },
    {
        title: 'LinkedIn',
        image: <FontAwesomeIcon
                icon={faLinkedin}
                size="4x"
                className="text-black self-center"
                />,
        link: 'https://www.linkedin.com/in/edric-tom-98ba34178',
        key: 3
    },
    {
        title: 'YouTube',
        image: <FontAwesomeIcon
                icon={faYoutube}
                size="4x"
                className="text-black self-center"
                />,
        link: 'https://youtube.com/@EdricTom',
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