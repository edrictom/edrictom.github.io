import Link from 'next/link';

export default function Tile({ style, title, image, link }) {
    return (
        <Link href={ link }>
            <div className={ "group relative shadow-2xl max-sm:mx-1 bg-gray-500 " + style + " flex flex-col justify-center items-center rounded-lg outline outline-4 outline-transparent hover-outline-color transition-all duration-100" }>
                <div className="flex-1 flex pb-2 md:p-0">
                    { image }
                </div>
                <p className="md:hidden absolute bottom-0 group-hover:block w-full pb-2 md:p-4 font-semibold text-xs md:text-lg text-center md:text-left text-black md:text-white md:bg-gradient-to-t from-gray-600 rounded-b-lg">
                    { title }
                </p>
            </div>
        </Link>
    );
}