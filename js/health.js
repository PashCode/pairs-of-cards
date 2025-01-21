import { SELECTORS, CLASSES, GAME_CONFIG, GAME_STATE } from './gameData.js';
import { winOrLoseResult } from './winOrLose.js';


async function countHealth( cardsPromise ) {
    const cards = await cardsPromise;

    SELECTORS.HEALTH_COUNTER.textContent += GAME_CONFIG.INITIAL_HEALTH;

    SELECTORS.SHUFFLE_BUTTON.addEventListener( 'click', () => {
        SELECTORS.ALL_CARDS.classList.remove( CLASSES.DISABLED ); //хз нужен или нет
        GAME_CONFIG.INITIAL_HEALTH = 3;
        SELECTORS.HEALTH_COUNTER.textContent = '3';
    } );

    SELECTORS.ALL_CARDS.addEventListener( 'click', ( e ) => {
        cards.forEach( ( card ) => {
            if ( e.target === card.tag && e.target.classList.contains( CLASSES.CARD ) ) {
                GAME_STATE.intermediateChoice.healthPoints.push( card.id );
            }
        } );

        if ( GAME_STATE.intermediateChoice.healthPoints.length === 2 ) {
            const [ firstClick, secondClick ] = GAME_STATE.intermediateChoice.healthPoints;

            if ( firstClick === secondClick ) {
                GAME_STATE.intermediateChoice.healthPoints.length = 0;
            } else {
                GAME_CONFIG.INITIAL_HEALTH -= 1;
                SELECTORS.HEALTH_COUNTER.textContent = `${ GAME_CONFIG.INITIAL_HEALTH }`;
                GAME_STATE.intermediateChoice.healthPoints.length = 0;

            }
        }
        if ( GAME_CONFIG.INITIAL_HEALTH === 0 ) {
            SELECTORS.HEALTH_COUNTER.textContent = 'lose';
            SELECTORS.ALL_CARDS.classList.add( CLASSES.DISABLED ); //хз нужен или нет
        }

    } );

    // return GAME_CONFIG.INITIAL_HEALTH;
}

await countHealth( winOrLoseResult );