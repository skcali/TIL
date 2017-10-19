/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    var first = 0, second = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > first) {
            second = first;
            first = nums[i];
        }
        else if (nums[i] > second && nums[i] < first) {
            second = nums[i];
        }
    }
    return second;
}

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try {
        var splitString = s.split('');
        splitString.reverse();
        var joinString = splitString.join('');
    } catch(err) {
        console.log(err.message);
        console.log(s);
    }
}

/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
    if (a < 0) {
        throw new Error('Negative Error');
    } else if (a === 0) {
        throw new Error('Zero Error');
    } else {
        return "YES";
    }
}