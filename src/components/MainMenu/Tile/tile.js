import Image from 'next/image';
import Link from 'next/link';

export default function Tile({ height, width, title, image, link }) {
    return (
        <Link href={ link }>
            <div className={ "group relative shadow-2xl bg-gray-500 " + height + " " + width + " flex flex-col justify-center items-center rounded-lg hover:ring-4 hover:ring-blue-500 transition-colors duration-75" }>
                <div className="flex-1 flex">
                    { image }
                </div>
                <p className="hidden absolute bottom-0 group-hover:block w-full p-4 font-semibold text-lg bg-gradient-to-t from-gray-600 rounded-b-lg">
                    { title }
                </p>
            </div>
        </Link>
    );
}