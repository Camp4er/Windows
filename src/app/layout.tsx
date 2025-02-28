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
      <head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" />
      </head>
      <body className=" text-white bg-slate-800 flex flex-col min-h-screen overflow-hidden relative"
        >
        {children}
      </body>
    </html>
  );
}
