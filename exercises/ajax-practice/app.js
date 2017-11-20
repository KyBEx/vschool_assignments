const myRequest = new XMLHttpRequest();
myRequest.open("GET", "https://swapi.co/api/people/", true);

myRequest.onload = function () {
    let myData = JSON.parse(myRequest.responseText);
    myData.results.map(object => {
        let para = document.createElement("p");
        let node = document.createTextNode(object.name);
        para.appendChild(node)
        document.getElementById('ref').insertAdjacentElement("beforeend", para)
    })


};
myRequest.send()

const myRequest2 = new XMLHttpRequest();
myRequest2.open("GET", "https://swapi.co/api/people/?page=2", true);

myRequest2.onload = function () {
    let myData = JSON.parse(myRequest2.responseText);
    myData.results.map(object => {
        let para = document.createElement("p");
        let node = document.createTextNode(object.name);
        para.appendChild(node)
        document.getElementById('ref').insertAdjacentElement("beforeend", para)
    })


};
myRequest2.send()
