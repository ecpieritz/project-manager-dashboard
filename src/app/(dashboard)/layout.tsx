// ./app/layout.tsx
import React from 'react';
import '../../styles/globals.css';

const Layout: React.FC = ({ children }) => {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Dashboard de Projetos</title>
      </head>
      <body className="bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
        <div className="min-h-screen flex flex-col">
          <header className="bg-teal-600 p-4 text-white">
            <h1 className="text-2xl">Dashboard de Projetos</h1>
          </header>
          <main className="flex-grow p-4">{children}</main>
        </div>
      </body>
    </html>
  );
};

export default Layout;
