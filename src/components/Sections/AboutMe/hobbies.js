import Image from 'next/image';

export default function Hobbies() {
    return (
        <div className="flex flex-col py-5 items-start">
            <h1 className="font-bold px-24 py-20 text-4xl">When I am not coding, I am...</h1>
            <h2 className="text-2xl font-semibold pl-24">Gaming</h2>
            <p className="text-white text-center w-3/5 self-center py-5">
                Video games have played an important role in shaping the person I am today. Not only do they provide me a way to explore
                other worlds, past time periods, and dystopian futures, but they have taught me valuable life lessons that I still use to this day and they allow
                me to do things that I most likely wouldn&apos;t be able to do in real life, like drive absurdly expensive sports cars or become a superhero. 
                Although <em>Halo</em> is my favorite video game franchise, you&apos;ll find me playing games from widely different franchises, such as 
                <em> Assassin&apos;s Creed</em>, <em> Call of Duty</em>, <em> Dead Space</em>, <em> Fallout</em>, <em> Forza Horizon</em>, <em> Mortal Kombat</em>, 
                and more. I occasionally upload my gameplay to YouTube so please check out the link on the home page if you&apos;re interested!
            </p>
            <h2 className="text-2xl font-semibold pl-24">Working out</h2>
            <p className="text-white text-center w-3/5 self-center py-5">
                Ever since I was a child, I love physical activity and exercise. From rock climbing to badminton to simply lifting weights and running, being
                physically active is very important to me and I set aside about an hour for 6 days out of the week to workout. My favorite activity above all though is
                rock climbing, specifically bouldering. It is a sport that involves complex problem solving, immense strength, and flexibility, which is right up my alley. Take
                me to a climbing gym and I can guarantee you that I will have an amazing time!
            </p>
            <h2 className="text-2xl font-semibold pl-24">Hanging out with family and friends</h2>
            <p className="text-white text-center w-3/5 self-center py-5">
                As Dominic Toretto says in <b>Furious 7</b>, <em>"Everyone&apos;s looking for a thrill, but what&apos;s real is family."</em> As cheesy as that is, he&apos;s right.
                Family is the most important thing to me, and that doesn&apos;t only include my actual relatives (my parents and my brother), but my closest friends and my girlfriend too. So I make
                it a priority to spend time with each of them as much as I can. You&apos;ll find me visiting beautiful botanical gardens or gem shops with my parents, going out for
                Friday night drinks and food with my closest friends, or going on long trips and seeing the latest movies with my girlfriend.
            </p>
        </div>
    );
}