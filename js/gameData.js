export const GAME_STATE = {
    intermediateChoice: { currentSelection: [], healthPoints: [] },
    gameVales: [],
    clicksCountStorage: { intermediate: 0, final: 0 },
    STORAGE_KEY: 'clickedCounter',
};


export const GAME_CONFIG = {
    QUANTITY_CARDS: [ 'first', 'second', 'third' ],
    INITIAL_HEALTH: 3,
    FLIP_DELAY: 300,
    ANIMATION_DELAY: 100,
};

export const SELECTORS = {
    ALL_CARDS: document.querySelector( '.all-cards' ),
    START_GAME_CONTAINER: document.querySelector( '.game-container__start-game' ),
    SHUFFLE_BUTTON: document.querySelector( '.shuffle-cards-button' ),
    START_GAME_BUTTON: document.querySelector( '.start-game' ),
    ANOTHER_LEVEL_BUTTON: document.querySelector( '.another-level-button' ),
    HEALTH_CONTAINER: document.querySelector( '.health' ),
    HEALTH_COUNTER: document.querySelector( '.quantity-health' ),
    RECORD_CONTAINER: document.querySelector( '.record' ),
    RECORD_COUNTER: document.querySelector( '.quantity-record' ),
    CURRENT_CLICKS_CONTAINER: document.querySelector( '.clicks-now' ),
    CURRENT_CLICKS_COUNTER: document.querySelector( '.quantity-clicks' ),
    WIN_GAME_MESSAGE: document.createElement( 'p' ),
    // CREATE_CARDS_CONTAINER: document.createElement( 'div' )
};

export const CLASSES = {
    CARDS_CONTAINER: 'cards-container',
    CARD: 'visible-card',
    CARDS_HIDDEN: 'hidden-card',
    CLICKED: 'click',
    MATCHED: 'clicked-both',
    DISABLED: 'disabled',
    HIDDEN: 'hidden',
    WIN_GAME: 'win-game',
};
