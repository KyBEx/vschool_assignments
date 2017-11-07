// function isIP(str) {
//   var sections = str.split(".");
//   if (sections.length === 4) {
//     return sections.every(function(sections) {
//       return parseInt(sections) >= 0 && parseInt(sections) <= 255 && isNan(parseInt(sections)) !== true;
//     });
//   };
// }
//
//
// module.exports = isIP;

// var check = parseInt('x')
// console.log(check);
// console.log(typeof check);
//
// console.log(parseInt("x"));

// if (isNaN(check)) {
//     console.log("NaN")
// }


const profile = {
    title: "Engineer",
    department: "Engineering"
};

function isEngineer(profile) {
    let {title, department} = profile;
    title = title + " "
//     var title = profile.title;
//     var department = profile.department;
//     return title === 'Engineer' && department === 'Engineering';
// }

let {title, department} = profile;
console.log(title, department);
