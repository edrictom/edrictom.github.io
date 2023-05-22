import Header from '@/components/Header/header';
import MainMenu from '@/components/MainMenu/mainMenu';
import SecondaryMenu from '@/components/SecondaryMenu/secondaryMenu';

export default function Home() {
  return (
    <main className="flex min-h-screen max-h-full flex-col items-center p-8">
      <Header />
      <MainMenu />
      <SecondaryMenu />
    </main>
  )
}
