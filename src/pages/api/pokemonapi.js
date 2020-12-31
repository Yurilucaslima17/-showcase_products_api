import axios from "axios";

export default async function RequestData() {
    const min = Math.ceil(0);
    const max = Math.floor(200);
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${random}`);

    console.log(data);

    const response = await data.results.map(result => axios.get(`${result.url}`))

    console.log(response);

    return await response;
}