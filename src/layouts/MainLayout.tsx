import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { Search } from 'lucide-react';
import { searchEvents } from '../components/common/SearchBar';

function MainLayout() {
  // The search modal is now handled by the SearchBar component
  // using the custom event system
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      
      {/* Floating search button - visible on all pages */}
      <button
        onClick={() => searchEvents.open()}
        className="fixed bottom-6 right-6 z-40 bg-primary-600 hover:bg-primary-700 text-white rounded-full p-3 shadow-lg transition-all duration-300 flex items-center justify-center"
        aria-label="Suche öffnen"
      >
        <Search size={20} />
      </button>
    </div>
  );
}

export default MainLayout;