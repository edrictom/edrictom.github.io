import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import { IconContext } from 'react-icons';
import { SiAtom, SiTailwindcss, SiNextdotjs, SiVisualstudiocode, SiXcode } from 'react-icons/si';

export default function DevTools() {
    return (
        <div className="flex flex-col items-start">
            <h1 className="p-24 text-4xl font-extrabold">
                Frameworks
            </h1>
            <IconContext.Provider value={ { className: "w-20 h-20 text-white self-center" } } >
                <ul className="flex flex-row justify-evenly w-full">
                    <li className="self-center tooltip tooltip-bottom tooltip-primary" data-tip="Tailwind CSS">
                        <SiTailwindcss />
                    </li>
                    <li className="self-center tooltip tooltip-bottom tooltip-primary" data-tip="Next.js">
                        <SiNextdotjs />
                    </li>
                </ul>
                <h1 className="p-24 text-4xl font-extrabold">
                    Libraries
                </h1>
                <ul className="flex flex-row justify-evenly w-full">
                    <li className="self-center tooltip tooltip-bottom tooltip-primary" data-tip="React">
                        <FontAwesomeIcon
                            icon={ faReact }
                            size="5x"
                        />
                    </li>
                    <li className="self-center tooltip tooltip-bottom tooltip-primary" data-tip="Font Awesome">
                        <FontAwesomeIcon
                            icon={ faFontAwesome }
                            size="5x"
                            className="text-white self-center"
                        />
                    </li>
                </ul>
                <h1 className="p-24 text-4xl font-extrabold">
                    Code Editors and IDEs
                </h1>
                <ul className="flex flex-row justify-evenly w-full">
                    <li className="self-center tooltip tooltip-bottom tooltip-primary" data-tip="Xcode">
                        <SiXcode />
                    </li>
                    <li className="self-center tooltip tooltip-bottom tooltip-primary" data-tip="Visual Studio Code">
                        <SiVisualstudiocode />
                    </li>
                    <li className="self-center tooltip tooltip-bottom tooltip-primary" data-tip="Atom">
                        <SiAtom />
                    </li>
                </ul>
            </IconContext.Provider>
        </div>
    );
}