function renderFormButtons(parent, number) {

    const container = document.getElementById(parent);
    const button = document.createElement('button');


    if (number == "1") {
        button.id = "gamesButton";
        button.textContent = "Game"
    } else {
        button.id = "charactersButton";
        button.textContent = "Characters";


    }

    container.appendChild(button);
    button.addEventListener("click", async (event) => {


        let itemName = document.getElementById("input").value;
        let rating = document.getElementById("select").value;

        const body = {
            token: token,
            name: itemName,
            rating: rating,
            favorite: false
        }

        const options = {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(body)
        }

        if (event.target.id.includes("games")) {
            let resource = await fetchFunction("../../API/games.php", options);
            const entity = state_handler.post("games", resource);

            updateList("gamesList", entity);

        }


        else {

            let resource = await fetchFunction("../../API/characters.php", options);
            const entity = state_handler.post("characters", resource);

            updateList("charactersList", entity);



        }
    });



}

