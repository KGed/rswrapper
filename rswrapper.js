const fetch = require('node-fetch');


/*
    Function:   getConfiguration
    Params:     null
    Purpose:    returns a Promise for a JSON response from the Runescape API. Response is the 'Runedate' of the last time the GE was updated.
*/
const getConfiguration = () => {
    const url = 'https://secure.runescape.com/m=itemdb_rs/api/info.json';
    return fetchFromAPI(url);
}

/*
    Function:   getCatalogueByCategory
    Params:     category = integer/string
    Purpose:    returns a Promise for a JSON reponse from the Runescape API. Response is a list containing the number of items in that category associated with the beginning letter.
*/
const getCatalogueByCategory = (category) => {
    const url = `http://services.runescape.com/m=itemdb_rs/api/catalogue/category.json?category=${category}`;
    return fetchFromAPI(url);
}

/*
    Function:   getCatalogueByAlpha
    Params:     category = integer/string
                alpha    = string
                page     = integer/string
    Purpose:    returns a Promise for a JSON reponse from the Runescape API. Response is a list of items from the GE with the first letter provided on the page provided.
*/
const getCatalogueByAlpha = (category, alpha, page) => {
    const url = `http://services.runescape.com/m=itemdb_rs/api/catalogue/items.json?category=${category}&alpha=${alpha}&page=${page}`;
    return fetchFromAPI(url);
}


/*
    Function:   getCatalogueItemDetail
    Params:     itemID = integer/string
    Purpose:    returns a Promise for a JSON reponse from the Runescape API. Response is a details about a specific item on the GE.
*/
const getCatalogueItemDetail = (itemID) => {
    const url = `http://services.runescape.com/m=itemdb_rs/api/catalogue/detail.json?item=${itemID}`;
    return fetchFromAPI(url); 
}



/*
    Function:   fetchFromAPI
    Params:     url = string
    Purpose:    using the node-fetch module, verify the response is ok and then return the promise for a json response.
*/
const fetchFromAPI = (url) => {
    return fetch(url)
    .then(response => {
        if(response.ok){
            return response.json();
        }
    })
}


module.exports = {
    getConfiguration,
    getCatalogueByAlpha,
    getCatalogueByCategory,
    getCatalogueItemDetail
}