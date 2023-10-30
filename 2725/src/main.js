export function cancellable(fn, args, t) {
    fn(...args)
    const test = setInterval(() => {
        fn(...args)
     },t)
    return function() {clearTimeout(test)}
};