import { intermediateChoice } from './gameData.js';
import { createdCardsResult } from './createCards.js';
import { shuffleCardsResult } from './shuffleCards.js';
import { addedTagResult } from './addTagToCard.js';

export async function displayCards( cards, allCards, button ) {
    const imageData = await createdCardsResult;
    const cardsTag = await addedTagResult;

    ( function addImageToImageData() {
        imageData.forEach( ( card, index ) => card.tag = cardsTag[ index ] );
    } )();

    button.addEventListener( 'click', () => {
        setTimeout( () => shuffleCardsResult(), 50 );

        allCards.childNodes.forEach( ( card ) =>
            card.tag
                ? card.tag.classList.remove( 'click', 'clicked-both' )
                : null,
        );

        intermediateChoice.length = 0;
        allCards.replaceChildren();
    } );

    return createdCardsResult;
}


