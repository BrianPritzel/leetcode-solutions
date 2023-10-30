export async function addTwoPromises(promise1, promise2) {
    return Promise.all([promise1,promise2]).then((promises) => {
        return promises[0]+promises[1];
    })
};