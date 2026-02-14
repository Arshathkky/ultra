import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "./PdfViewer.css";

pdfjs.GlobalWorkerOptions.workerSrc =
  `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function PdfViewer() {
  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isFlipping, setIsFlipping] = useState(false);
  const [jumpPage, setJumpPage] = useState("");

  const onDocumentLoadSuccess = (pdf: any) => {
    setNumPages(pdf.numPages);
  };

  const nextPage = () => {
    if (currentPage + 2 <= numPages && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 2);
        setIsFlipping(false);
      }, 600);
    }
  };

  const previousPage = () => {
    if (currentPage - 2 >= 1 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 2);
        setIsFlipping(false);
      }, 600);
    }
  };

  const jumpToPage = () => {
    const page = Number(jumpPage);
    if (page >= 1 && page <= numPages) {
      setCurrentPage(page % 2 === 0 ? page - 1 : page); // keep odd as left
      setJumpPage("");
    }
  };

  return (
    <div className="book-container">
      <h2>📖 Open Book Viewer</h2>

      <Document file="/BOOK1.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <div className="book">
          {/* Left page */}
          <div className="page left">
            {currentPage <= numPages && (
              <Page
                pageNumber={currentPage}
                width={500}              // increase width for taller pages
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            )}
          </div>

          {/* Right page */}
          <div className={`page right ${isFlipping ? "flip" : ""}`}>
            {currentPage + 1 <= numPages && (
              <Page
                pageNumber={currentPage + 1}
                width={500}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            )}
          </div>
        </div>
      </Document>

      <div className="controls">
        <button onClick={previousPage} disabled={currentPage <= 1}>
          ◀ Previous
        </button>

        <span>
          Pages {currentPage}-{Math.min(currentPage + 1, numPages)} of {numPages}
        </span>

        <button
          onClick={nextPage}
          disabled={currentPage + 1 >= numPages}
        >
          Next ▶
        </button>

        {/* Jump to page */}
        <input
          type="number"
          placeholder="Go to page"
          value={jumpPage}
          onChange={(e) => setJumpPage(e.target.value)}
        />
        <button className="button-pdf" onClick={jumpToPage}>Go</button>
      </div>
    </div>
  );
}
