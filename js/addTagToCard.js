import { createdImagesResult } from './createCardsImage.js';

async function addCardsTag() {
    const cardsImages = await createdImagesResult;

    return cardsImages.map( ( card, index ) => {
        card.tag = cardsImages[ index ];
        return card;
    } );
}

export const addedTagResult = addCardsTag();