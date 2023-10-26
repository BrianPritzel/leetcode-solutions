import { expect, test } from "vitest"
import { counter } from "../src/main.js"

test("example 1", () => {
    //arrange
    const init = 5
    const calls = ["increment","reset","decrement"]
    
    //act
    const c = counter(init);

    //assert
    expect(c.increment()).toBe(6);
    expect(c.reset()).toBe(5);
    expect(c.decrement()).toBe(4);
})

test("example 2", () => {
    //arrange
    const init = 0
    const calls = ["increment","reset","decrement"]
    
    //act
    const c = counter(init);

    //assert
    expect(c.increment()).toBe(1);
    expect(c.increment()).toBe(2);
    expect(c.decrement()).toBe(1);
    expect(c.reset()).toBe(0);
    expect(c.reset()).toBe(0);
})