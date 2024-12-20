import Link from 'next/link';

export default function SocialsTile({ title, altTitle, style, image, link }) {
    return (
        <Link href={ link }>
            <div className={ "relative shadow-2xl bg-gray-500 " + style + " flex flex-col justify-center items-center rounded-md outline outline-4 outline-transparent hover-outline-color transition-all duration-75" }>
                <div className="flex-1 flex pb-2 md:p-0">
                    { image }
                </div>
                <p className="hidden lg:block absolute bottom-0 w-full pb-2 md:p-3 xl:p-4 font-semibold text-black text-xs lg:text-sm 2xl:text-lg text-center md:text-left">
                    { title }
                </p>
                <p className="lg:hidden absolute bottom-0 w-full pb-2 md:p-3 xl:p-4 font-semibold text-black text-xs lg:text-sm 2xl:text-lg text-center md:text-left">
                    { altTitle ? altTitle : title }
                </p>
            </div>
        </Link>
    );
}