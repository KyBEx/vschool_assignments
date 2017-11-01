// var phone = {
//     brand: "Samsung",
//     model: "Galaxy s7",
//     age: 2,
//     isUnderContract: false,
//     brandModel: function() {
//         console.log(phone.brand + " " + phone.model)
//     }
// };
//
var laptop = {
    brand: "Apple",
    model: {
        type: "MacBook Pro",
        year: 2013,
        specs: {
            processor: "Intel i7",
            memory: "16 GB RAM",
            hardDrive: "512 GB Flash Memory"
        }
    },
    isNew: false,
    getBrand: function () {
        console.log(laptop.brand);
    }
};

// laptop.getBrand();

// console.log(laptop.model.specs.processor)

// //the  code is not working **UPDATE**---you were forgetting that monitors is an array of objects--were leaving off the array index

var monitors = [
    {
      model: "ASUS",
      year: 2015,
      isNew: function() {
        if (monitors.year >= 2016) {
            console.log("It's new");
        } else {
            console.log("It's not new");
        }
      }
    },
    {
    model: "Samsung",
    year: "2010"
    }
];
console.log(monitors[0].isNew());
