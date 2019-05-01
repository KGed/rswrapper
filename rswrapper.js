import {fetch} from 'node-fetch';

const getConfiguration = async ()=>{
    const url = 'https://secure.runescape.com/m=itemdb_rs/api/info.json';
    let data = fetch(url)
    .then(response => {
        if(response.ok){
            return response.json();
        }
    }).then(data => {
        return data;
    });
    return data;
}

export { getConfiguration }