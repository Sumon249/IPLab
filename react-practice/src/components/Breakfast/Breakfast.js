import React from 'react'
import { useState } from 'react'

const Dinner = () => {
    const dinners = [{
        imgUrl: "https://thumbs.dreamstime.com/z/breakfast-buffet-full-continental-english-coffee-orange-juice-salad-croissant-fruit-77238300.jpg",
        recipe: "1 Potato, 1 Tomato, 10 cups Rice"
    },
    {
        imgUrl: "https://thumbs.dreamstime.com/z/breakfast-buffet-full-continental-english-coffee-orange-juice-salad-croissant-fruit-77238300.jpg",
        recipe: "1 Potato, 5 Tomato, 10 cups Rice"
    }]
    const showRecipe = (index) => {
        setSelectedRecipe(index)
    }
    const [selectedRecipe, setSelectedRecipe] = useState('');
    return (

        <div className='wrapper'>
            <div className="image">
                {dinners.map((dinner, index) => {
                    return (<div key = {index}>
                        <img src={dinner.imgUrl} alt="" onClick={() => showRecipe(index)}/>
                        {selectedRecipe === index && <p>{dinner.recipe}</p>}
                    </div>)
                })}
            </div>
        </div>
    )
}

export default Dinner