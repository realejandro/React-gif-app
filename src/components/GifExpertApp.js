import React, { useState } from 'react'
import CategoryAdd from './CategoryAdd';
import GiftCollection from './GiftCollection';

export const GifExpertApp = () => {
    
    //const categories = ['One punch ', 'Samurai x ', 'Attack on titan '];
    
    const [categories, setCategories] = useState(['One punch ']);

    //const handleAddGif = () => {
        //categories.push("new"); ASI NO SE MODIFICA UN COMPONENTE
        //setCategories([...categories, 'Mega man'] );
    //}

    return (
        <div>
            gif app example
            <hr />
            <CategoryAdd setCategories={ setCategories } />
           <ol>
           {
               categories.map( category => { 
                   return <GiftCollection
                             key={category}
                            category={ category }>
                        </GiftCollection>
                })
           }
           </ol>
           
        </div>
    )
}
