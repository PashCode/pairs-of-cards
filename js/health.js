import { SELECTORS, CLASSES, GAME_CONFIG, GAME_STATE } from './gameData.js';
import { winOrLoseResult } from './winOrLose.js';


async function countHealth( cardsPromise ) {
    const cards = await cardsPromise;

    SELECTORS.HEALTH_COUNTER.textContent += GAME_CONFIG.INITIAL_HEALTH;

    SELECTORS.SHUFFLE_BUTTON.addEventListener( 'click', () => {
        GAME_CONFIG.INITIAL_HEALTH = 3;
        SELECTORS.HEALTH_COUNTER.textContent = '3';
    } );

    SELECTORS.ALL_CARDS.addEventListener( 'click', ( e ) => {
        cards.forEach( ( card ) => {
            if ( e.target === card.hiddenTag && e.target.classList.contains( CLASSES.CARDS_HIDDEN ) ) {
                GAME_STATE.intermediateChoice.healthPoints.push( card.id );
            }
        } );

        if ( GAME_STATE.intermediateChoice.healthPoints.length === 2 ) {
            const [ firstClick, secondClick ] = GAME_STATE.intermediateChoice.healthPoints;

            if ( firstClick === secondClick ) {
                GAME_STATE.intermediateChoice.healthPoints.length = 0;
            } else {
                --GAME_CONFIG.INITIAL_HEALTH;
                SELECTORS.HEALTH_COUNTER.textContent = `${ GAME_CONFIG.INITIAL_HEALTH }`;
                GAME_STATE.intermediateChoice.healthPoints.length = 0;
            }
        }
    } );

    return GAME_CONFIG.INITIAL_HEALTH;
}

countHealth( winOrLoseResult );