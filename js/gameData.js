// export const allCards = document.querySelector( '.all-cards' );
// export const buttonCards = document.querySelector( '.shuffle-cards-button' );
// export const parentHealth = document.querySelector( '.health' );
// export const health = document.querySelector( '.quantity-health' );

// export const COUNT_CARDS = [ 'first', 'second', 'third' ];
// export const intermediateChoice = [];

export const GAME_STATE = {
    intermediateChoice: [],
};
export const GAME_CONFIG = {
    QUANTITY_CARDS: [ 'first', 'second', 'third' ],
    INITIAL_HEALTH: 3,
    FLIP_DELAY: 300,
    ANIMATION_DELAY: 100,
};

export const SELECTORS = {
    ALL_CARDS: document.querySelector( '.all-cards' ),
    SHUFFLE_BUTTON: document.querySelector( '.shuffle-cards-button' ),
    HEALTH_CONTAINER: document.querySelector( '.health' ),
    HEALTH_COUNTER: document.querySelector( '.quantity-health' ),
};

export const CLASSES = {
    CARD: 'card',
    CLICKED: 'click',
    MATCHED: 'clicked-both',
    DISABLED: 'disabled',
};
