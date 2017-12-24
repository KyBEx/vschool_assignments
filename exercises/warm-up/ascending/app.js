// For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
// sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

function sortMaybe(arr) {

    arr.sort(function(a,b) {
            return a - b

    })

    return arr


}

console.log(sortMaybe([-1, 150, 190, 170, -1, -1, 160, 180]))
