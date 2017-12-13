// example:
let database = [
{a: 1, b: 1, c: 2},
{a: 0, b: 0, c: 2},
{a: 0, b: 1, c: 0},
{a: 1, b: 2, c: 2}
];

// filterDatabase({}, database);
  //returns entire database array

// filterDatabase({dolphin: "squeak!"});
  //returns empty array

// filterDatabase({a: 1, c: 2});
  //returns
// [
//   {a: 1, b: 1, c: 2},
//   {a: 1, b: 2, c: 2}
// ]

function filter(query, database) {
    if (Object.keys(query).length) {
        const matches = database.filter((entry,i) => {
            for (x in entry) {
                
            }
        })

        console.log(matches)
    } else {
        return database
    }



}

filter({a: 0, c: 0}, database)

// problem is that this is loking at one part of the query instead of the whole
