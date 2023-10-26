export function* fibGen(nums, fn, init) {
    let accum = 0
    let curr = 1
    yield accum
    yield curr
    while (true){
        yield accum + curr
        let temp = accum + curr
        accum = curr
        curr = temp
    }
};