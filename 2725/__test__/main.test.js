import { expect, test } from "vitest"
import { cancellable } from "../src/main.js"

test("example 1", () => {
    const result = []

    const fn = (x) => x * 2
    const args = [4], t = 35, cancelT = 190

    const start = performance.now()

    const log = (...argsArr) => {
        const diff = Math.floor(performance.now() - start);
        result.push({ "time": diff, "returned": fn(...argsArr) })
    }

    const cancel = cancellable(log, args, t);

    setTimeout(() => {
        cancel()
    }, cancelT)

    setTimeout(() => {
        expect(result).toEqual([{ "time": 35, "returned": 8 }, { "time": 70, "returned": 8 }, { "time": 105, "returned": 8 }, { "time": 140, "returned": 8 }, { "time": 175, "returned": 8 }])
    }, cancelT + 15)
})

test("example 2", () => {
    const result = []

    const fn = (x1, x2) => (x1 * x2)
    const args = [2, 5], t = 30, cancelT = 165

    const start = performance.now()

    const log = (...argsArr) => {
        const diff = Math.floor(performance.now() - start);
        result.push({ "time": diff, "returned": fn(...argsArr) })
    }

    const cancel = cancellable(log, args, t);

    setTimeout(() => {
        cancel()
    }, cancelT)

    setTimeout(() => {
        expect(result).toEqual([{ "time": 30, "returned": 10 }, { "time": 60, "returned": 10 }, { "time": 90, "returned": 10 }, { "time": 120, "returned": 10 }, { "time": 150, "returned": 10 }])
    }, cancelT + 15)
})

test("example 3", () => {
    const result = []

    const fn = (x1, x2, x3) => (x1 + x2 + x3)
    const args = [5, 1, 3], t = 50, cancelT = 180

    const start = performance.now()

    const log = (...argsArr) => {
        const diff = Math.floor(performance.now() - start);
        result.push({ "time": diff, "returned": fn(...argsArr) })
    }
    
    const cancel = cancellable(log, args, t);

    setTimeout(() => {
        cancel()
    }, cancelT)

    setTimeout(() => {
        expect(result).toEqual([{ "time": 50, "returned": 9 }, { "time": 100, "returned": 9 }, { "time": 150, "returned": 9 }])
    }
    , cancelT + 15)
})
