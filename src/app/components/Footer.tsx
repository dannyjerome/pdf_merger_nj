import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between w-full px-4 md:px-6 py-6 text-xs border-t">
      <p className=" text-gray-500 dark:text-gray-400">
        © 2024 PDF Merger. All rights reserved.
      </p>
      <nav className="space-x-4">
        <Link href={"#"} className="hover:underline underline-offset-4">
          Terms of service
        </Link>
        <Link href={"#"} className="hover:underline underline-offset-4">
          Privacy
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
