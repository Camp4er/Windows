import Notepad from './Notepad';
import PdfViewer from './PDFViewer';
import PhotoViewer from './PhotoViewer';

interface WindowProps {
  id: number;
  type: 'text' | 'image' | 'pdf';
  content?: string;
  src?: string;
  file?: string;
}

interface WindowManagerProps {
  openWindows: WindowProps[];
}

const WindowManager: React.FC<WindowManagerProps> = ({ openWindows }) => {
  return (
    <>
      {openWindows.map((win) => {
        switch (win.type) {
          case 'text':
            return <Notepad key={win.id} content={win.content!} />;
          case 'image':
            return <PhotoViewer key={win.id} src={win.src!} />;
          case 'pdf':
            return <PdfViewer key={win.id} file={win.file!} />;
          default:
            return null;
        }
      })}
    </>
  );
};

export default WindowManager;
