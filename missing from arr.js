function findMissingNumber(nums) {
    const n = nums.length;
    const sum_n = (n * (n + 1)) / 2; // Sum of first n natural numbers
    let sum_actual = 0;

    for (let num of nums) {
        sum_actual += num;
    }

    return sum_n - sum_actual;
}

const array2 = [9, 6, 4, 2, 3, 5, 7, 8, 1];
console.log('Missing number:', findMissingNumber(array2));