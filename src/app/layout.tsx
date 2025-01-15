import './globals.css';

export const metadata = {
  title: 'Windows: Poorva Saxena',
  description: 'Portfolio of Poorva Saxena, designed like Windows OS'
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
