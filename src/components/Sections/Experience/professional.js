import { HomeIcon, ComputerDesktopIcon, ServerStackIcon } from '@heroicons/react/20/solid';

export default function Professional() {
    return (
        <div className="flex flex-col justify-center items-center h-full">
            <ol className="relative border-l border-gray-400 self-center w-3/5">
                <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 bg-sky-600">
                        <HomeIcon className="w-4 h-4 text-blue-100" />
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
                        Freelance Web Developer
                        <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
                            Latest
                        </span>
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400">January 2023 -&gt; Current</time>
                    <p className="mb-4 text-base font-normal text-gray-200 mr-0 ">
                        Meet with clients to discuss their website needs. Build, style, and deploy production websites using Vercel, Next.js, React,
                        Node.js, Tailwind CSS, Express, and more.
                    </p>
                </li>
                <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 bg-sky-600">
                        <ServerStackIcon className="w-4 h-4 text-blue-100" />
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
                        Business Technical Support Analyst II - UC Davis College of Biological Sciences Dean's Office
                        <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
                            Latest
                        </span>
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400">February 2021 -&gt; Current</time>
                    <p className="mb-4 text-base font-normal text-gray-200 mr-0 ">
                        Run all IT services from ticket management to computer builds to active directory user management.
                    </p>
                </li>
                <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 bg-sky-600">
                        <ComputerDesktopIcon className="w-4 h-4 text-blue-100" />
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-white">IT Support Specialist - UC Davis School of Education</h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400">February 2017 -&gt; October 2020</time>
                    <p className="mb-4 text-base font-normal text-gray-200 mr-0 ">
                    Work with a team of other students to manage IT service desk for the School of Education IT department. 
                    </p>
                </li>
            </ol>
        </div>
    );
}