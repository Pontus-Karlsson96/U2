function renderCharacterContainer(parent) {

    const container = document.getElementById(parent);
    const div = document.createElement('div');
    div.id = "charactersListContainer"
    container.appendChild(div);

    const h1 = document.createElement('h1');
    h1.textContent = "Characters";
    div.appendChild(h1);

    renderList("charactersListContainer");

};