/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import data from '../mockData';
import { Stack } from '@mui/system';



 const SearchScreen = () => {

          const [filter, setFilter] = useState('');
                const searchText =(event)=> {
                    setFilter(event.target.value);
        }
            let dataSearch = data.cardData.filter(item => {
                return Object.keys(item).some(key =>
                       item[key].toString().toLowerCase().includes(filter.toString().toLocaleLowerCase())
                          
        )});
 return (
    <div>
      <section className='py-4 container'>
          <div className = "row justify-content-center">


            <div className='col-12 mb-5'>
              <div className='mb-3 col-4 mx-auto text-center'>
                  <label className='form-label h4'>Search</label>
                  <input
                  type = 'text'
                  className='from-control'
                    value={filter}
                    onChange = {searchText.bind(this)}
                  
                  />   

              </div>

            </div>



             { dataSearch.map((item, index) => {
                return (
                  <Stack direction="column" spacing={2} key ={index}>
                   
                  <div className='col-11 col md-6 col-lg-3 mx-0 mb-4'>
                  <div cclassName='card p-0 overflow-hidden h-100 shadow'>
                        <h5 className='card-title'> {item.label} </h5>
                    <div className='card-body'> 
                            <img src={item.img} className= 'card-img-top'/>
                             {item.description}
                    </div>
                  </div>
                  </div>
                
                  </Stack>
                )
             })}

          </div>
      </section>

    </div>
  )
}
export default SearchScreen;

