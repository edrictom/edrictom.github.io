// TODO: Add tooltips to each icon.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import { IconContext } from 'react-icons';
import { SiAtom, SiTailwindcss, SiNextdotjs, SiVisualstudiocode, SiXcode } from 'react-icons/si';
import { faHtml5, faCss3, faJsSquare, faSwift, faPython, faJava } from "@fortawesome/free-brands-svg-icons";

export default function Skills() {
    return (
        <div className="flex flex-col items-start">
            <h1 className="hidden md:block px-32 pt-20 text-4xl font-extrabold self-start">
                Languages
            </h1>
            <ul className="grid grid-cols-2 place-items-center max-md:gap-4 md:flex md:flex-row md:justify-evenly w-full md:flex-wrap md:py-20">
                <li>
                    <FontAwesomeIcon
                        icon={ faHtml5 }
                        size="6x"
                        className="text-gray-200 self-center"
                    />
                </li>
                <li>
                    <FontAwesomeIcon
                        icon={ faCss3 }
                        size="6x"
                        className="text-gray-200 self-center"
                    />
                </li>
                <li>
                    <FontAwesomeIcon
                        icon={ faJsSquare }
                        size="6x"
                        className="text-gray-200 self-center"
                    />
                </li>
                <li>
                    <FontAwesomeIcon
                        icon={ faSwift }
                        size="6x"
                        className="text-gray-200 self-center"
                    />
                </li>
                <li>
                    <FontAwesomeIcon
                        icon={ faPython }
                        size="6x"
                        className="text-gray-200 self-center"
                    />
                </li>
                <li>
                    <FontAwesomeIcon
                        icon={ faJava }
                        size="6x"
                        className="text-gray-200 self-center"
                    />
                </li>
            </ul>
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