import Header from "@/components/header";
import HomePage from "./home/page";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-background selection:bg-primary/30">
      <Header />
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <HomePage />
      </div>
        <Footer/>
    </main>
  );
}
