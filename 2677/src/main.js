export function chunk(arr, size) {
    const subArray = []
    for (let i=0; i<arr.length; i+=size) {
        const temp = arr.slice(i,i+size)
        subArray.push(temp)
   }
    return subArray
};