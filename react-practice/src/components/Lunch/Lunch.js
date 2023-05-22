import React from 'react'
import { useState } from 'react'

const Dinner = () => {
    const dinners = [{
        imgUrl: "https://static.toiimg.com/thumb/90934370.cms?width=680&height=512&imgsize=222624",
        recipe: "1 Potato, 1 Tomato, 10 cups Rice"
    },
    {
        imgUrl: "https://static.toiimg.com/thumb/90934370.cms?width=680&height=512&imgsize=222624",
        recipe: "1 Potato, 5 Tomato, 10 cups Rice"
    }]
    const showRecipe = (index) => {
        setSelectedRecipe(index)
    }
    const [selectedRecipe, setSelectedRecipe] = useState('initialState');
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