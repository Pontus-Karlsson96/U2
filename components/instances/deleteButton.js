function renderDeleteButton(parent) {
    const container = document.getElementById(parent);
    const button = document.createElement('button');
    button.textContent = "Delete"

    container.appendChild(button);

    button.addEventListener("click", async (event) => {

        //Find ID of object to be deleted 
        const typeOfObjectToBeDeleted = event.target.parentElement.parentElement.id;

        const objectToBeDeleted = event.target.parentElement.id;

        const databaseID = objectToBeDeleted.slice(typeOfObjectToBeDeleted.length);



        //prepare fetch

        const body = {
            id: databaseID,
            token: token


        };

        const options = {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)

        };
        console.log(options);


        let resource;

        if (typeOfObjectToBeDeleted == "gamesList") {
            let resource = await fetchFunction("../../API/games.php)", options);
            console.log("test");

        }

        else {
            let resource = await fetchFunction("../../API/characters.php", options);
            console.log("hej");
        };


    })
};

//DELETE request funkar ej
