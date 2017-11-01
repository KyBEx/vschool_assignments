

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
        var cell4 = row.insertCell(3);
        cell4.className = 'col4Image';
        var title;
        var description;
        var price;
        var image;
        title = response.data[i].title;
        document.getElementsByClassName('col1Title')[i].innerText = title;
        description = response.data[i].description;
        document.getElementsByClassName('col2Description')[i].innerText = description;
        price = response.data[i].price;
        document.getElementsByClassName('col3Price')[i].innerText = price;
        image = response.data[i].imgUrl;
        document.getElementsByClassName('col4Image')[i].innerText = image;

    }
});



// var row = table.insertRow(-1);
// var cell1 = row.insertCell(0);
// var cell2 = row.insertCell(1);
// var cell3 = row.insertCell(2);
// var cell4 = row.insertCell(3);
