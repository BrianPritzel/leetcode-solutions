import { expect, test } from "vitest"
import { fibGen } from "../src/main.js"

test("example 1", () => {
    //arrange
    const callcount = 5
    
    //act
    const gen = fibGen();

    //assert
    expect(gen.next().value).toBe(0);
    expect(gen.next().value).toBe(1);
    expect(gen.next().value).toBe(1);
    expect(gen.next().value).toBe(2);
    expect(gen.next().value).toBe(3);
})