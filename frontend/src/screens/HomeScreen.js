import React from 'react'
import DrinkCardList from '../components/DrinkCardList'
import DrinkCard from '../components/DrinkCard';
import PostCard from '../components/PostCard'
import RecipeCard from '../components/RecipeCard';
import AxiosDemo from '../components/AxiosDemo';


function HomeScreen() {
    return (
        <div className ='HomeScreen'>
            {/* <RecipeCard/> */}
            {/* <DrinkCard/> */}
            {/* <DrinkCardList/> */}
            <AxiosDemo/>
        </div>
    );
}

export default HomeScreen;