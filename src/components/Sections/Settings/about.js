import { FaHeart } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import Image from 'next/image';

export default function About() {
    return (
        <section className="flex flex-col justify-center items-center">
            <h1 className="px-12 py-16 text-2xl lg:px-32 lg:pt-20 whitespace-nowrap lg:text-4xl text-center font-extrabold lg:self-start">
                About this App
            </h1>
            <div className="mt-10 pb-20 w-4/5 flex flex-col items-center">
                <Image
                    src="/Images/IMG_3417.jpg"
                    alt="Portrait of Edric"
                    className="rounded-full w-96 h-96 object-cover object-top-right"
                    height={ 0 }
                    width={ 0 }
                    quality={ 100 }
                    sizes="100vw"
                    priority
                />
                <h2 className="text-3xl font-bold py-8">
                    Portfolio
                </h2>
                <h3 className="px-5 py-3 bg-blue-600 rounded-2xl">
                    v.0.1.0
                </h3>
                <p className="text-xl my-4 w-3/5 text-center font-semibold">
                    This website was built with Next.js, styled with Tailwind CSS, and deployed using Vercel.
                </p>
                <footer className="pt-2 flex justify-center">
                    Made with
                    <IconContext.Provider value={ { className: "text-red-600 mt-1 mx-2" } }>
                        <FaHeart />
                    </IconContext.Provider>
                    by Edric Tom, July 2023
                </footer>
            </div>
        </section>
    );
}