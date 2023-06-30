import { AcademicCapIcon, GlobeAltIcon } from '@heroicons/react/20/solid';

export default function Educational() {
    return (
        <div className="flex flex-col h-full">
            <h1 className="text-xl xl:text-4xl font-bold xl:py-24 xl:pl-32 xl:self-start self-center py-6 justify-self-start">
                Educational
            </h1>
            <ol className="relative border-l border-gray-400 self-center w-9/12 xl:w-3/5 mb-9">
                <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 bg-sky-600">
                        <GlobeAltIcon className="w-4 h-4 text-blue-100" />
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-white">Front-End Engineer Certification - Codecademy 
                        <span className="text-sm font-medium mr-2 px-2.5 py-0.5 rounded bg-blue-900 text-blue-300 ml-3">
                            Latest
                        </span>
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400">In Progress -&gt; Expected July 2023</time>
                    <p className="mb-4 text-base font-normal text-gray-200 mr-0 ">
                        Online coding certification program to learn the languages and technologies to become a successful Front-End Engineer. In this course, I have learned the basics of UI and UX design
                        including wireframing and color theory, built fast dynamic sites using JavaScript, React, and Redux, and have completed portfolio projects to show what I've learned.
                    </p>
                </li>
                <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 bg-sky-600">
                        <AcademicCapIcon className="w-4 h-4 text-blue-100" />
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-white">Computer Science B.S. - University of California, Davis</h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400">June 2020</time>
                    <p className="mb-4 text-base font-normal text-gray-200 mr-0 ">
                        Completed Bachelor's Degree program with a GPA of 3.1 to learn the basics of Computer Science, including object-oriented programming, data structures, computer security,
                        web development, networks, and algorithm design. Learned how to write clean code, write detailed documentation, and collaborate with others using
                        Git and GitHub.
                    </p>
                </li>
                <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 bg-sky-600">
                        <AcademicCapIcon className="w-4 h-4 text-blue-100" />
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-white">High School Diploma - Hercules High School</h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400">June 2016</time>
                    <p className="mb-4 text-base font-normal text-gray-200 mr-0 ">
                        Standard high school degree. Rank #3 in the Class of 2016 with a GPA of 4.43 and various awards and certificates. 
                    </p>
                </li>
            </ol>
        </div>
    );
}