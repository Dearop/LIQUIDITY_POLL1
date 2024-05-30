import React from 'react';
import { useState } from 'react';

import Option from './Option';
import {Bet}  from './Bet';
import {BetPage} from './BetsPage';
import {AssetPage}  from './Asset-page';
import MainContent from './MainContent';



export default function BetLogic() {

    let showOwnPage = false;

    

    function handleClick() {
        showOwnPage = true;
        
      }

    return (
        //<AssetPage {...{name : "zizi",
                        //price: 12}} />
        <div>
            {showOwnPage ? <MainContent/> : <button onClick={handleClick}>
                                                <Bet logo = "ta mere"
                                                 title = "tamere"
                                                 volume = "12"
                                                 betUrl = ""
                                                 coteOui = "1.5"
                                                 coteNon = "1.2"
            
                                                />
                                                
                
                                            </button>}
            
            
        </div>
        

                        
    );
  }












