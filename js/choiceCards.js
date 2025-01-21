import { displayCards } from './displayCards.js';
import { SELECTORS, GAME_STATE, CLASSES } from './gameData.js';

console.log();

async function choicePairCards( createdCards ) {
    const createdCardsResult = await createdCards;

    SELECTORS.ALL_CARDS.addEventListener( 'click', ( e ) => {
        createdCardsResult.forEach( ( card ) => {
            if ( e.target === card.tag && e.target.classList.contains( CLASSES.CARD ) ) {
                GAME_STATE.intermediateChoice.currentSelection.push( card.id );
                e.target.classList.add( CLASSES.CLICKED );
            }
        } );

        if ( GAME_STATE.intermediateChoice.currentSelection.length === 2 ) {
            const [ first, second ] = GAME_STATE.intermediateChoice.currentSelection;
            createdCardsResult.forEach( ( card ) => {
                if ( first === second ) {
                    card.tag.classList.replace( CLASSES.CLICKED, CLASSES.MATCHED );
                    GAME_STATE.intermediateChoice.currentSelection.length = 0;
                } else {
                    card.tag.classList.remove( CLASSES.CLICKED );
                    GAME_STATE.intermediateChoice.currentSelection.length = 0;
                }
            } );
        } else {
            createdCardsResult.forEach( ( card ) => {
                    if ( e.target.classList.contains( CLASSES.CLICKED ) ) {
                        card.tag.classList.add( CLASSES.DISABLED );
                        setTimeout( () => card.tag.classList.remove( CLASSES.DISABLED ), 300 );
                    }
                },
            );
        }
    } );
    return createdCards;
}

export const choicePairResult = choicePairCards( displayCards() );









