function renderFormContainer(parent) {
    container = document.getElementById(parent);
    console.log(container);
    div = document.createElement('div');
    h1 = document.createElement('h1');
    form = document.createElement('form');
    input = document.createElement('input');
    select = document.createElement('select');
    button = document.createElement('button');

    renderCounterContainer(parent);
    container.appendchild(div);
    div.appendchild(h1);
    div.appendchild(form);
    div.appendchild(input);
    div.appendchild(select);
    div.appendchild(button);











};