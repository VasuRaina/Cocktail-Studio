import React from 'react';

import DrinkCard from './DrinkCard';
import { Grid  } from '@mui/material';

function DrinkCardList() {
    

    return (
        <div className="drink-card-list">
            {/* {drinks.map((drink) => ( */}
                <div marginBottom ="20px">
         <Grid>
                 {/* {drink.name} */}
                         <DrinkCard/>
                         </Grid>
                  
                  
                        
                      
                      
          
                 

                   
                </div>
            
        </div>
    );
}

export default DrinkCardList;