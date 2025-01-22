import { SELECTORS, CLASSES, GAME_CONFIG, GAME_STATE } from './gameData.js';


SELECTORS.START_GAME_BUTTON.addEventListener( 'click', () => {
    GAME_CONFIG.INITIAL_HEALTH = 3;
    SELECTORS.HEALTH_COUNTER.textContent = '3';
    SELECTORS.START_GAME_CONTAINER.classList.add( CLASSES.HIDDEN );
    GAME_STATE.intermediateChoice.currentSelection.length = 0;

    SELECTORS.ALL_CARDS.childNodes.forEach( ( card ) => {
        card.classList.remove( CLASSES.CLICKED, CLASSES.MATCHED );
    } );
} );

SELECTORS.ANOTHER_LEVEL_BUTTON.addEventListener( 'click', () => {
    SELECTORS.START_GAME_CONTAINER.classList.remove( CLASSES.HIDDEN );
    SELECTORS.ALL_CARDS.classList.remove( CLASSES.DISABLED );
    SELECTORS.WIN_GAME_MESSAGE.remove()
} );