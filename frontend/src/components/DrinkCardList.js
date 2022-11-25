import {useState, useEffect} from 'react'
import Container from '@mui/material/Container';
import DrinkCard from './DrinkCard'
import axios from 'axios';
import { Box, Typography, Autocomplete, TextField } from '@mui/material';
import { ingredientsList, cocktailNames, glassware } from '../mockData';


function DrinkCardList() {
    const [drinkList, setDrinkList] = useState({})
    const [post, setPost] = useState([{
        "_id":"",
        "name":"",
        "id":0,
        "type":"",
        "category":"",
        "glassType":"",
        "pictureUrl":"http://www.thecocktaildb.com/images/media/drink/qyyvtu1468878544.jpg",
        "description":"1. Fill a rocks glass with ice 2.add white creme de cacao and vodka 3.stir",
        "ingredients":[
            {"_id":"637eebc3485b06d908dc54a4","name":"creme de cacao","measure":"1 oz white "},
        ]
    }])
    const [name, setName] = useState('')
    const [idFromButtonClick, setIdFromButtonClick] = useState('')

    const handleClick = () => {
        setIdFromButtonClick(name)
    }
    
    useEffect(() => {
        axios
        // .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .get(`http://localhost:4000/cocktails/`)
        .then(res => {
            console.log("Hi")
            console.log(res)
            // setPosts(res.data)
            setPost(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [idFromButtonClick])

    // 63793cf38e4976923a1605c8

    return (
        <div class="feed-display">
        {post.map((item, key) => <>
        <h1 key={key}>{item.name}</h1>
        <img src={item.pictureUrl} width={100} alt={"github avatar"}/>
        </>
        )}
      </div>
    )}

                {/*<Container>
            {post ? (
                <div className="drink-card-list">
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
                <button type="button" onClick={handleClick}>Fetch Post</button>
                <div>
                    {post[0].name}
                </div>
                </div>
            ) : (
                <p>Error</p>

            )}
        </Container>
            )
        };*/}
/*
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
*/

export default DrinkCardList;