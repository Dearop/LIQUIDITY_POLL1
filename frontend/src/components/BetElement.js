import React, { useState } from 'react';

import Option from './Option';
import { Bet } from './Bet';
import { BetPage } from './BetsPage';
import { AssetPage } from './Asset-page';
import MainContent from './MainContent';
import App from '../App';


export default function BetLogic({logo1, title1, volume1, coteOui1, coteNon1}) {

  const [showOwnPage, setShowOwnPage] = useState(false);

  function handleClick() {
    setShowOwnPage(true);
  }

  return (
    <div>
      {showOwnPage ? (
        <AssetPage name = {title1}
                    price = {coteOui1} />


      ) : (
        <button onClick={handleClick}>
          <Bet
            logo= {logo1}
            title= {title1}
            volume= {volume1}
            coteOui={coteOui1}
            coteNon={coteNon1}
          />
        </button>
      )}
    </div>
  );
}
