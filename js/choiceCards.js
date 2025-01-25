import { displayCards } from './displayCards.js';
import { SELECTORS, GAME_STATE, CLASSES, GAME_CONFIG } from './gameData.js';
import { createdCardsResult } from './createCards.js';

async function choicePairCards( createdCards ) {
    const createdCardsResult = await createdCards;

    SELECTORS.ALL_CARDS.addEventListener( 'click', ( e ) => {
        createdCardsResult.forEach( ( card ) => {
            if ( e.target === card.hiddenTag ) {
                const clickedCard = e.target.closest( '.hidden-card' );
                if ( clickedCard ) {
                    const cardContainer = clickedCard.closest( '.cards-container' );
                    const containerIndex = Array.from( SELECTORS.ALL_CARDS.querySelectorAll( '.cards-container' ) ).indexOf( cardContainer );
                    SELECTORS.ALL_CARDS.children[ containerIndex ].append( card.visibleTag );
                    e.target.classList.add( CLASSES.CLICKED );
                }
            }

            if ( e.target === card.hiddenTag && e.target.classList.contains( CLASSES.CARDS_HIDDEN ) ) {
                GAME_STATE.intermediateChoice.currentSelection.push( card.id );
                e.target.classList.add( CLASSES.CLICKED );
            }
        } );

        if ( GAME_STATE.intermediateChoice.currentSelection.length === 2 ) {
            const [ first, second ] = GAME_STATE.intermediateChoice.currentSelection;
            createdCardsResult.forEach( ( card ) => {
                if ( first === second ) {
                    e.target.classList.add( CLASSES.HIDDEN );
                    card.hiddenTag.classList.replace( CLASSES.CLICKED, CLASSES.MATCHED );
                    GAME_STATE.intermediateChoice.currentSelection.length = 0;
                } else {
                    if ( card.hiddenTag.classList.contains( CLASSES.CLICKED ) ) {
                        e.target.classList.add( CLASSES.HIDDEN );
                        setTimeout( () => {
                            card.visibleTag.remove();
                            card.hiddenTag.classList.remove( CLASSES.CLICKED, CLASSES.HIDDEN );
                        }, 500 );

                    }
                    GAME_STATE.intermediateChoice.currentSelection.length = 0;
                }
            } );
        } else {
            createdCardsResult.forEach( ( card ) => {
                    if ( e.target.classList.contains( CLASSES.CLICKED ) ) {
                        e.target.classList.add( CLASSES.HIDDEN );
                        card.hiddenTag.classList.add( CLASSES.DISABLED );
                        setTimeout( () => card.hiddenTag.classList.remove( CLASSES.DISABLED ), 200 );
                    }
                },
            );
        }
    } );
    return createdCards;
}

export const choicePairResult = choicePairCards( createdCardsResult );









