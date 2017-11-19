// n 1; areay 1
// n2, area 5
// n3, area 13
// n4, area 25

// (n*1) + 0
// (2*2) + 1
// (3*3) + 4
// (4*4) + 9
// (5*5) + 16


function shapeArea(n) {
    return (n*n) + Math.pow(n-1, 2)
}

shapeArea(2)
