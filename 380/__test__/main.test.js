import { expect, test, vi } from "vitest"
import { RandomizedSet } from "../src/main.js"
const mockMath = Object.create(global.Math);
mockMath.random = () => 0;
global.Math = mockMath;
test("example 1", () => {
    //arrange
    const randomizedSet = new RandomizedSet()
    

    //act
    const insert1 = randomizedSet.insert(1)
    const remove2 = randomizedSet.remove(2)
    const insert2 = randomizedSet.insert(2)
    const getRandom1 = randomizedSet.getRandom()
    const remove1 = randomizedSet.remove(1)
    const insert3 = randomizedSet.insert(2)
    const getRandom2 = randomizedSet.getRandom()
    const result = [insert1, remove2, insert2, getRandom1, remove1, insert3, getRandom2]

    //assert
    expect(result).toEqual([true, false, true, 1, true, false, 2])
})

test("example 2", () => {
    //arrange
    const randomizedSet = new RandomizedSet()
    const remove0 = randomizedSet.remove(0)
    const remove0_2 = randomizedSet.remove(0)
    const insert0 = randomizedSet.insert(0)
    const getRandom0 = randomizedSet.getRandom()

    //act
    const result = [remove0, remove0_2, insert0, getRandom0]

    //assert
    expect(result).toEqual([false, false, true, 0])
})