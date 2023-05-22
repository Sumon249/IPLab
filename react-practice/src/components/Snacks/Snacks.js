import React from 'react'
import { useState } from 'react'

const Dinner = () => {
    const dinners = [{
        imgUrl: "https://cdn.vox-cdn.com/thumbor/QwaWrwicr0fQKBmvpJneyuRabXg=/0x0:6000x4000/1220x813/filters:focal(2520x1520:3480x2480):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70940457/sweets_snacks_expo_2022_floor.0.jpg",
        recipe: "1 Potato, 1 Tomato, 10 cups Rice"
    },
    {
        imgUrl: "https://cdn.vox-cdn.com/thumbor/QwaWrwicr0fQKBmvpJneyuRabXg=/0x0:6000x4000/1220x813/filters:focal(2520x1520:3480x2480):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70940457/sweets_snacks_expo_2022_floor.0.jpg",
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