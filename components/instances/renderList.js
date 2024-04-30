function renderList(parent) {


    const container = document.getElementById(parent);
    const ul = document.createElement('ul');
    ul.classList.add('list');

    if (parent == "gamesListContainer") {
        ul.id = "gamesList";
        container.appendChild(ul);

        const games = state_handler.get(_state.games);

        games.forEach((item) => {
            renderListItem(ul.id, item);

        })
    }

    if (parent == "charactersListContainer") {
        ul.id = "charactersList";
        container.appendChild(ul);

        const characters = state_handler.get(_state.characters);

        characters.forEach((item) => {

            renderListItem(ul.id, item);
        })
    };

    container.appendChild(ul);

};

function updateList(parent, entity) {

    const container = document.getElementById(parent);
    container.innerHTML = "";

    entity.forEach(item => {

        renderListItem(parent, item);
    });






}




