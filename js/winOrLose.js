import { choicePairResult } from './choiceCards.js';
import { allCards } from './gameData.js';

export async function winOrLose() {
    const cardsArray = await choicePairResult;

    const observer = new MutationObserver( () => {
        const isAllCardsMatched = cardsArray.every( c => c.tag.classList.contains( 'clicked-both' ) );
        if ( isAllCardsMatched ) {
            const victory = document.createElement( 'p' );
            victory.innerText = 'Victory!';
            allCards.append( victory );
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
