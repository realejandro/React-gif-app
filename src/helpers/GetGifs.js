
export const getGifElement = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=jFWjSq9pKaY36jqrlcpPldDJiGQbnc6J`;
    //encodeURI() let me to fill the empty spaces with % or anything that i need to use to fill it
    //le ponemos un "+" a los espacios vacios
    const resp = await fetch( url )
    const { data } = await resp.json();

    const gifs = data.map( img => 
        { 
            return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        }
    }
    );

    console.log(gifs);//esto se imprime dos veces por el modo estricto

    return gifs;
}