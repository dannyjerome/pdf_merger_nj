import { PDFDocument } from "pdf-lib";

const mergePDFs = async (files: File[]) => {
  const mergedPdf = await PDFDocument.create();
console.log("files Received", files);

  for (let file of files) {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await PDFDocument.load(arrayBuffer);

    const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
    copiedPages.forEach((page) => mergedPdf.addPage(page));
  }

  const mergedPdfFile = await mergedPdf.save();
  downloadMergedPdf(mergedPdfFile);
};

function downloadMergedPdf(mergedPdfFile: Uint8Array) {
  const blob = new Blob([mergedPdfFile], { type: "application/pdf" });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "merged.pdf";
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
  a.remove();
  
}

export default mergePDFs ;
