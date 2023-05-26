import { HomeIcon, ComputerDesktopIcon, ServerStackIcon } from '@heroicons/react/20/solid';

export default function Professional() {
    return (
        <div className="flex flex-col justify-center items-center h-full">
            <h1 className="text-4xl font-bold py-24 pl-32 self-start">
                Professional Experience
            </h1>
            <ol className="relative border-l border-gray-400 self-center w-3/5 mb-9">
                <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 bg-sky-600">
                        <HomeIcon className="w-4 h-4 text-blue-100" />
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
                        Web Developer
                        <span className="text-sm font-medium mr-2 px-2.5 py-0.5 rounded bg-blue-900 text-blue-300 ml-3">
                            Latest
                        </span>
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400"><b>Freelance</b> // January 2023 -&gt; Current</time>
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
                        Business Technical Support Analyst - UC Davis College of Biological Sciences Dean's Office
                        <span className="text-sm font-medium mr-2 px-2.5 py-0.5 rounded bg-blue-900 text-blue-300 ml-3">
                            Latest
                        </span>
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400"><b>Full-Time</b> // February 2021 -&gt; Current</time>
                    <p className="mb-4 text-base font-normal text-gray-200 mr-0 ">
                        Oversee general IT service desk and desktop support tasks for the Dean's Office, Department of Evolution and Ecology, and the administrative staff of
                        the departments of Neurobiology, Physiology, and Behavior and Plant Biology. <br/><br/> Primary job functions include managing college-wide active directory 
                        users, groups, and mailing lists through Windows Server 2016, imaging and deploying new hardware to users including network devices, troubleshooting 
                        hardware and software issues and problems both in-person and remotely using BeyondTrust Remote Support and Microsoft Remote Desktop, and
                        handling multiple concurrent IT projects that involve close collaboration with coworkers, clients, and vendors. <br/><br/>Accomplishments in this role involve
                        reducing the team's ticket queue by over 75%, upgrading legacy hardware (i.e. printers, desktops, monitors) to modern standards, implementing hardware
                        standards for Evolution and Ecology, and reduce computer imaging time by over 60%.
                    </p>
                </li>
                <li className="mb-8 ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 bg-sky-600">
                        <ComputerDesktopIcon className="w-4 h-4 text-blue-100" />
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-white">Lead IT Support Specialist - UC Davis School of Education</h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400"><b>Part-Time</b> // February 2017 -&gt; October 2020</time>
                    <p className="mb-4 text-base font-normal text-gray-200 mr-0 ">
                        Lead a team of other students to perform desktop support and service desk functions for the School of Education IT department. <br/><br/>
                        Primary role functions include troubleshooting technical issues both in-person and remotely using BeyondTrust Remote Support and Apple Remote Desktop to
                        enterprise-level software and hardware, imaging and deploying new hardware to active directory users through the use of Jamf and Microsoft
                        Deployment Studio, and managing audio/video equipment in classrooms and conference rooms. <br/><br/> Smaller tasks involved keeping an up-to-date inventory of
                        school-owned assets, updating internal Confluence knowledge base articles for team reference, and assisting team management with long-term projects.
                    </p>
                </li>
            </ol>
        </div>
    );
}