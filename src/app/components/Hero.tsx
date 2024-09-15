"use client";
import { Button } from "@/components/ui/button";
import { Check, Upload, X } from "lucide-react";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import mergePDFs from "@/lib/mergePDF";
interface FileWithPreview extends File {
  preview: string;
}
const Hero = () => {
  const [files, setFiles] = useState<FileWithPreview[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newFiles = acceptedFiles.map((file: File) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    ) as FileWithPreview[];
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "application/pdf": [".pdf"] },
    multiple: true,
  });

  function removeFile(index: number): void {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  }

  return (
    <section className="px-4 py-12 md:py-24 lg:py-32 ">
      <div className="container flex flex-col items-center justify-center h-auto space-y-4">
        <div className="space-y-6 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Merge PDFs with ease
          </h1>
          <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Combine multiple PDF files into one document quickly and
            effortlessly. Just drag and drop your files below.
          </p>
        </div>
        <div className="w-full max-w-3xl space-y-4">
          <div
            {...getRootProps()}
            className={
              `py-20 border-2 border-dashed rounded-lg transition-colors hover:border-primary cursor-pointer text-center` +
              (isDragActive ? " border-primary" : "")
            }
          >
            <input {...getInputProps()} />
            <Upload className=" mx-auto h-16 w-16 text-gray-400" />
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <p>Drag 'n' drop some files here, or click to select files</p>
            )}
          </div>
          {files.length > 0 && (
            <div className="mt-6">
              <h3 className="text-xl font-semibold">Selected Files:</h3>
              <ul className="mt-3 space-y-2 max-h-40 overflow-auto border p-2 rounded-lg custom-scrollbar">
                {files.map((file, index) => (
                  <li
                    key={file.name}
                    className="flex items-center text-sm text-gray-500"
                  >
                    <Check className="mr-2 h-5 w-5 text-green-500" />
                    {file.name}
                    <X
                      className="ml-2 h-5 w-5 text-red-500 cursor-pointer"
                      onClick={() => removeFile(index)}
                    />
                  </li>
                ))}
              </ul>
            </div>
          )}
          <Button
            className="w-full mt-4 py-6 text-lg"
            onClick={() => {
              mergePDFs(files).then(() => {
                setFiles([]);
              });
            }}
          >
            Merge PDFs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
