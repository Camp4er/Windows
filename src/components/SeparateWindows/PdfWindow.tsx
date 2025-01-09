import Window from "../Window";
import PdfViewer from "./PDFViewer";


const PdfWindow = () => {
  return (
    <Window title="Resume.pdf"
    key={window.name}
            iconSrc="/icons/app.png"
            onClose={() => closeWindow(window.name)}
            onMinimize={() => toggleMinimizeWindow(window.name)}
    >
      <div className="w-full h-[90vh]">
        <PdfViewer file="/path/to/resume.pdf" />
      </div>
    </Window>
  );
};

export default PdfWindow;
