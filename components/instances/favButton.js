function renderFavButton(parent) {
    const container = document.getElementById(parent);
    const button = document.createElement('button');
    button.textContent = "Fav";

    container.appendChild(button);

    button.addEventListener("click", async (event) => {

        //find ID of the object to be pached
        const typeOfObjectToBePatched = event.target.parentElement.parentElement.id;


        const objectToBePatchedId = event.target.parentElement.id;

        const databaseID = objectToBePatchedId.slice(typeOfObjectToBePatched.length);


        //find status of fav
        const correctEntity = findEntity(typeOfObjectToBePatched);

        //find entity function
        function findEntity(item) {
            const data = state_handler.get(_state);

            if (item === "gamesList") {
                return data.games
            }

            else {
                return data.characters
            }
        }

        //find the object

        let correctRow;

        correctEntity.forEach((entity) => {

            if (entity.id == databaseID) {
                correctRow = entity;
            }
        });



        let fav = !correctRow.favorite;

        //prepare fetch
        const body = {

            token: token,
            id: databaseID,
            favorite: fav
        };

        const options = {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        };


        let resource;

        if (typeOfObjectToBePatched == "gamesList") {

            let resource = await fetchFunction("../../API/games.php", options);

            const entity = state_handler.patch("games", resource);



            updateListItem(entity, objectToBePatchedId, correctRow);
            updateCounterContainer();
        }

        else {
            let resource = await fetchFunction("../../API/characters.php", options);
            const entity = state_handler.patch("characters", resource);

            updateListItem(entity, objectToBePatchedId, correctRow);
            updateCounterContainer();
        }

    })

};



