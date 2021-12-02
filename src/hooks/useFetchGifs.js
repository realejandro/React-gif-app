import { getGifElement } from "../helpers/GetGifs";
//import React from 'react'
//Solo debemos importar react si vamos a retornar JSX

import { useState, useEffect } from "react"


export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true,
    })

    useEffect( () => {
        getGifElement(category)
            .then(imgs => {
                setTimeout( () => {
                    setState({
                        data:imgs,
                        loading: false,
                    })
                }, 3000);
            })
    }, [category])

    return state;

}
