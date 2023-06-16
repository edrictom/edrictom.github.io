'use client';
import Image from 'next/image';

export default function MainProfile() {
    return (
        <article className="flex flex-col justify-center items-center">
            <h1 className="px-32 pt-20 text-4xl font-bold self-start">
                Hi, I'm Edric!
            </h1>
            <div className="carousel w-4/5 h-auto">
                <div id="slide1" className="carousel-item relative w-4/5">
                    <Image
                        src="/Images/IMG_7235.jpg"
                        alt="Picture of Edric in front of a tree"
                        height="0"
                        width="0"
                        sizes="100vw"
                        className="rounded-lg m-10 w-2/5 h-auto"
                        priority
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
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