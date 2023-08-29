'use client';

import Header from '@/components/Header/header';
import MainMenu from '@/components/MainMenu/mainMenu';
import SecondaryMenu from '@/components/SecondaryMenu/secondaryMenu';
import { IconContext } from 'react-icons';
import { HiChevronDoubleDown } from 'react-icons/hi';

export default function Home() {
  return (
    <main className="min-w-full min-h-screen active-bg bg-fixed bg-cover bg-no-repeat bg-center">
      <section className="w-full h-screen backdrop-blur-xl flex flex-col justify-center items-start">
        <div className="ml-24 justify-self-center mt-auto">
          <h1 className="font-extrabold text-6xl pb-5">
            Hi,
          </h1>
          <h1 className="font-extrabold text-6xl">
            I&apos;m Edric Tom!
          </h1>
        </div>
        <IconContext.Provider value={ { className: "w-12 h-12 mb-5 text-white justify-self-end self-center mt-auto animate-bounce" } }>
          <HiChevronDoubleDown />
        </IconContext.Provider>
      </section>
      <nav id="home" className="w-full h-screen backdrop-blur-sm flex flex-col items-center">
        <Header />
        <MainMenu />
        <SecondaryMenu />
      </nav>
    </main>
  )
}
