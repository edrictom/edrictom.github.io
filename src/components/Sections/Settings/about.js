import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function About() {
    return (
        <section className="flex flex-col justify-center items-center">
            <h1 className="px-12 pt-16 text-2xl lg:px-32 lg:pt-20 whitespace-nowrap lg:text-4xl text-center font-extrabold lg:self-start">
                About this App
            </h1>
            <div className="mt-10 pb-20 w-4/5 flex flex-col items-center">
                <div className="h-24 w-24 p-36 m-12 rounded-full bg-emerald-500">

                </div>
                <h2 className="text-3xl font-bold py-8">
                    Portfolio
                </h2>
                <h3 className="px-5 py-3 bg-blue-600 rounded-2xl">
                    v.0.1.0
                </h3>
                <p className="text-xl my-4 w-3/5 text-center font-semibold">
                    This website was built with Next.js, styled with Tailwind CSS, and deployed using Vercel.
                </p>
                <footer className="pt-2">
                    Made with <span><FontAwesomeIcon icon={faHeart} className="text-red-700" /> </span> by Edric Tom, July 2023
                </footer>
            </div>
        </section>
    );
}