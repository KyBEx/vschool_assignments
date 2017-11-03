

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
        // row.id = "row" + i;
        // console.log(row.id);
        var cell1 = row.insertCell(0);
        console.dir(cell1)
        cell1.contentEditable = true;
        cell1.className = 'col1Title';
        var cell2 = row.insertCell(1);
        cell2.className = 'col2Description';
        var cell3 = row.insertCell(2);
        cell3.className = 'col3Price';
        var cell4 = row.insertCell(3);
        cell4.className = 'col4Image';
        var cell5 = row.insertCell(4);
        cell5.className = 'col5Check';
        var cell6 = row.insertCell(5);
        cell6.className = 'col6Check';
        var title;
        var description;
        var price;
        var image = document.createElement('img');
        var checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.id = response.data[i]._id
        var deleteBut = document.createElement("button");
        deleteBut.id=response.data[i]._id;
        deleteBut.innerText="Delete";
        title = response.data[i].title;
        document.getElementsByClassName('col1Title')[i].innerText = title;
        description = response.data[i].description;
        document.getElementsByClassName('col2Description')[i].innerText = description;
        price = response.data[i].price;
        document.getElementsByClassName('col3Price')[i].innerText = price;
        image.src = response.data[i].imgUrl;
        image.alt = "no image"
        // image.style.height= "200px";
        // image.style.width= "200px";
        cell4.append(image);
        cell5.append(checkBox);
        cell6.append(deleteBut)
        if(response.data[i].completed === true) {
            checkBox.checked = true;
            row.style.textDecoration=
            "line-through";
        }
        checkBox.addEventListener('click', function(event){
//  on line 66, have to use the ID of the event aka the checkbox button, or the delete button.  the Event is the object of the click event.  One property is the actal element the eent happened to (target).  Target has its own properties, including the id
            var url="https://api.vschool.io/kyle/todo/"+event.target.id;
            var newCheck = {
                "completed" : true
            };
            axios.put(url, newCheck).then(function(response){
                location.reload(true);
            });
        });

        deleteBut.addEventListener('click', function(event) {
            var url = "https://api.vschool.io/kyle/todo/"+event.target.id;
            axios.delete(url).then(function(response){
                location.reload(true);
            })
        })

    };

});

var button = document.getElementById("submit");
button.addEventListener("click", function(){
    var newTodo = {
        "title": document.getElementById('newTitle').value,
        "description": document.getElementById("newDescription").value,
        "price": document.getElementById("newPrice").value,
        "imgUrl": document.getElementById("url").value
    };
    axios.post("https://api.vschool.io/kyle/todo/", newTodo)
    .then(function(response){
        location.reload(true);
    });
})
