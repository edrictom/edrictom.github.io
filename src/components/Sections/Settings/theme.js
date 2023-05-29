 
 export default function ThemePicker() {
    const colors = {
        "Blue": {
            buttonHover: "59 130 246",
            buttonFocus: "2 132 199",
            buttonActive: "7 89 133",
            buttonText: "255 255 255"
        },
        "Red": {
            buttonHover: "239 68 68",
            buttonFocus: "255 29 72",
            buttonActive: "159 18 57",
            buttonText: "255 255 255"
        },
        "Green": {
            buttonHover: "34 197 94",
            buttonFocus: "5 150 105",
            buttonActive: "6 95 70",
            buttonText: "255 255 255"
        },
        "Purple": {
            buttonHover: "168 85 247",
            buttonFocus: "124 58 237",
            buttonActive: "91 33 182",
            buttonText: "255 255 255"
        },
        "Yellow": {
            buttonHover: "202 138 4",
            buttonFocus: "251 191 36",
            buttonActive: "217 119 6",
            buttonText: "31 41 55"
        },
        "Gray": {
            buttonHover: "75 85 99",
            buttonFocus: "82 82 91",
            buttonActive: "39 39 42",
            buttonText: "255 255 255"
        }
    }

    const handleColorClick = event => {
        const newColor = colors[event.target.innerHTML];
        let root  = document.documentElement;
        root.style.setProperty('--hover-rgb', newColor["buttonHover"]);
        root.style.setProperty('--button-focus-rgb', newColor["buttonFocus"]);
        root.style.setProperty('--button-active-rgb', newColor["buttonActive"]);
        root.style.setProperty('--button-text-rgb', newColor["buttonText"]);
    };

    return (
        <section className="flex flex-col items-start">
            <h1 className="px-32 pt-20 text-4xl font-extrabold">
                Color Theme
            </h1>
            <p className="py-20 px-32 text-lg w-9/12">
                Customize the theme of my entire portfolio! Pick a color and watch the colors of the buttons and icons change
                throughout the entire portfolio.
            </p>
            <div className="flex flex-row flex-wrap ml-32 itmes-start justify-around w-9/12">
                <div className="flex flex-col">
                    <button onClick={handleColorClick} className="bg-sky-600 outline outline-4 outline-transparent hover:outline-blue-500 active:bg-sky-800 text-center text-xl my-3 px-12 py-6 font-bold rounded-lg transition-all duration-75">
                        Blue
                    </button>
                </div>
                <div className="flex flex-col">
                    <button onClick={handleColorClick} className="bg-rose-600 outline outline-4 outline-transparent hover:outline-red-500 active:bg-rose-800 ring-transparent text-center text-xl my-3 px-12 py-6 font-bold rounded-lg transition-all duration-75">
                        Red
                    </button>
                </div>
                <div className="flex flex-col">
                    <button onClick={handleColorClick} className="bg-emerald-600 outline outline-4 outline-transparent hover:outline-green-500 active:bg-emerald-800 ring-transparent text-center text-xl my-3 px-12 py-6 font-bold rounded-lg transition-all duration-75">
                        Green
                    </button>
                </div>
                <div className="flex flex-col">
                    <button onClick={handleColorClick} className="bg-violet-600 outline outline-4 outline-transparent hover:outline-purple-500 active:bg-violet-800 ring-transparent text-center text-xl my-3 px-12 py-6 font-bold rounded-lg transition-all duration-75">
                        Purple
                    </button>
                </div>
                <div className="flex flex-col">
                    <button onClick={handleColorClick} className="bg-amber-400 outline outline-4 outline-transparent hover:outline-yellow-600 active:bg-amber-600 ring-transparent text-center text-xl my-3 px-12 py-6 font-bold rounded-lg text-gray-800 transition-all duration-75">
                        Yellow
                    </button>
                </div>
                <div className="flex flex-col">
                    <button onClick={handleColorClick} className="bg-zinc-600 outline outline-4 outline-transparent hover:outline-gray-600 active:bg-zinc-800 ring-transparent text-center text-xl my-3 px-12 py-6 font-bold rounded-lg transition-all duration-75">
                        Gray
                    </button>
                </div>
            </div>
        </section>
    );
 }