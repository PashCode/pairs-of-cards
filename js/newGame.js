import { SELECTORS, CLASSES } from './gameData.js';


SELECTORS.START_GAME_BUTTON.addEventListener( 'click', () => {
    SELECTORS.START_GAME_CONTAINER.classList.add( CLASSES.HIDDEN );
} );

SELECTORS.ANOTHER_LEVEL_BUTTON.addEventListener( 'click', () => {
    SELECTORS.START_GAME_CONTAINER.classList.remove( CLASSES.HIDDEN );
} );