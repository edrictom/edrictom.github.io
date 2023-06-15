'use client';
import Image from 'next/image';

export default function MainProfile() {
    return (
        <article className="flex flex-col justify-center items-center">
            <h1 className="px-32 pt-20 text-4xl font-bold self-start">
                Hi, I'm Edric!
            </h1>
            <Image
                src="/Images/IMG_7235.jpg"
                alt="Picture of Edric in front of a tree"
                height="0"
                width="0"
                sizes="100vw"
                className="rounded-lg m-10 w-2/5 h-auto"
                priority
            />
            <p className="text-white text-left text-lg w-3/5">
                Born in 1998 and based out of the San Francisco Bay Area, I am a front-end focused web developer. I'm passionate about beautifully designed,
                modern user interfaces that are intuitively implemented and do not sacrifice functionality.
                <br /><br />
                I am currently working as an IT Support Lead for the Dean's Office of the UC Davis College of Biological Sciences in Davis, CA. However, I am
                looking to work as a front-end engineer or a web developer in order to advance my career goals and further improve my skills.
            </p>
        </article>
    );
}