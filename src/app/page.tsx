import Features from "@/app/components/Features";
import Hero from "@/app/components/Hero";
import SignUp from "./components/SignUp";

export default function Home() {
  return (
    <div className=" flex flex-col items-center justify-center">
      <Hero />
      <Features />
      <SignUp />
    </div>
  );
}
