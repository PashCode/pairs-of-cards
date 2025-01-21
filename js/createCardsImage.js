import { createdCardsResult } from './createCards.js';

async function createCardsImage() {
    const objectWithCards = await createdCardsResult;

    return objectWithCards.map( ( card ) => {
        const image = document.createElement( 'img' );
        image.src = card.url;
        image.classList.add( 'card' );
        return image;
    } );
}

export const createdImagesResult = createCardsImage();