let endpoint = "http://localhost:8080/monkeys";
let query = {
  color: "black",
  species: "howler",
  region: "nigeria"
}


function stringifyUrl(endpoint, query) {
    const keysAndValues = Object.entries(query)
    const pairs = keysAndValues.map( pair => {
      return `${pair[0]}=${pair[1]}`
    })
    return `${endpoint}?${pairs.join("&")}`

}


function reverseStringifyUrl(url) {
  let urlActual = url.slice(0, url.indexOf("?"));
  let object = url.slice(url.indexOf("?")+1)
  let array= object.split("&");
  const obj = array.map(obj => {
    const pairs = obj.split("=");
    return pairs
  })
  const finalObj = {};
  for (let i = 0; i < obj.length; i++) {
      finalObj[obj[i][0]] = obj[i][1]
  }

  return {
    url: urlActual,
    query: finalObj
}
}

console.log(reverseStringifyUrl("http://localhost:8080/monkeys?color=black&species=howler&region=nigeria"))
