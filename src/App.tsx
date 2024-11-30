import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Home } from './pages/Home';
import { CategoryPage } from './pages/CategoryPage';
import { SubCategoryPage } from './pages/SubCategoryPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:categoryId" element={<CategoryPage />} />
            <Route path="/:categoryId/:subCategoryId" element={<SubCategoryPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;