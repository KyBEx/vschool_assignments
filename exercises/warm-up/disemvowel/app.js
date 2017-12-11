// Input:
// "Pickle Rick!"
//
// Output:
// {
//   str: "pckrck!",
//   vowels: "iei"
// }

function vowels(string) {

    return {
        cons: string.toLowerCase().match(/[^aeiou\s]+/g).join(""),
        vowels: string.toLowerCase().match(/[aeiou]+/g).join("")
    }
}

console.log(vowels("Pickle Rick!"))
