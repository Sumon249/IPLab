import React from 'react'
import { useState } from 'react'

const Dinner = () => {
    const dinners = [{
        imgUrl: "https://c.ndtvimg.com/2022-03/jcliv9dg_shahi-paneer_625x300_15_March_22.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350",
        recipe: "1 Potato, 1 Tomato, 10 cups Rice"
    },
    {
        imgUrl: "https://c.ndtvimg.com/2022-03/jcliv9dg_shahi-paneer_625x300_15_March_22.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350",
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