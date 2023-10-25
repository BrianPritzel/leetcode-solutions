import { expect, test } from "vitest"
import { sleep } from "../src/main.js"

test("example 1", async () => {
    //arrange
    const input = 100;
    const startTime = Date.now();
    
    //act
    await sleep(input);

    //assert

    const endTime = Date.now();
    const duration = endTime - startTime;
    expect(duration).toBeGreaterThanOrEqual(input);
})

test("example 2", async () => {
    //arrange
    const input = 200;
    const startTime = Date.now();
    
    //act
    await sleep(input);

    //assert

    const endTime = Date.now();
    const duration = endTime - startTime;
    expect(duration).toBeGreaterThanOrEqual(input);
})