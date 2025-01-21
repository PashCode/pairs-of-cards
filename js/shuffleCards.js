import { addedTagResult } from './addTagToCard.js';
import { SELECTORS, GAME_CONFIG } from './gameData.js';

function shuffleCards( array ) {
    for ( let i = array.length - 1; i > 0; i-- ) {
        const j = Math.floor( Math.random() * ( i + 1 ) );
        [ array[ i ], array[ j ] ] = [ array[ j ], array[ i ] ];
    }
    return array;
}

async function shuffle() {
    const cardsTag = await addedTagResult;
    const shuffled = shuffleCards( cardsTag );

    shuffled.forEach( ( tag, index ) => {
        shuffled.length ? SELECTORS.SHUFFLE_BUTTON.innerText = 'Repeat shuffle' : SELECTORS.SHUFFLE_BUTTON.innerText = 'Start shuffle';
        // allCards.append( tag.tag );
        setTimeout( () => SELECTORS.ALL_CARDS.append( tag.tag ), index * 100 );
    } );

    return shuffled;
}

export const shuffleCardsResult = shuffle;

