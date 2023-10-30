export function sortBy(arr, fn) {
    return arr.map((a) =>({value:a, order:fn(a)}))
    .sort((a,b) => a.order - b.order)
    .map(({ value}) => (value));
};