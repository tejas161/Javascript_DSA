/*
Polyfill for Promise.any()
*/

Promise.customAny = function(values) {
    return new Promise((resolve, reject) => {
        const errors = [];
        let remaining = values.length;
        
        if (remaining === 0) {
            return reject(new AggregateError([], 'All promises were rejected'));
        }

        values.forEach(value => {
            Promise.resolve(value)
            .then(
                result => resolve(result), // Resolve as soon as one promise fulfills
                error => {
                    errors.push(error);
                    remaining--;
                    if (remaining === 0) {
                        // If all promises have been rejected, reject with an AggregateError
                        reject(new AggregateError(errors, 'All promises were rejected'));
                    }
                }
            );
        });
    });
};

// Example usage:
const p1 = new Promise((_, reject) => setTimeout(reject, 500, 'Error 1'));
const p2 = new Promise((_, reject) => setTimeout(reject, 100, 'Error 2'));
const p3 = new Promise((resolve) => setTimeout(resolve, 300, 'Success'));

Promise.customAny([p1, p2, p3]).then(result => {
    console.log(result); // Output: "Success"
}).catch(error => {
    console.error(error);
});
