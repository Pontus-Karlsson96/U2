const _state = {


};




const state_handler = {

    async runApp() {
        const resourceGames = await fetchFunction(`./API/games.php?token=${token}`);
        const resourceCharacters = await fetchFunction(`./API/characters.php?token=${token}`);


        _state.games = resourceGames;
        _state.characters = resourceCharacters;



        renderStructure();


    },

    async updateState() {
        const resourceGames = await fetchFunction(`./API/games.php?token=${token}`);
        const resourceCharacters = await fetchFunction(`./API/characters.php?token=${token}`);

        _state.games = resourceGames;
        _state.characters = resourceCharacters;


    },


    post: function (entity_name, row) {

        switch (entity_name) {

            case "games":
                //FETCH
                fetchFunction(token, entity_name, row)
                updateLeftContainer();
                renderFavCounter("formContainer");
                break;

            case "characters":
                //FETCH
                updateRightContainer();
                renderFavCounter("formContainer");
                break;

            default:
                console.log("category not found");


        }
    },

    patch: function (entity_name, id, fields, values) {
        switch (entity_name) {

            case "games":
                let findGameObject = _state[entity_name].find(item => item.id == id);


                for (let i = 0; i < entity_name.length; i++) {
                    findGameObject[fields[i]] = values[i];

                }
                updateLeftContainer();

                renderFavCounter("formContainer");

                break;

            case "characters":
                let findCharacterObject = _state[entity_name].find(item => item.id == id);


                for (let i = 0; i < entity_name.length; i++) {
                    findCharacterObject[fields[i]] = values[i];
                }
                updateRightContainer();

                renderFavCounter("formContainer");

                break;

            default: console.log("Could not patch");


        }

    },

    delete: function (entity_name, id) {


        switch (entity_name) {


            case "games":

                let gameIndex = _state[entity_name].findIndex(item => item.id == id);

                _state[entity_name].splice(gameIndex, 1);

                updateLeftContainer();

                renderFavCounter("formContainer");

                break;

            case "characters":

                let characterIndex = _state[entity_name].findIndex(item => item.id === id);

                _state[entity_name].splice(characterIndex, 1);

                updateRightContainer();

                renderFavCounter("formContainer");

                break;

            default: console.log("Could not delete"); console.log(entity_name, id);

        }




    },

    get: function (data) {
        const copyEntity = JSON.parse(JSON.stringify(data));
        return copyEntity;

    }












}

let token = "41ffb1370381d19ed31018e233ff85d1a62824d8";