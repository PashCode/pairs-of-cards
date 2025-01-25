import { SELECTORS, CLASSES, GAME_CONFIG, GAME_STATE } from './gameData.js';
import { shuffle } from './shuffleCards.js';


SELECTORS.START_GAME_BUTTON.addEventListener( 'click', () => {
    shuffle();
    GAME_CONFIG.INITIAL_HEALTH = 3;
    SELECTORS.HEALTH_COUNTER.textContent = '3';
    SELECTORS.START_GAME_CONTAINER.classList.add( CLASSES.HIDDEN );
} );

SELECTORS.ANOTHER_LEVEL_BUTTON.addEventListener( 'click', () => {
    SELECTORS.START_GAME_CONTAINER.classList.remove( CLASSES.HIDDEN );
    GAME_STATE.intermediateChoice.currentSelection.length = 0;
    SELECTORS.ALL_CARDS.classList.remove( CLASSES.WIN_GAME, CLASSES.LOSE_GAME );


    SELECTORS.ALL_CARDS.childNodes.forEach( ( card ) => {
        if ( card.firstElementChild ) {
            card.firstElementChild.classList.remove( CLASSES.CLICKED, CLASSES.MATCHED, CLASSES.HIDDEN );
        }
    } );


    // SELECTORS.ALL_CARDS.classList.remove( CLASSES.DISABLED );
    SELECTORS.ALL_CARDS.replaceChildren();
    SELECTORS.WIN_GAME_MESSAGE.remove();
} );