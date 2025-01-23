//
// async function addCardsTag() {
//     const cardsImages = await createdImagesResult;
//
//     return cardsImages.map( ( card, index ) => {
//         card.visibleTag = cardsImages[ index ][ 0 ];
//         card.hiddenTag = cardsImages[ index ][ 1 ];
//         return card;
//     } );
// }

import { createdImagesResult } from './createCardsImage.js';
import { createdCardsResult } from './createCards.js';


async function addImageToImageData() {
    const imageData = await createdCardsResult;
    const cardsImages = await createdImagesResult;

    return imageData.map( ( card, index ) => {
        card.visibleTag = cardsImages[ index ][ 0 ];
        card.hiddenTag = cardsImages[ index ][ 1 ];
        return card;
    } );
}

export const addedTagResult = addImageToImageData();
