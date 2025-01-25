import { GAME_STATE, SELECTORS, CLASSES } from './gameData.js';

function clickCounts() {
    let gameData = JSON.parse( localStorage.getItem( GAME_STATE.STORAGE_KEY ) ) || {
        intermediate: 0,
        final: 0,
    };

    function updateRecordDisplay() {
        SELECTORS.RECORD_COUNTER.innerText = gameData.final || 0;
        SELECTORS.RECORD_CONTAINER.append( SELECTORS.RECORD_COUNTER );
    }

    function saveGameData() {
        localStorage.setItem( GAME_STATE.STORAGE_KEY, JSON.stringify( gameData ) );
    }

    function resetGame() {
        SELECTORS.CURRENT_CLICKS_COUNTER.innerText = 0;
        SELECTORS.ALL_CARDS.classList.remove( CLASSES.WIN_GAME );
        gameData.intermediate = 0;
        GAME_STATE.clicksCountStorage.intermediate = 0;
    }

    function checkRecord() {
        if ( !SELECTORS.ALL_CARDS.className.includes( CLASSES.WIN_GAME ) ) return;

        const currentClicks = GAME_STATE.clicksCountStorage.intermediate;

        if ( !gameData.final || currentClicks < gameData.final ) {
            gameData.final = currentClicks;
            updateRecordDisplay();
        }

        gameData.intermediate = 0;
        saveGameData();
    }

    SELECTORS.SHUFFLE_BUTTON.addEventListener( 'click', resetGame );
    SELECTORS.START_GAME_BUTTON.addEventListener( 'click', resetGame );

    SELECTORS.ALL_CARDS.addEventListener( 'click', ( e ) => {
        const clickedCard = e.target.closest( `.${ CLASSES.CARDS_HIDDEN }` );
        if ( clickedCard ) {
            GAME_STATE.clicksCountStorage.intermediate++;
            SELECTORS.CURRENT_CLICKS_COUNTER.innerText = GAME_STATE.clicksCountStorage.intermediate;
            SELECTORS.CURRENT_CLICKS_CONTAINER.append( SELECTORS.CURRENT_CLICKS_COUNTER );

            localStorage.setItem( GAME_STATE.STORAGE_KEY, JSON.stringify( GAME_STATE.clicksCountStorage ) );

            setTimeout( checkRecord, 100 );
        }
    } );

    updateRecordDisplay();
    saveGameData();
}

clickCounts();