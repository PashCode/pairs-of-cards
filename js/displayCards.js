import { GAME_STATE, CLASSES, SELECTORS, GAME_CONFIG } from './gameData.js';
import { createdCardsResult } from './createCards.js';
import { shuffleCardsResult } from './shuffleCards.js';
import { addedTagResult } from './addTagToCard.js';


export async function displayCards() {
    const imageData = await createdCardsResult;
    const cardsTag = await addedTagResult;

    ( function addImageToImageData() {
        imageData.forEach( ( card, index ) => card.tag = cardsTag[ index ] );
    } )();

    SELECTORS.SHUFFLE_BUTTON.addEventListener( 'click', () => {
        setTimeout( () => shuffleCardsResult(), 50 );

        SELECTORS.ALL_CARDS.childNodes.forEach( ( card ) =>
            card.tag
                ? card.tag.classList.remove( CLASSES.CLICKED, CLASSES.MATCHED )
                : null,
        );

        GAME_STATE.intermediateChoice.currentSelection.length = 0;
        SELECTORS.ALL_CARDS.replaceChildren();
    } );

    return createdCardsResult;
}


