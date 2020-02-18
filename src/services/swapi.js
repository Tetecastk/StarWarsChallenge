import { create } from "apisauce";

const swapi = create({
    baseURL: 'https://swapi.co/api/'
})

export default swapi;