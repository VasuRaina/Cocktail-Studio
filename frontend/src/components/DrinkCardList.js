import {useState} from 'react'
import Container from '@mui/material/Container';
import DrinkCard from './DrinkCard'


function DrinkCardList() {
    const [drinks, setDrink] = useState([
        {
            name: '', 
            imgURL: '', 
            glassware: '', 
            ingredients: [], 
            instructions: '', 
            category: ''
        }
    ])


    return (
        <div className="drink-card-list">
            {drinks.map((drink) => (
                <div className="drink-card" key={drink.name}>
                    <Container>
                        {drink.name}
                        <DrinkCard/>
                    </Container>
                </div>
            ))}
        </div>


    );
}

export default DrinkCardList;