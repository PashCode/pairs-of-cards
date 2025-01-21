import { displayCards } from './displayCards.js';
import { allCards, buttonCards, COUNT_CARDS } from './gameData.js';
import { intermediateChoice } from './gameData.js';

async function choicePairCards( createdCards ) {
    const createdCardsResult = await createdCards;

    allCards.addEventListener( 'click', ( e ) => {
        createdCardsResult.forEach( ( card ) => {
            if ( e.target === card.tag && e.target.classList.contains( 'card' ) ) {
                intermediateChoice.push( card.id );
                e.target.classList.add( 'click' );
            }
        } );

        if ( intermediateChoice.length === 2 ) {
            const [ first, second ] = intermediateChoice;
            createdCardsResult.forEach( ( card ) => {
                if ( first === second ) {
                    card.tag.classList.replace( 'click', 'clicked-both' );
                    intermediateChoice.length = 0;
                } else {
                    card.tag.classList.remove( 'click' );
                    intermediateChoice.length = 0;
                }
            } );
        } else {
            createdCardsResult.forEach( ( card ) => {
                    if ( e.target.classList.contains( 'card' ) ) {
                        card.tag.classList.add( 'disabled' );
                        setTimeout( () => card.tag.classList.remove( 'disabled' ), 300 );
                    }
                },
            );
        }
    } );
    return createdCards;
}

export const choicePairResult = choicePairCards( displayCards( COUNT_CARDS, allCards, buttonCards ) );









