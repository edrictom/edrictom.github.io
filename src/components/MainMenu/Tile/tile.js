import Image from 'next/image';
import Link from 'next/link';

export default function Tile({ height, width, title, image, link }) {
    return (
        <Link href={ link }>
            <div className={ "group relative shadow-2xl bg-gray-500 " + height + " " + width + " flex flex-col justify-center items-center rounded-lg border-4 border-transparent hover:border-blue-500 transition-all duration-100" }>
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