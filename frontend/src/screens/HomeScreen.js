import React from 'react'
import DrinkCardList from '../components/DrinkCardList'
import DrinkCard from '../components/DrinkCard';
import PostCard from '../components/PostCard'
import RecipeCard from '../components/RecipeCard';


function HomeScreen() {
    return (
        <div className ='HomeScreen'>
            <RecipeCard/>
        </div>
    );
}

export default HomeScreen;