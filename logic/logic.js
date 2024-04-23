async function updateFavCounter() {
    const games = await state_handler.get(_state.games);
    const characters = await state_handler.get(_state.characters);

    let fav = 0;

    for (let game of games) {
        if (game.favorite) {
            fav++;
        }
    }

    for (let character of characters) {
        if (character.favorite) {
            fav++;
        }
    }

    return fav;
}

function findEntity(item) {
    const data = state_handler.get(_state);

    if (item === "gamesList") {
        return data.games
    }

    else {
        return data.characters
    }
}

