// import React from 'react'


// const HomeScreen = () => {
//   return (
//     <h1>HomeScreen</h1>
//   )
// }

// export default HomeScreen;

import React from 'react'
import DrinkCardList from '../components/DrinkCardList';

function HomeScreen() {
    return (
        <div className ='HomeScreen'>
            <DrinkCardList/>
        </div>
    );
}

export default HomeScreen;

