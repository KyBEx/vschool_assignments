var axios = require("axios")

axios.get("http://dnd5eapi.co/api/classes/1")
    .then((response) => console.log(response.data))
