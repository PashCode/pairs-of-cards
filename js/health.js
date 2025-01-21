import { allCards, parentHealth, health } from './gameData.js';
import {winOrLoseResult} from './winOrLose.js';

function countHealth( cards ) {
    let quantityHealth = 3;
    const checkChoice = [];

    cards.then( ( cards ) => {
        health.textContent = quantityHealth;

        allCards.addEventListener( 'click', ( e ) => {
                cards.forEach( ( card ) => {
                    if ( e.target === card.tag && e.target.classList.contains( 'card' ) ) {
                        checkChoice.push( card.id );
                    }
                } );

                if ( checkChoice.length === 2 ) {
                    const [ firstClick, secondClick ] = checkChoice;
                    if ( firstClick === secondClick ) {
                        checkChoice.length = 0;
                    } else {
                        quantityHealth -= 1;
                        health.textContent = quantityHealth;
                        checkChoice.length = 0;
                        if ( quantityHealth === 0 ) parentHealth.textContent = 'lose';
                    }
                }
            },
        )
        ;
    } );
}


countHealth( winOrLoseResult );