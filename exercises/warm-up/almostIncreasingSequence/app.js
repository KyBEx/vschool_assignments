// see if you can get an increasing sequence by removing 1 item from array
// should return true or false
// [1,3,2,1] -- would return false
// [1,3,2] -- would return true
// [7, 5, 6, 1] -- would return false
// [7, 5, 6, 9] -- would return true
// [7, 8, 4, 10] -- would return true

// one check===is the next number greater than the previous
// if not, a double pronged check--does removing the previous number fix?
// or does removing the current number fix?

console.log(almostIncreasingSequence([1,3,2]))

function almostIncreasingSequence(sequence) {
    let check = 1;
    let check2 = 1;
    let check3 =1;
    for (let i = 1; i < sequence.length; i++) {
        if (i > i -1) {
            check++;
            return check = sequence.length ? true : null

        }
        if (i < i -1) {
            const copy = [];
            copy.slice(sequence[0], sequence.length -1);
            copy.splice(i, 1);
            sequence.splice(i-1,1);
            for (let i = 1; i < copy.length; i++) {
                if (i > i-1) {
                    check2++;
                    return check2 = copy.length ? true: null
                }
            for (let i = 1; i < sequence.length; i ++) {
                if (i > i-1) {
                    check3++;
                    return check3 = sequence.length ? true : null
                }
            }
            }

        })
    }

}
