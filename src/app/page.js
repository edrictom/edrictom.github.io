import Header from '@/components/Header/header';
import MainMenu from '@/components/MainMenu/mainMenu';
import SecondaryMenu from '@/components/SecondaryMenu/secondaryMenu';

export default function Home() {
  return (
    <main className="flex min-w-screen max-w-full min-h-screen max-h-full flex-col items-center bg-[url('/Images/patrick-perkins-xUTwSZqqFxQ-unsplash.jpg')] bg-cover bg-no-repeat bg-center">
      <Header />
      <MainMenu />
      <SecondaryMenu />
    </main>
  )
}
