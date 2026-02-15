import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "./PdfViewer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function PdfViewer() {
  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<
    "next" | "prev" | ""
  >("");
  const [jumpPage, setJumpPage] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onDocumentLoadSuccess = (pdf: any) => {
    setNumPages(pdf.numPages);
  };

  const nextPage = () => {
    if (!isFlipping && currentPage < numPages) {
      setIsFlipping(true);
      setFlipDirection("next");

      setTimeout(() => {
        setCurrentPage((prev) =>
          isMobile ? prev + 1 : Math.min(prev + 2, numPages)
        );
        setIsFlipping(false);
        setFlipDirection("");
      }, 700);
    }
  };

  const previousPage = () => {
    if (!isFlipping && currentPage > 1) {
      setIsFlipping(true);
      setFlipDirection("prev");

      setTimeout(() => {
        setCurrentPage((prev) =>
          isMobile ? prev - 1 : Math.max(prev - 2, 1)
        );
        setIsFlipping(false);
        setFlipDirection("");
      }, 700);
    }
  };

  const jumpToPage = () => {
    const page = Number(jumpPage);
    if (page >= 1 && page <= numPages) {
      setCurrentPage(page);
      setJumpPage("");
    }
  };

  const handleTouchStart = (e: React.TouchEvent) =>
    setTouchStartX(e.touches[0].clientX);

  const handleTouchMove = (e: React.TouchEvent) =>
    setTouchEndX(e.touches[0].clientX);

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const distance = touchStartX - touchEndX;
    const threshold = 50;

    if (distance > threshold) nextPage();
    else if (distance < -threshold) previousPage();

    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div className="book-container">
      <h2>📖 Open Book Viewer</h2>

      <Document file="/BOOK1.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <div
          className="book"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* LEFT PAGE */}
          {!isMobile && currentPage <= numPages && (
            <div
              className={`page left ${
                isFlipping && flipDirection === "prev"
                  ? "flip-left"
                  : ""
              }`}
            >
              <Page
                pageNumber={currentPage}
                width={500}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </div>
          )}

          {/* RIGHT PAGE */}
          {currentPage <= numPages && (
            <div
              className={`page right ${
                isFlipping && flipDirection === "next"
                  ? "flip-right"
                  : ""
              }`}
            >
              <Page
                pageNumber={
                  isMobile
                    ? currentPage
                    : currentPage + 1 <= numPages
                    ? currentPage + 1
                    : currentPage
                }
                width={isMobile ? 400 : 500}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </div>
          )}
        </div>
      </Document>

      <div className="controls">
        <button onClick={previousPage} disabled={currentPage <= 1}>
          ◀ Previous
        </button>

        <span>
          Page {currentPage} of {numPages}
        </span>

        <button onClick={nextPage} disabled={currentPage >= numPages}>
          Next ▶
        </button>

        <input
          type="number"
          placeholder="Go to page"
          value={jumpPage}
          onChange={(e) => setJumpPage(e.target.value)}
        />

        <button className="button-pdf" onClick={jumpToPage}>
          Go
        </button>
      </div>
    </div>
  );
}
