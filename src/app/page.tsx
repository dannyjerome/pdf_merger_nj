
import Features from "@/app/components/Features";
import Hero from "@/app/components/Hero";
import Footer from "@/app/components/Footer";
import SignUp from "@/app/components/SignUp";

export default function Home() {
  return (

    <main>
      <div className=" flex flex-col items-center justify-center">
        <Hero />
        <Features />
        <SignUp />
        <Footer />
      </div>
    </main>
  );
}
