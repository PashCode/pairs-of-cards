import { GAME_CONFIG } from './gameData.js';
import { nanoid } from 'https://unpkg.com/nanoid@4.0.2/nanoid.js';
import { preLoadImagesResult } from './preloadIImages.js';


async function createCards( cards ) {
    const imageMap = await preLoadImagesResult;

    return cards.flatMap( ( color ) => {
        const id = nanoid( 5 );
        const [ url1, url2 ] = imageMap.get( color );
        return [
            { id, imageKey: color, url: url1 },
            { id, imageKey: color, url: url2 },
        ];
    } );
}

export const createdCardsResult = createCards( GAME_CONFIG.QUANTITY_CARDS );