import MainTile from './MainTile/mainTile';
import TileList from './TileList/tileList';

export default function MainMenu() {
    return (
        <div className="flex lg:flex-row sm:flex-col m-8 max-w-full">
            <div className="m-6">
                <MainTile />
            </div>
            <div className="mb-6 flex flex-col justify-end">
                <TileList />
            </div>
        </div>
    );
}