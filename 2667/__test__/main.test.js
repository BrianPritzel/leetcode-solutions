import { expect, test } from "vitest"
import { createHelloWorld } from "../src/main.js"


test("example 1", () => {
    //arrange
    const args = [];
    
    //act
    const f = createHelloWorld();

    //assert
    expect(f(...args)).toBe("Hello World");
})

test("example 2", () => {
    //arrange
    const args = [{},null,42];
    
    //act
    const f = createHelloWorld();

    //assert
    expect(f(...args)).toBe("Hello World");
})