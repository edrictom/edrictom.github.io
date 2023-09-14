
export default function Background() {
    const wallpapers = {
        "Ocean": "url('/Images/patrick-perkins-xUTwSZqqFxQ-unsplash.jpg')",
        "Forest": '',
        "Wood": '',
        "Skyline": ''
    }

    const handleClick = event => {
        const newWallpaper = wallpapers[event.target.id];
        let root  = document.documentElement;
        root.style.setProperty('--active-bg', newWallpaper);
    };

    return (
        <section className="flex flex-col justify-center items-center">
            <h1 className="px-32 pt-20 text-4xl font-extrabold self-start">
                Change Home Background
            </h1>
            <p className="py-20 px-32 ml-16 text-lg self-start">
                Change the background of the home page!
            </p>
            <div className="flex flex-row flex-wrap ml-32 itmes-start justify-around w-9/12">
                <div className="flex flex-col">
                    <button id="Ocean" onClick={handleClick} className="bg-sky-600 outline outline-4 outline-transparent hover:outline-blue-500 active:bg-sky-800 text-center text-xl my-3 px-12 py-6 font-bold rounded-lg transition-all duration-75">
                        Ocean
                    </button>
                </div>
                <div className="flex flex-col">
                    <button id="Forest" onClick={handleClick} className="bg-rose-600 outline outline-4 outline-transparent hover:outline-red-500 active:bg-rose-800 ring-transparent text-center text-xl my-3 px-12 py-6 font-bold rounded-lg transition-all duration-75">
                        Forest
                    </button>
                </div>
                <div className="flex flex-col">
                    <button id="Wood" onClick={handleClick} className="bg-emerald-600 outline outline-4 outline-transparent hover:outline-green-500 active:bg-emerald-800 ring-transparent text-center text-xl my-3 px-12 py-6 font-bold rounded-lg transition-all duration-75">
                        Wood
                    </button>
                </div>
                <div className="flex flex-col">
                    <button id="Skyline" onClick={handleClick} className="bg-emerald-600 outline outline-4 outline-transparent hover:outline-green-500 active:bg-emerald-800 ring-transparent text-center text-xl my-3 px-12 py-6 font-bold rounded-lg transition-all duration-75">
                        Wood
                    </button>
                </div>
            </div>
        </section>
    );
}