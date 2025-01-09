type PdfViewerProps = {
    file: string;
  };
  
  const PdfViewer = ({ file }: PdfViewerProps) => {
    return (
      <div className="w-full h-full">
        <embed src={file} type="application/pdf" className="w-full h-full" />
      </div>
    );
  };
  
  export default PdfViewer;
  