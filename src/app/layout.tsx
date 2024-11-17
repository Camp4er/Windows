import Taskbar from '@/components/Taskbar';
import './globals.css';

export const metadata = {
  title: 'Welcome Back!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-cover bg-center text-white flex flex-col min-h-screen overflow-hidden relative"
        style={{ backgroundImage: "url('/icons/default_dark_compressed.jpg')" }}>
        {children}
      </body>
    </html>
  );
}
