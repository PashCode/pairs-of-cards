import { choicePairResult } from './choiceCards.js';
import { SELECTORS, CLASSES, GAME_CONFIG, GAME_STATE } from './gameData.js';


export async function winOrLose() {
    const cardsArray = await choicePairResult;

    SELECTORS.ALL_CARDS.addEventListener( 'click', () => {

        // снизу
        const isAllCardsMatched = cardsArray.every( c => {
            return c.hiddenTag.classList.contains( CLASSES.MATCHED );
        } );

        if ( isAllCardsMatched ) {
            SELECTORS.WIN_GAME_MESSAGE.innerText = 'Victory!';
            SELECTORS.ALL_CARDS.append( SELECTORS.WIN_GAME_MESSAGE );
            SELECTORS.ALL_CARDS.classList.add( CLASSES.WIN_GAME );
        } else {
            setTimeout( () => {
                if ( !GAME_CONFIG.INITIAL_HEALTH ) {
                    SELECTORS.HEALTH_COUNTER.textContent = 'lose';
                    SELECTORS.ALL_CARDS.classList.add( CLASSES.LOSE_GAME );

                    // убирать открытые карточки при проигрыше
                    // GAME_STATE.gameVales.forEach((card) => {
                    // card.hiddenTag.classList.remove(CLASSES.MATCHED, CLASSES.HIDDEN)
                    // card.visibleTag.remove()
                    // })
                }
            } );
        }


    } );

    return GAME_STATE.gameVales;
}

export const winOrLoseResult = winOrLose();