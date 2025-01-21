import { SELECTORS, CLASSES, GAME_CONFIG } from './gameData.js';
import { winOrLoseResult } from './winOrLose.js';


async function countHealth( cardsPromise ) {
    // let quantityHealth = 3;
    const checkChoice = [];
    const cards = await cardsPromise;

    SELECTORS.HEALTH_COUNTER.textContent += GAME_CONFIG.INITIAL_HEALTH;
    // buttonCards.addEventListener('click', () => health.textContent = 3)

    SELECTORS.ALL_CARDS.addEventListener( 'click', ( e ) => {
        cards.forEach( ( card ) => {
            if ( e.target === card.tag && e.target.classList.contains( CLASSES.CARD ) ) {
                checkChoice.push( card.id );
            }
        } );

        if ( checkChoice.length === 2 ) {
            const [ firstClick, secondClick ] = checkChoice;

            if ( firstClick === secondClick ) {
                checkChoice.length = 0;
            } else {
                GAME_CONFIG.INITIAL_HEALTH -= 1;
                SELECTORS.HEALTH_COUNTER.textContent = GAME_CONFIG.INITIAL_HEALTH;
                checkChoice.length = 0;

                if ( GAME_CONFIG.INITIAL_HEALTH === 0 ) SELECTORS.HEALTH_CONTAINER.textContent = 'lose';
            }
        }
    } );

    return GAME_CONFIG.INITIAL_HEALTH;
}

await countHealth( winOrLoseResult );