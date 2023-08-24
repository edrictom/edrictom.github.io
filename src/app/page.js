'use client';

import Header from '@/components/Header/header';
import MainMenu from '@/components/MainMenu/mainMenu';
import SecondaryMenu from '@/components/SecondaryMenu/secondaryMenu';
import { IconContext } from 'react-icons';
import { HiChevronDoubleDown } from 'react-icons/hi';

export default function Home() {
  return (
    <main className="min-w-screen max-w-full min-h-screen max-h-full bg-[url('/Images/patrick-perkins-xUTwSZqqFxQ-unsplash.jpg')] bg-cover bg-no-repeat bg-center">
      <section className="w-screen h-screen backdrop-blur-xl flex flex-col pl-16 justify-center items-start">
        <h1 className="font-extrabold text-6xl pb-5 mt-auto">
          Hi,
        </h1>
        <h1 className="font-extrabold text-6xl">
          I'm Edric Tom!
        </h1>
        <IconContext.Provider value={ { className: "w-12 h-12 m-5 mr-7 text-white justify-self-end self-center mt-auto animate-bounce" } }>
          <HiChevronDoubleDown />
        </IconContext.Provider>
      </section>
      <nav id="home" className="w-screen h-screen backdrop-blur-sm flex flex-col items-center">
        <Header />
        <MainMenu />
        <SecondaryMenu />
      </nav>
    </main>
  )
}
