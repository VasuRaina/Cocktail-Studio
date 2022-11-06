import {useState} from 'react'
import Container from '@mui/material/Container';
import DrinkCard from './DrinkCard'


function DrinkCardList() {
    const [drinks] = useState([
        {name: 'Vodka'},
        {name: 'Rum'},
        {name: 'Gin'},
        {name: 'Tequila'}
    ])

    return (
        <div className="drink-card-list">
            {drinks.map((drink) => (
                <div className="drink-card" key={drink.name} marginBottom ="20px">
                    <column>
                    <Container>
                        
                        {drink.name}
                        <DrinkCard/>
                        
                    </Container>
                    </column>
                </div>
            ))}
        </div>
    );
}

export default DrinkCardList;