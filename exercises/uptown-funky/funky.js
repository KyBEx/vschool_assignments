var lyrics = ["This", "hit", "that", "ice", "cold",
              "Michelle", "Pfeiffer", "that", "white",
              "gold", "This", "one", "for", "them",
              "hood", "girls", "Them", "good", "girls",
              "straight", "masterpieces", "Stylin'",
              "whilen'", "livin'", "it", "up", "in",
              "the", "city", "Got", "Chucks", "on",
              "with", "Saint", "Laurent", "Gotta", "kiss",
              "myself", "I'm", "so", "pretty"];

// function funky1() {Ó
//     console.log(lyrics.join(" "));
// };
// funky1();
//
// function funky2() {
//   var funkyFunk = lyrics.reverse();
//   console.log(funkyFunk.join(" "));
// };
// funky2();
// var funk2Funk = [];
// function funky3() {
//     for (var i = 0; i < lyrics.length; i+=2) {
//         funk2Funk.push(lyrics[i]);
//     };
//     console.log(funk2Funk.join(' '));
// };
// funky3();

function reverseEveryTwo() {
  var reversed = [];
  for (var i = 1; i < lyrics.length; i +=2) {
    reversed.push(lyrics[i] + " " + lyrics[i - 1]);
  }
  console.log(reversed.join(" "));
}
reverseEveryTwo();
