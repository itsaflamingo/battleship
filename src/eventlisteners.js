import {ps} from './pubsub.js'
    
function click (comp, player) {
    const tiles = document.querySelectorAll('.tile');

    tiles.forEach((tile) => tile.addEventListener('click', (e) => {
        const target = e.target.id;
        console.log(target);
        ps.publish('player-turn', target);
        console.log('player', player);
        ps.publish('player-turn', target);
        console.log('comp', comp);

    }));
}


export {click}

