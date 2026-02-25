import { useState, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import { Document, Page, pdfjs } from "react-pdf";
import "./PdfViewer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

// Fix TypeScript prop issues
const FlipBook = HTMLFlipBook as unknown as React.FC<any>;

export default function PdfViewer() {
  const [numPages, setNumPages] = useState(0);
  const [searchPage, setSearchPage] = useState("");
  const bookRef = useRef<any>(null);

  const onDocumentLoadSuccess = (pdf: any) => {
    setNumPages(pdf.numPages);
  };

  const nextPage = () => {
    bookRef.current?.pageFlip().flipNext();
  };

  const prevPage = () => {
    bookRef.current?.pageFlip().flipPrev();
  };

  const goToPage = () => {
    const page = Number(searchPage);
    if (page >= 1 && page <= numPages) {
      bookRef.current?.pageFlip().flip(page - 1);
      setSearchPage("");
    }
  };

  return (
    <div className="book-container">
      <h3>📖 PDF Book Viewer</h3>

      <Document
        file="/BOOK1.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        loading={<p>Loading PDF...</p>}
      >
        <FlipBook
          ref={bookRef}
          width={380}
          height={550}
          size="fixed"
          drawShadow={true}
          showCover={true}
          maxShadowOpacity={0.3}
          className="flip-book"
          showPageCorners={true}
          disableFlipByClick={false}
        >
          {Array.from(new Array(numPages), (_, index) => (
            <div className="demoPage" key={index}>
              <Page
                pageNumber={index + 1}
                width={360}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </div>
          ))}
        </FlipBook>
      </Document>

      {/* Controls */}
      <div className="controls">
        <button onClick={prevPage}>◀ Prev</button>
        <button onClick={nextPage}>Next ▶</button>

        <input
          type="number"
          placeholder="Page #"
          value={searchPage}
          onChange={(e) => setSearchPage(e.target.value)}
        />
        <button onClick={goToPage}>Go</button>

        <a href="/BOOK1.pdf" download className="download-btn">
          ⬇ Download
        </a>
      </div>
    </div>
  );
}