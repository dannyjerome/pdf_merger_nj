import { FileText, Shield, Upload } from "lucide-react";

const Features = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 flex justify-center ">
      <div className="container px-4 md:px-6 ">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
          Features
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <FileText className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-lg font-bold">Easy Merging</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Combine multiple PDFs with a simple drag and drop interface.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Upload className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-lg font-bold">Fast Upload</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Quick and efficient file upload process for your convenience.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Shield className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-lg font-bold">Secure Processing</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Your files are processed securely and deleted after merging.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
