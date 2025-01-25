import { addedTagResult } from './addTagToCard.js';
import { SELECTORS, CLASSES } from './gameData.js';


function shuffleCards( array ) {
    for ( let i = array.length - 1; i > 0; i-- ) {
        const j = Math.floor( Math.random() * ( i + 1 ) );
        [ array[ i ], array[ j ] ] = [ array[ j ], array[ i ] ];
    }
    return array;
}

export async function shuffle() {
    const cardsTag = await addedTagResult;
    const shuffled = await shuffleCards( cardsTag );

    shuffled.forEach( ( tag, index ) => {
        setTimeout( () => {
            const createContainerCard = document.createElement( 'div' );
            SELECTORS.ALL_CARDS.append( createContainerCard );
            createContainerCard.classList.add( CLASSES.CARDS_CONTAINER );
            createContainerCard.append( tag.hiddenTag );
        }, index * 100 );
    } );

    // return shuffled;
}

// export const shuffleCardsResult = shuffle;



