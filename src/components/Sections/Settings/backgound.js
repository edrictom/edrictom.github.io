import Image from 'next/image';

export default function Background() {
    const wallpapers = {
        "Ocean": "url('/Images/patrick-perkins-xUTwSZqqFxQ-unsplash.jpg')",
        "Forest": "url('/Images/jay-mantri-TFyi0QOx08c-unsplash.jpg')",
        "Wood": "url('/Images/keith-misner-h0Vxgz5tyXA-unsplash.jpg')",
        "Skyline": "url('/Images/jesse-collins-TjwEbrhFVGE-unsplash.jpg')"
    }

    const handleBGClick = event => {
        const newWallpaper = wallpapers[event.target.id];
        let root  = document.documentElement;
        root.style.backgroundImage = newWallpaper;
    };

    return (
        <section className="flex flex-col justify-center items-center">
            <h1 className="px-32 pt-20 mb-14 text-4xl font-extrabold self-start">
                Change Home Background
            </h1>
            <div className="flex flex-row flex-wrap ml-32 items-start justify-evenly w-9/12">
                <div className="flex flex-col my-6">
                    <button id="Ocean" onClick={handleBGClick} className="relative hover-outline-color rounded-lg outline outline-4 outline-transparent hover:shadow-2xl transition-[outline-color] ease-in-out duration-100">
                        <Image
                            src='/Images/patrick-perkins-xUTwSZqqFxQ-unsplash.jpg'
                            width={350}
                            height={250}
                            className="rounded-lg"
                            alt="Background image of an ocean"
                        />
                    </button>
                </div>
                <div className="flex flex-col my-6">
                    <button id="Forest" onClick={handleBGClick} className="relative hover-outline-color rounded-lg outline outline-4 outline-transparent hover:shadow-2xl transition-[outline-color] ease-in-out duration-100">
                        <Image
                            src='/Images/jay-mantri-TFyi0QOx08c-unsplash.jpg'
                            width={350}
                            height={250}
                            className="rounded-lg"
                            alt="Background image of a forest"
                        />
                    </button>
                </div>
                <div className="flex flex-col my-6">
                    <button id="Wood" onClick={handleBGClick} className="relative hover-outline-color rounded-lg outline outline-4 outline-transparent hover:shadow-2xl transition-[outline-color] ease-in-out duration-100">
                        <Image
                            src='/Images/keith-misner-h0Vxgz5tyXA-unsplash.jpg'
                            width={350}
                            height={250}
                            className="rounded-lg"
                            alt="Background image of a wooden floor"
                        />
                    </button>
                </div>
                <div className="flex flex-col my-6">
                    <button id="Skyline" onClick={handleBGClick} className="relative hover-outline-color rounded-lg outline outline-4 outline-transparent hover:shadow-2xl transition-[outline-color] ease-in-out duration-100">
                        <Image
                            src='/Images/jesse-collins-TjwEbrhFVGE-unsplash.jpg'
                            width={350}
                            height={250}
                            className="rounded-lg"
                            alt="Background image of the San Francisco skyline"
                        />
                    </button>
                </div>
            </div>
        </section>
    );
}