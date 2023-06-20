import Header from '@/components/Header/header';
import MainMenu from '@/components/MainMenu/mainMenu';
import SecondaryMenu from '@/components/SecondaryMenu/secondaryMenu';

export default function Home() {
  return (
    <main className="min-w-screen max-w-full min-h-screen max-h-full bg-[url('/Images/patrick-perkins-xUTwSZqqFxQ-unsplash.jpg')] bg-cover bg-no-repeat bg-center">
      <div className="w-screen h-screen backdrop-blur-sm flex flex-col items-center">
        <Header />
        <MainMenu />
        <SecondaryMenu />
      </div>
    </main>
  )
}
