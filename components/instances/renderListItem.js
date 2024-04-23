function renderListItem(parent, item, index) {
    console.log(parent);
    const container = document.getElementById(parent);

    if (!container) {
        console.error(`Parent container '${parent}' not found.`);
        return;
    }

    const li = document.createElement('li');
    li.classList.add("listItem");

    li.id = `${parent}${index + 1}`;
    let info = item;
    li.innerHTML = `${info.name} #${info.rating} Favourite: ${info.favorite}`

    container.appendChild(li);

    renderFavButton(li.id);
    renderDeleteButton(li.id);







}