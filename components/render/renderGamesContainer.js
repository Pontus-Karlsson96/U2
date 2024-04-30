function renderGamesContainer(parent) {

    const container = document.getElementById(parent);
    const div = document.createElement('div');
    div.id = "gamesListContainer"
    container.appendChild(div);

    const h1 = document.createElement('h1');
    h1.textContent = "Games";
    div.appendChild(h1);

    renderList("gamesListContainer");

};