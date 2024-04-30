function renderStructure() {
    div = document.createElement('div');
    body = document.querySelector('body');

    body.appendChild(div);

    div.id = "wrapper";

    body.appendChild(div);

    renderFormContainer("wrapper");
    renderGamesContainer("wrapper");
    renderCharacterContainer("wrapper");

};


