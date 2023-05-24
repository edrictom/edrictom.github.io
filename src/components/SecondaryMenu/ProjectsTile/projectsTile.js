import SocialsTile from '../SocialsTile/socialsTile';
import { WindowIcon } from '@heroicons/react/24/outline';

const projectsTileData = {
    title: 'My projects & websites',
    image: <WindowIcon className="h-20 w-20 text-black self-center" />,
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