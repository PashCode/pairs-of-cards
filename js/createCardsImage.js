import { createdCardsResult } from './createCards.js';
import { CLASSES } from './gameData.js';

async function createCardsImage() {
    const cards = await createdCardsResult;


    return cards.map( ( card ) => {
        const cardImage = document.createElement( 'img' );
        cardImage.src = card.url;
        cardImage.classList.add( CLASSES.CARD );

        const hiddenCard = document.createElement( 'img' );
        hiddenCard.src = '../img/hidden-card.jpg';
        hiddenCard.classList.add( CLASSES.CARDS_HIDDEN );
        return [ cardImage, hiddenCard ];
    } );
}

export const createdImagesResult = createCardsImage();
