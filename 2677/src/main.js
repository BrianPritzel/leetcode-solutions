export function chunk(arr, size) {
    const subArray = []
    for (let i=0; i<arr.length; i+=size) {
        subArray.push(arr.slice(i,i+size))
   }
    return subArray
};