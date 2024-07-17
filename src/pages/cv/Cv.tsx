import { Document, Page } from "react-pdf";

export function Cv() {
  return (
    <div className="py-5 w-full overflow-x-hidden">
      <Document file="cv_joao_castillo_es.pdf" className="w-full">
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}
