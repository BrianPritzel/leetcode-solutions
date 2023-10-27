export function cancellable(fn, args, t) {
    const test = setTimeout(() => {
        fn.apply(null, args)
     },t)
    return function() {clearTimeout(test)}
};