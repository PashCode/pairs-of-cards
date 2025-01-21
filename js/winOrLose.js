import { choicePairResult } from './choiceCards.js';
import { SELECTORS, CLASSES } from './gameData.js';

export async function winOrLose() {
    const cardsArray = await choicePairResult;

    const observer = new MutationObserver( () => {
        const isAllCardsMatched = cardsArray.every( c => c.tag.classList.contains( CLASSES.MATCHED ) );
        if ( isAllCardsMatched ) {
            const victory = document.createElement( 'p' );
            victory.innerText = 'Victory!';
            SELECTORS.ALL_CARDS.append( victory );
        }
    } );

    cardsArray.forEach( card => {
        observer.observe( card.tag, {
            attributeFilter: [ 'class' ],
        } );
    } );
    return cardsArray;
}

export const winOrLoseResult = winOrLose();
