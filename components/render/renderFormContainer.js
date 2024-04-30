function renderFormContainer(parent) {
    wrapper = document.getElementById(parent);
    const div = document.createElement('div');
    div.id = "formContainer";
    wrapper.appendChild(div);

    const h1 = document.createElement('h1');
    const form = document.createElement('form');
    const input = document.createElement('input');
    const select = document.createElement('select');


    h1.id = "formHeader";
    h1.textContent = "Enter Games or Characters";
    div.appendChild(h1);

    form.id = "form";
    form.addEventListener("submit", (e) => e.preventDefault()); // e.preventDefault() disables the default event attached to the element.
    div.appendChild(form);

    input.id = "input";
    form.appendChild(input);

    select.id = "select";


    renderSelect("form");

    renderFormButtons("form", 1);
    renderFormButtons("form", 2);

    renderCounterContainer("formContainer");


};