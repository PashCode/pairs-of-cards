export const GAME_STATE = {
    intermediateChoice: {
        currentSelection: [],
        healthPoints: [],
    },
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
};

export const CLASSES = {
    CARD: 'card',
    CLICKED: 'click',
    MATCHED: 'clicked-both',
    DISABLED: 'disabled',
    HIDDEN: 'hidden'
};
