function renderListItem(parent, item) {

    const container = document.getElementById(parent);

    const li = document.createElement('li');
    li.classList.add("listItem");

    li.id = `${parent}${item.id}`;
    let info = item;
    li.innerHTML = `${info.name} #${info.rating} Favourite: ${info.favorite}`

    container.appendChild(li);

    renderFavButton(li.id);
    renderDeleteButton(li.id);
}

function updateListItem(entity, objectId, row) {

    const data = entity;

    const rowId = row.id;

    let info;

    data.forEach((entity) => {

        if (entity.id == rowId) {
            info = entity;
        }
    });

    const listItem = document.getElementById(objectId);

    listItem.innerHTML = "";

    listItem.innerHTML = `${info.name} #${info.rating} Favourite: ${info.favorite} `

    renderFavButton(listItem.id);
    renderDeleteButton(listItem.id);

}
