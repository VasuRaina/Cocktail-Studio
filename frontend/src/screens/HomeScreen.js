import React from 'react'
import DrinkCardList from '../components/DrinkCardList'
import DrinkCard from '../components/DrinkCard';
import PostCard from '../components/PostCard'

function HomeScreen() {
    return (
        <div className ='HomeScreen'>
            <PostCard/>
            <DrinkCard/>
        </div>
    );
}

export default HomeScreen;