function renderCounterContainer(parent) {
    const container = document.getElementById(parent);
    const ul = document.createElement('ul');



    ul.id = "counter";
    container.appendChild(ul);

    const gameCounter = document.createElement("li");
    gameCounter.id = "gameCounter";
    gameCounter.textContent = `Games: ${state_handler.get(_state.games.length)}`
    const charactersCounter = document.createElement("li");
    charactersCounter.id = "charactersCounter";
    charactersCounter.textContent = `Characters: ${state_handler.get(_state.characters.length)}`
    const favCounter = document.createElement("li");
    favCounter.id = "favCounter";
    updateFavCounter().then(favCount => {
        favCounter.textContent = `Favorites: ${favCount}`;
    });


    ul.appendChild(gameCounter);
    ul.appendChild(charactersCounter);
    ul.appendChild(favCounter);


}

