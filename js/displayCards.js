import { GAME_STATE, CLASSES, SELECTORS } from './gameData.js';
import { shuffle } from './shuffleCards.js';


export function displayCards() {
    SELECTORS.SHUFFLE_BUTTON.addEventListener( 'click', () => {
        setTimeout( () => shuffle(), 50 );


        GAME_STATE.gameVales.forEach( ( card ) => {
                // const allCardsContainer = card.hiddenTag.closest( '.all-cards' );
            // console.log(allCardsContainer);
            //     if ( allCardsContainer ) {
                    SELECTORS.ALL_CARDS.classList.remove( CLASSES.WIN_GAME, CLASSES.LOSE_GAME );
                // }

                card.hiddenTag
                    .classList.remove( CLASSES.MATCHED, CLASSES.HIDDEN, CLASSES.CLICKED );
            },
        );

        GAME_STATE.intermediateChoice.currentSelection.length = 0;
        SELECTORS.ALL_CARDS.replaceChildren();
    } );
}

displayCards();



