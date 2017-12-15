// Calculates the character frequencies in a string. Whitespace and
//  punctuation is ignored. Non-english characters are not counted.
//  Case is ignored (‘A’ and ‘a’ both count toward the same character).
//
// Returns an object with keys being lowercase characters, and
//                  values being the character counts.


// charFreq('Ceres');
   // returns { c: 1, e: 2, r: 1, s: 1 }

// function charFreq(sentence) {
  // Your code here
// }


function charFreq(sentence) {

    let edit = sentence.toLowerCase().match(/[a-z]+/g).join("").split("")
    .reduce((orig, char) => {
        // console.log(orig)
        if(orig[char]) {
            orig[char]++
        } else {
            orig[char] = 1
        }
        return orig
    }

    ,{})

    console.log(edit)
}

charFreq('Ceres is cool!');
