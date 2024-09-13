import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const SignUp = () => {
  return (
    <section className="px-4 py-12 md:py-24 lg:py-32  ">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold tacking-tighter sm:text-5xl">
              Start Merging Today
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Join thousands of satisfied users who trust our PDF Merger for
              their document needs.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-4">
            <form className="flex space-x-4">
              <Input type="email" placeholder="Enter your email" />
              <Button type="submit">Sign Up</Button>
            </form>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Start with our free plan. No credit card required.
              <Link className="underline underline-offset-2" href="#">
                Terms & Conditions apply
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
