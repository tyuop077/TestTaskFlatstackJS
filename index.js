class SpellTheNumber {
    static spell(number) { // number as string
        // spelling the numbers and returning them
        let count = 1; // counting those numbers, this one is first
        let ourSpeech = ""; // what we've said
        // currently counting this number (how many in this chain) (later shouting it out)
        for (let i = 0; i < number.length; i++) {
            if (number[i] !== number[i+1]) {
                // we hit new number and previous number chain ends here,
                // so let's say how many numbers were is this chain
                ourSpeech += `${count}${number[i]}`
                // одна (count) еденица (number[i]) etc
                count = 1; // reset value for the next chain
            } else {
                count++
            }
        }
        return ourSpeech
    }
    static spellAndRepeat(times) {
        let result = ["1"]; // starting with 1
        let lastNumber = "1";
        // also it's possible to move lastNumber variable outside this function to SpellTheNumber
        // class and make it not static (and initialize it instead of (SpellTheNumber.spellAndRepeat(...))
        for (let i = 0; i < times; i++) {
            lastNumber = this.spell(lastNumber)
            result.push(lastNumber)
            // we can remove array and print numbers in this loop, but we
            // were asked about object-oriented architecture (less optimized
            // and takes some memory before "shouting" the lines)
        }
        return result
    }
}

const result = SpellTheNumber.spellAndRepeat(15)

for (const item of result) {
    console.log(item)
}