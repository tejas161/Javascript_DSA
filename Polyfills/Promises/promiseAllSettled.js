/*
Polyfill for Promise.allSettled()
*/

Promise.customAllSettled = function(values) {
    return new Promise((resolve) => {
        const results = [];
        let completed = 0;
        const total = values.length;

        values.forEach((value, index) => {
            // Wrap each value in a promise to handle non-promise values
            Promise.resolve(value)
                .then((result) => {
                        results[index] = { status: 'fulfilled', value: result };
                    },
                    (error) => {
                        results[index] = { status: 'rejected', reason: error };
                    }
                )
                .finally(() => {
                    completed++;
                    if (completed === total) {
                        resolve(results);
                    }
                });
        });
    });
};

// Example usage:
const p1 = Promise.resolve(3);
const p2 = new Promise((_, reject) => setTimeout(() => reject('Error'), 2000));
const p3 = Promise.resolve(42);

Promise.customAllSettled([p1, p2, p3]).then(results => {
    console.log(results);
    // Output:
    // [
    //   { status: 'fulfilled', value: 3 },
    //   { status: 'rejected', reason: 'Error' },
    //   { status: 'fulfilled', value: 42 }
    // ]
});
