import MainTile from './MainTile/mainTile';
import TileList from './TileList/tileList';

export default function MainMenu() {
    return (
        <div className="flex flex-row m-8">
            <div className="m-6">
                <MainTile />
            </div>
            <div className="mb-6 flex flex-col justify-end">
                <TileList />
            </div>
        </div>
    );
}