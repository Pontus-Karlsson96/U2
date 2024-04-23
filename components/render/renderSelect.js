function renderSelect(parent) {

    const label = document.createElement('label');
    label.textContent = "Rating";


    const select = document.createElement('select')
    const container = document.getElementById(parent);
    select.id = 'select';
    container.appendChild(label);
    container.appendChild(select);

    for (let i = 1; i < 11; i++) {

        const option = document.createElement('option');
        select.appendChild(option);

        option.text = i;

    }





}
