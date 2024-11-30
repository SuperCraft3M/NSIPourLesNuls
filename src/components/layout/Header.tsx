import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

export function Header() {
  const location = useLocation();

  return (
    <header className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-4 px-6 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <Link to="/" className="flex items-center space-x-2 group">
          <BookOpen className="h-8 w-8 transition-transform group-hover:scale-110" />
          <h1 className="text-xl md:text-2xl font-bold">La NSI pour les nuls expliqué par un nul</h1>
        </Link>
        <nav className="flex items-center">
          <ul className="flex space-x-6">
            {[
              { path: '/', label: 'Accueil' },
              { path: '/python', label: 'Python' },
              { path: '/sql', label: 'SQL' },
              { path: '/autre', label: 'Autre' }
            ].map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`px-3 py-2 rounded-md transition-colors ${
                    location.pathname === path
                      ? 'bg-white/20 text-white'
                      : 'hover:bg-white/10 text-white/80 hover:text-white'
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}