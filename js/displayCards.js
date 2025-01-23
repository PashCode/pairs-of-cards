import { GAME_STATE, CLASSES, SELECTORS, GAME_CONFIG } from './gameData.js';
import { shuffleCardsResult } from './shuffleCards.js';


export function displayCards() {
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
}

displayCards()



