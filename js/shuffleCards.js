import { addedTagResult } from './addTagToCard.js';
import { buttonCards, allCards } from './gameData.js';

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
        shuffled.length ? buttonCards.innerText = 'Repeat shuffle' : buttonCards.innerText = 'Start shuffle';
        // allCards.append( tag.tag );
        setTimeout( () => allCards.append( tag.tag ), index * 100 );
    } );

    return shuffled;
}

export const shuffleCardsResult = shuffle;

