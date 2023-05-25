
export default function DevTools() {
    return (
        <div className="flex flex-col items-start">
            <h1 className="p-24 text-4xl font-extrabold">
                Frameworks
            </h1>
            <ul className="flex flex-row justify-evenly w-full">
                <li>React</li>
                <li>Tailwind CSS</li>
                <li>Express</li>
                <li>Next.js</li>
            </ul>
            <h1 className="p-24 text-4xl font-extrabold">
                Libraries
            </h1>
            <h1 className="p-24 text-4xl font-extrabold">
                IDEs
            </h1>
            <ul className="flex flex-row justify-evenly w-full">
                <li>Xcode</li>
                <li>Visual Studio Code</li>
            </ul>
        </div>
    );
}