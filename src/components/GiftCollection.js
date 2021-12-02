import React from 'react'
//import { useState, useEffect } from 'react';
//import { getGifElement } from '../helpers/GetGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GiftCollection = ({ category }) => {
    
    const { data:images , loading } = useFetchGifs( category );

    console.log(loading);
    
    return (

        <div>
            <h3> {category} </h3>
            
            { loading && <h1>Cargando...</h1>}
            {/* loading ? 'cargando...' : 'Fin de carga' */}

            <div>
                
                    {
                        images.map( image => (
                             <GifGridItem 
                                { ...image } 
                                key={image.id}></GifGridItem>
                        ))
                    }
            
            </div>
        </div>
    )
}

export default GiftCollection
