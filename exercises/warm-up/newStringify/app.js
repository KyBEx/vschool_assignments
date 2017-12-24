let endpoint = "http://localhost:8080/monkeys";
const query = {
  color: "black",
  species: "howler"
}
stringifyUrl(endpoint, query);
// returns "http://localhost:8080/monkeys?color=black&species=howler"

function stringifyUrl(url, obj) {
    if(!Object.keys(obj).length) {
        return url
    }


    let queryString = "?"
    for ( let key in obj) {
            queryString += `${key}=${obj[key]}&`
    }
    console.log(queryString)
}
