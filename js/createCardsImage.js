import { createdCardsResult } from './createCards.js';
import { CLASSES } from './gameData.js';

async function createCardsImage() {
    const objectWithCards = await createdCardsResult;

    return objectWithCards.map( ( card ) => {
        const image = document.createElement( 'img' );
        image.src = card.url;
        image.classList.add( CLASSES.CARD );
        return image;
    } );
}

export const createdImagesResult = createCardsImage();