async function fetchFunction(url, options) {

    try {

        let response;


        if (options === undefined) response = await fetch(url);

        else response = await fetch(url, options);

        let resource = await response.json();

        console.log(resource);

        if (response.ok) return resource;


        else return null;

    }

    catch (error) {

        console.warn(error.message);

    }

};


