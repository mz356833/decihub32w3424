import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Header from './components/Header';
import PageIndicator from './components/PageIndicator';
import ContentCard from './components/ContentCard';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 12;

  const handlePrevPage = () => {
    setCurrentPage(prev => (prev > 1 ? prev - 1 : prev));
  };

  const handleNextPage = () => {
    setCurrentPage(prev => (prev < totalPages ? prev + 1 : prev));
  };

  return (
    <div className="min-h-screen bg-blue-100 relative overflow-hidden">
      {/* Checkered background pattern */}
      <div className="absolute inset-0 bg-[url('/checkered-bg.png')] opacity-50 z-0"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-6">
        <Header />
        
        <main className="relative mt-4 mb-20">
          {/* Navigation buttons */}
          <button 
            onClick={handlePrevPage}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all z-20"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-6 h-6 text-pink-500" />
          </button>
          
          <button 
            onClick={handleNextPage}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all z-20"
            aria-label="Next page"
          >
            <ChevronRight className="w-6 h-6 text-pink-500" />
          </button>
          
          {/* Page indicator */}
          <PageIndicator current={currentPage} total={totalPages} />
          
          {/* Content card */}
          <ContentCard />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
