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


        const rightEntity = findEntity(typeOfObjectToBePatched);


        const rightRow = state_handler.get(rightEntity[databaseID]);


        let fav = !rightRow.favorite;


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
            console.log(typeOfObjectToBePatched);
            let resource = await fetchFunction("../../API/games.php", options);
            console.log(resource);
        }

        else {
            let resource = await fetchFunction("../../API/characters.php", options);
            console.log("hej");
        }

        //fetch request does not work



    })

};



