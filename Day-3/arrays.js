function getSecondLargest(nums) {
    let result = nums.sort((a, b) => b - a);
    let secondLargest = 0;
    let largestNumber = result[0];
    for (let i = 0; i < result.length; i++) {
        if (result[i] < largestNumber && result[i] > secondLargest) {
            secondLargest = result[i];
        }
    } return secondLargest;
}