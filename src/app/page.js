import Header from '@/components/Header/header';
import MainMenu from '@/components/MainMenu/mainMenu';
import SecondaryMenu from '@/components/SecondaryMenu/secondaryMenu';

export default function Home() {
  return (
    <main className="flex min-w-screen max-w-full min-h-screen max-h-full flex-col items-center">
      <Header />
      <MainMenu />
      <SecondaryMenu />
    </main>
  )
}
