import React, { useState } from 'react';

import Option from './Option';
import { Bet } from './Bet';
import { BetPage } from './BetsPage';
import { AssetPage } from './Asset-page';
import MainContent from './MainContent';

export default function BetLogic() {
  const [showOwnPage, setShowOwnPage] = useState(false);

  function handleClick() {
    setShowOwnPage(true);
  }

  return (
    <div>
      {showOwnPage ? (
        <MainContent />


      ) : (
        <button onClick={handleClick}>
          <Bet
            logo="ta mere"
            title="tamere"
            volume="12"
            betUrl=""
            coteOui="1.5"
            coteNon="1.2"
          />
        </button>
      )}
    </div>
  );
}
