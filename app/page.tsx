import Header from "@/components/header";
import HomePage from "./home/page";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-background grid-pattern relative">
      <Header />
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <HomePage />
      </div>
      <Footer />
    </main>
  );
}
