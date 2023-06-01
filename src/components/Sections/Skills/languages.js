import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faJsSquare, faSwift, faPython, faJava } from "@fortawesome/free-brands-svg-icons";
import { Tooltip } from 'flowbite-react';

export default function Languages() {
    return (
        <div className="flex flex-col items-start">
            <h1 className="hidden md:block self-center p-28 text-4xl font-extrabold">
                Languages
            </h1>
            <ul className="grid grid-cols-2 place-items-center max-md:gap-4 md:flex md:flex-row md:justify-evenly w-full md:flex-wrap">
                <li>
                    <Tooltip content="HTML5" placement="bottom">
                        <FontAwesomeIcon
                            icon={ faHtml5 }
                            size="6x"
                            className="text-gray-200 self-center"
                        />
                    </Tooltip>
                </li>
                <li>
                    <Tooltip content="CSS 3" placement="bottom">
                        <FontAwesomeIcon
                            icon={ faCss3 }
                            size="6x"
                            className="text-gray-200 self-center"
                        />
                    </Tooltip>
                </li>
                <li>
                    <Tooltip content="JavaScript" placement="bottom">
                        <FontAwesomeIcon
                            icon={ faJsSquare }
                            size="6x"
                            className="text-gray-200 self-center"
                        />
                    </Tooltip>
                </li>
                <li>
                    <Tooltip content="Swift" placement="bottom">
                        <FontAwesomeIcon
                            icon={ faSwift }
                            size="6x"
                            className="text-gray-200 self-center"
                        />
                    </Tooltip>
                </li>
                <li>
                    <Tooltip content="Python" placement="bottom">
                        <FontAwesomeIcon
                            icon={ faPython }
                            size="6x"
                            className="text-gray-200 self-center"
                        />
                    </Tooltip>
                </li>
                <li>
                    <Tooltip content="Java" placement="bottom">
                        <FontAwesomeIcon
                            icon={ faJava }
                            size="6x"
                            className="text-gray-200 self-center"
                        />
                    </Tooltip>
                </li>
            </ul>
        </div>
    );
}