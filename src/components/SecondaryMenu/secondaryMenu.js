import SocialsTileList from './SocialsTileList/socialsTileList';
import ProjectsTile from './ProjectsTile/projectsTile';

export default function SecondaryMenu() {
    return (
        <div className="flex flex-row mr-9">
            <div className="mr-10">
                <ProjectsTile />
            </div>
            <div className="flex flex-col justify-end">
                <SocialsTileList />
            </div>
        </div>
    );
}