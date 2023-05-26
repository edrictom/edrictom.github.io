 
 export default function ThemePicker() {
    const colors = {
        "Blue": [],
        "Red": [],
        "Green": [],
        "Purple": [],
        "Yellow": [],
        "Gray": []
    }

    const handleColorClick = event => {
        const newColor = color[event.target.innerHTML];
        let root  = document.documentElement;
        root.style.setProperty('--hover-rgb', newColor["buttonMain"]);
        root.style.setProperty('--button-focus-rgb', newColor["buttonFocus"]);
        root.style.setProperty('--button-active-rgb', newColor["buttonActive"]);
        root.style.setProperty('--tile-rgb', newColor["menuTiles"])
    };

    return (
        <section className="flex flex-col items-start">
            <h1 className="px-32 pt-20 text-4xl font-extrabold">
                Color Theme
            </h1>
            <p className="py-20 px-32 text-lg w-7/12">
                Customize the theme of my entire portfolio! Pick a color and watch the colors of the buttons and icons change
                throughout the entire portfolio.
            </p>
            <div className="flex flex-row flex-wrap ml-32 itmes-start justify-around w-9/12">
                <div className="flex flex-col">
                    <button className="bg-sky-600 hover:ring-blue-500 active:bg-sky-800 p-14 button-primary">
                        Blue
                    </button>
                </div>
                <div className="flex flex-col">
                    <button className="bg-rose-600 hover:ring-red-500 active:bg-rose-800 p-14 button-primary">
                        Red
                    </button>
                </div>
                <div className="flex flex-col">
                    <button className="bg-emerald-600 hover:ring-green-500 active:bg-emerald-800 p-14 button-primary">
                        Green
                    </button>
                </div>
                <div className="flex flex-col">
                    <button className="bg-violet-600 hover:ring-purple-500 active:bg-violet-800 p-14 button-primary">
                        Purple
                    </button>
                </div>
                <div className="flex flex-col">
                    <button className="bg-amber-400 hover:ring-yellow-600 active:bg-amber-600 p-14 button-primary text-gray-800">
                        Yellow
                    </button>
                </div>
                <div className="flex flex-col">
                    <button className="bg-zinc-600 hover:ring-gray-600 active:bg-zinc-800 p-14 button-primary">
                        Gray
                    </button>
                </div>
            </div>
        </section>
    );
 }