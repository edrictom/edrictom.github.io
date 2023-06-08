import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faJsSquare, faSwift, faPython, faJava } from "@fortawesome/free-brands-svg-icons";

export default function Languages() {
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
        </div>
    );
}