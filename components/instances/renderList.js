function renderList(parent) {


    const container = document.getElementById(parent);
    const ul = document.createElement('ul');
    ul.classList.add('list');

    if (parent == "gamesListContainer") {
        ul.id = "gamesList";
        container.appendChild(ul);

        const games = state_handler.get(_state.games);



        games.forEach((item, index) => {
            renderListItem(ul.id, item, index);

        })


    }

    if (parent == "charactersListContainer") {
        ul.id = "charactersList";
        container.appendChild(ul);

        const characters = state_handler.get(_state.characters);



        characters.forEach((item, index) => {

            renderListItem(ul.id, item, index);
        })


    };

    container.appendChild(ul);

};

function updateList(pickedList) {
    const list = document.getElementById(pickedList);
    console.log(pickedList);
    list.textContent = "";

    if (list === "gamesList") {
        const games = state_handler.get(_state.games);

        games.forEach((item, index) => {
            renderListItem(list, item, index);
        })


    }

    else {
        const characters = state_handler.get(_state.characters);

        characters.forEach((item, index) => {
            renderListItem(list, item, index);
        })
    }


}




