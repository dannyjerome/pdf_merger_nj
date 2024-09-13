import { FileText } from "lucide-react";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="/">
        <FileText className="h-8 w-8" />
        <span className="sr-only">PDF Merger</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-md font-medium hover:underline underline-offset-4"
          href="/features"
        >
          Features
        </Link>
        <Link
          className="text-md font-medium hover:underline underline-offset-4"
          href="/pricing"
        >
          Pricing
        </Link>
        <Link
          className="text-md font-medium hover:underline underline-offset-4"
          href="/about"
        >
          About
        </Link>
        <Link
          className="text-md font-medium hover:underline underline-offset-4"
          href="/contact"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Nav;
