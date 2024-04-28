
// sparar state här vid runApp och updateState
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

    async updateState(entity) {
        const resourceGames = await fetchFunction(`./API/games.php?token=${token}`);
        const resourceCharacters = await fetchFunction(`./API/characters.php?token=${token}`);

        _state.games = resourceGames;
        _state.characters = resourceCharacters;




    },


    post: function (entity, resource) {


        this.updateState();

        const data = _state


        if (entity == "games") {
            _state.games.push(resource);
            return data.games;
        }

        else if (entity == "characters") {
            _state.characters.push(resource);
            return data.characters;
        }


    },

    patch: function (entity, resource) {

        this.updateState();

        const data = _state



        if (entity == "games") {
            _state.games.push(resource);
            return data.games


        }

        else if (entity == "characters") {
            _state.characters.push(resource);
            return data.characters


        }
    },

    delete: function (entity, resource) {

        this.updateState();

        const data = _state;

        if (entity == "games") {


            const resourceIndex = data.games.findIndex(game => game.id === resource.id);
            data.games.splice(resourceIndex, 1);

            return data.games


        }

        else if (entity == "characters") {



            const resourceIndex = data.characters.findIndex(character => character.id === resource.id);
            data.characters.splice(resourceIndex, 1);

            return data.characters

        }

    },



    get: function (data) {
        const copyEntity = JSON.parse(JSON.stringify(data));
        return copyEntity;

    }


};

//mitt inlog token

let token = "41ffb1370381d19ed31018e233ff85d1a62824d8";