import Image from 'next/image';

export default function MainProfile() {
    return (
        <article className="flex flex-col justify-center items-center">
            <Image
                src="/Images/IMG_7235.jpg"
                alt="Picture of Edric in front of a tree"
                className="rounded-lg m-10"
                width={600}
                height={400}
                priority
            />
            <h2 className="text-3xl font-bold pb-7">
                Edric Tom
            </h2>
            <p className="text-white text-center w-3/5">
                Hi! My name is Edric Tom. I'm an aspiring front-end developer with a focus in UI/UX design. I currently work as an IT Support Lead for the UC Davis
                College of Biological Sciences Dean's Office, but my passion is to be a developer. I love building apps and websites from scratch and I hope to do that
                for a large tech company someday!
            </p>
        </article>
    );
}