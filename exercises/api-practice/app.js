

// var title = axios.get("https://api.vschool.io/kylehutchinson/todo/").then(function(response) {
//     var title;
//     title = response.data[0].title;
//     document.getElementById('row1Title').innerText = title;
// });


// for (var i = 0; i < response.data.length; i++) {
//
// }



var title = axios.get("https://api.vschool.io/kyle/todo/").then(function(response) {
    for (var i = 0; i < response.data.length; i++) {
        var table = document.getElementById("chores")
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        cell1.className = 'col1Title'
        var cell2 = row.insertCell(1);
        cell2.className = 'col2Description'
        var cell3 = row.insertCell(2);
        cell3.className = 'col3Price'
        var title;
        var description;
        var price;
        title = response.data[i].title;
        document.getElementsByClassName('col1Title')[i].innerText = title;
        description = response.data[i].description;
        document.getElementsByClassName('col2Description')[i].innerText = description;
        price = response.data[i].price;
        document.getElementsByClassName('col3Price')[i].innerText = price;
    }
});

var button = document.getElementById("submit");
button.addEventListener("click", function(){
    var newTodo = {
        "title": document.getElementById('newTitle').value,
        "description": document.getElementById("newDescription").value,
        "price": document.getElementById("newPrice").value,
    };
    axios.post("https://api.vschool.io/kyle/todo/", newTodo).then(function(response){
        location.reload(true);
    });
})
