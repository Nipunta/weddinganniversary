import React, { useState, useEffect } from 'react';
import EntrancePage from './components/EntrancePage';
import SaveTheDatePage from './components/SaveTheDatePage';
import FullInvitationPage from './components/FullInvitationPage';
import ScrollToggle from './components/ScrollToggle';

type PageType = 'entrance' | 'saveTheDate' | 'fullInvitation';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('entrance');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handlePageTransition = (page: PageType, delay: number = 500) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsTransitioning(false);
    }, delay);
  };

  const handleEnterFromEntrance = () => {
    // 1.5 second delay for Save the Date page
    handlePageTransition('saveTheDate', 1500);
  };

  const handleContinueFromSaveTheDate = () => {
    handlePageTransition('fullInvitation', 500);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Page Transition Overlay - No loading message */}
      {isTransitioning && (
        <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 z-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-amber-300 border-t-transparent mx-auto"></div>
          </div>
        </div>
      )}

      {/* Page Content */}
      <div className={`transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        {currentPage === 'entrance' && (
          <EntrancePage 
            onEnter={handleEnterFromEntrance}
          />
        )}
        
        {currentPage === 'saveTheDate' && (
          <SaveTheDatePage onContinue={handleContinueFromSaveTheDate} />
        )}
        
        {currentPage === 'fullInvitation' && (
          <FullInvitationPage />
        )}
      </div>

      {/* Scroll Toggle for Full Invitation Page */}
      {currentPage === 'fullInvitation' && <ScrollToggle />}
    </div>
  );
}

export default App;