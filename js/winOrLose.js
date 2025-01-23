import { choicePairResult } from './choiceCards.js';
import { SELECTORS, CLASSES, GAME_CONFIG, GAME_STATE } from './gameData.js';


export async function winOrLose() {
    const cardsArray = await choicePairResult;

    SELECTORS.ALL_CARDS.addEventListener( 'click', () => {

        const isAllCardsMatched = cardsArray.every( c => {
            return c.tag.classList.contains( CLASSES.MATCHED );
        } );

        if ( isAllCardsMatched ) {
            SELECTORS.WIN_GAME_MESSAGE.innerText = 'Victory!';
            SELECTORS.ALL_CARDS.append( SELECTORS.WIN_GAME_MESSAGE );
            SELECTORS.ALL_CARDS.classList.add( CLASSES.DISABLED, CLASSES.WIN_GAME );
        }

        setTimeout( () => {
            if ( !GAME_CONFIG.INITIAL_HEALTH ) {
                SELECTORS.HEALTH_COUNTER.textContent = 'lose';
                SELECTORS.ALL_CARDS.classList.add( CLASSES.DISABLED );
            }
        } );

    } );

    return GAME_STATE.gameVales;
}

export const winOrLoseResult = winOrLose();