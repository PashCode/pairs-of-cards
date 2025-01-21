import { COUNT_CARDS } from './gameData.js';

async function preloadImages( cards ) {
    const imageMap = new Map();

    for ( const name of cards ) {
        const response = await fetch( `img/${ name }-card.jpg` );
        const blob = await response.blob();
        imageMap.set( name, [
            URL.createObjectURL( blob.slice() ),
            URL.createObjectURL( blob.slice() ),
        ] );
    }

    return imageMap;
}

export const preLoadImagesResult = preloadImages( COUNT_CARDS );