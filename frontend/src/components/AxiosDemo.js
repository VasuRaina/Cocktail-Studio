import React, { Component } from 'react'
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:4000/cocktails',
    /*
    header: {
        'X-auth-key': 'token123'
    }
    */
})

class AxiosDemo extends Component {
    state = {
        cocktails: []
    }

    constructor() {
        super();
        this.getCocktails();
        /*
        api.get('/').then(res => {
            console.log(res.data)
            this.setState({cocktails: res.data})
        })
        */
    }

    // Post cocktail
    /*
    createCocktail = async () => {
        let res = await api
        .post('/', {
            "_id":"",
            "name":"",
            "id":0,
            "type":"",
            "category":"",
            "glassType":"",
            "pictureUrl":"",
            "description":"",
            "ingredients":[
                {"_id":"","name":"","measure":""},
            ]
        })
        .catch(err => console.log(err))
        console.log(res)
        this.getCourses();
    }
    */

    getCocktails = async () => {
        /*
        let data = await api.get('/').then(({data}) => data);
        this.setState({ cocktails: data})
        */

        /*
        try {
            let data = await api.get('/').then(({data}) => data);
            this.setState({ cocktails: data})
        } catch (err) {
            console.log(err)
        }
        */

        /*
        try {
            let data = await axios({
                method: 'get',
                url: 'http://localhost:4000/cocktails'
            }).then(({data}) => data);
            this.setState({ cocktails: data})
        } catch (err) {
            console.log(err)
        }
        */

        try {
            let data = await api.get('/', {
                params: {
                    _limit: 1,
                    _start: 3
                }
            }).then(({data}) => data);
            this.setState({ cocktails: data})
        } catch (err) {
            console.log(err)
        }
    }

    deleteCocktail = async (id) => {
        let data = await api.delete(`/${id}`)
        this.getCocktails();
    }

    updateCocktail = async (id, val) => {
        let data = await api.patch(`/${id}`, { name : val })
        this.getCourses();
    }

  render() {
    return (
      <div>
        {this.state.cocktails.map(cocktail => 
        <h2 key={cocktail.id} onClick={() => this.updateCocktail(cocktail.id, `${cocktail.name} Changed`)}>
            {cocktail.name}
            <button onClick={() => this.deleteCocktail(cocktail.id)}>x</button>
        </h2>)}
        <button onClick={this.createCocktail}></button>
      </div>
    )
  }
}

export default AxiosDemo