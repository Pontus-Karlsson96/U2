function renderCounterContainer(parent) {
    const container = document.getElementById(parent);
    const ul = document.createElement('ul');

    ul.id = "counter";
    container.appendChild(ul);

    const gameCounter = document.createElement("li");
    gameCounter.id = "gameCounter";
    gameCounter.textContent = `Games:`;
    const charactersCounter = document.createElement("li");
    charactersCounter.id = "charactersCounter";
    charactersCounter.textContent = `Characters:`
    const favCounter = document.createElement("li");
    favCounter.id = "favCounter";
    favCounter.textContent = `Favorites:`;



    ul.appendChild(gameCounter);
    ul.appendChild(charactersCounter);
    ul.appendChild(favCounter);
    updateCounterContainer();

};

async function updateCounterContainer() {
    const gameCounter = document.getElementById('gameCounter');
    const characterCounter = document.getElementById('charactersCounter');
    const favCounter = document.getElementById('favCounter');

    gameCounter.textContent = "";
    characterCounter.textContent = "";
    favCounter.textContent = "";

    await state_handler.updateState();
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

    gameCounter.textContent = `Games: ${games.length}`;
    characterCounter.textContent = `Characters: ${characters.length}`;
    favCounter.textContent = `Favorites: ${fav}`;
};










