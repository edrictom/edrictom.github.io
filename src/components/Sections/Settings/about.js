
export default function About() {
    return (
        <section className="flex flex-col justify-center items-center">
            <h1 className="px-32 pt-20 text-4xl font-extrabold self-start">
                About this App
            </h1>
            <div className="mt-10 w-4/5 flex flex-col items-center">
                <div className="h-24 w-24 p-36 m-12 rounded-full bg-emerald-500">

                </div>
                <h2 className="text-3xl font-bold py-8">
                    Edric Tom's Portfolio
                </h2>
                <p className="text-xl my-4">
                    This website was built with care and love in Hercules, California.
                </p>
                <footer className="pt-2">
                    © Edric Tom, 2023
                </footer>
            </div>
        </section>
    );
}