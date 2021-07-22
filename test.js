const SpellTheNumber = require("./index.js")
const assert = require("assert");

describe("SpellTheNumber.spell", () => {
    it("should return 11121314 (одна единица, одна двойка...) from 1234", () => {
        const result = SpellTheNumber.spell("1234")
        assert.strictEqual(result,"11121314")
    })
    it("should return 21 from 11", () => {
        assert.strictEqual(SpellTheNumber.spell("11"),"21")
    })
})

describe("SpellTheNumber.spellAndRepeat", () => {
    it("should return array with items 1, 11, 21, 1211, 111221 for 4 execution times", () => {
        const result = SpellTheNumber.spellAndRepeat(4)
        assert.deepStrictEqual(result,["1", "11", "21", "1211", "111221"])
    })
})