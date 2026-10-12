/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
    if (number >= 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
    let max = 0;
    if (a > b)
    {
        max = a;
    }
    else
    {
        max = b;
    }

    if (max > c)
    {
        return max;
    }
    else
    {
        return c;
    }
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 *
 * @param {Position} queen - The position of the queen.
 * @param {Position} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
    let column = queen.x === king.x;
    let row = queen.y === king.y;
    let diagonal = Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y);
    return column || row || diagonal;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
    if (a > 0 && b > 0 && c > 0)
    {
        if (a < b + c && b < c + a && c < b + a)
        {
            if (a === b || a === c || b === c)
            {
                return true;
            }
            return false;
        }
        return false;
    }
    return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
    let Roman_number = ""
    while (num >= 10)
    {
        Roman_number += "X";
        num -= 10;
    }

    if (num === 9)
    {
        Roman_number += "IX";
        num -= 9;
    }

    while (num >= 5)
    {
        Roman_number += "V";
        num -= 5;
    }

    if (num === 4)
    {
        Roman_number +="IV";
        num -= 4;
    }

    while (num >= 1)
    {
        Roman_number += "I";
        num -= 1;
    }

    return Roman_number;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
    const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    let result = '';

    for (let i = 0; i < numberStr.length; i++) {
        const char = numberStr[i];
        let word = '';

        if (char === '-') {
        word = 'minus';
        } else if (char === '.' || char === ',') {
        word = 'point';
        } else {
        word = words[char];
        }

        if (result !== '') {
        result += ' ';
        }
        
        result += word;
    }

    return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
    let left = 0;
  
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
        return false;
        }
        
        left++;
        right--;
    }

    return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
    for (let i = 0; i < str.length; ++i)
    {
        if (str[i] === letter)
        {
            return i;
        }
    }
    return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
    let n = Math.abs(num);
    if (n === 0) {
        return digit === 0;
    }

    while (n > 0) {
        const lastDigit = n % 10;
        
        if (lastDigit === digit) 
        {
            return true;
        }
        
        n = Math.floor(n / 10);
    }

    return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
    let totalSum = 0;
    for (let i = 0; i < arr.length; i++) {
        totalSum += arr[i];
    }

    let leftSum = 0;

    for (let i = 0; i < arr.length; i++) {
        const rightSum = totalSum - leftSum - arr[i];

        if (leftSum === rightSum) {
        return i;
        }

        leftSum += arr[i];
    }

    return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
    const matrix = [];
    for (let i = 0; i < size; i++) 
    {
        matrix[i] = [];
    }

    let top = 0;
    let bottom = size - 1;
    let left = 0;
    let right = size - 1;
    let num = 1;

    while (top <= bottom && left <= right) 
    {
        
        for (let i = left; i <= right; ++i) 
        {
            matrix[top][i] = num;
            ++num;
        }
        ++top; 

        for (let i = top; i <= bottom; ++i) 
        {
            matrix[i][right] = num;
            ++num;
        }
        --right; 

        if (top <= bottom) 
        {
            for (let i = right; i >= left; --i) 
            {
                matrix[bottom][i] = num;
                ++num;
            }
            --bottom;
        }

        if (left <= right) 
        {
            for (let i = bottom; i >= top; --i) 
            {
                matrix[i][left] = num;
                ++num;
            }
            ++left; 
        }
    }

    return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
    const n = matrix.length;

    for (let i = 0; i < n; ++i) 
    {
        for (let j = i + 1; j < n; ++j) 
        {
            const temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    for (let i = 0; i < n; ++i) 
    {
        for (let j = 0; j < Math.floor(n / 2); ++j) 
        {
            const temp = matrix[i][j];
            matrix[i][j] = matrix[i][n - 1 - j];
            matrix[i][n - 1 - j] = temp;
        }
    }

    return matrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(/* arr */) {
    function quickSort(items, left, right) {
        if (left >= right) 
        {
            return;
        }

        const pivot = items[Math.floor((left + right) / 2)];
        let i = left;
        let j = right;

        while (i <= j) 
        {
            while (items[i] < pivot) 
            {
                i++;
            }
            while (items[j] > pivot) 
            {
                j--;
            }

            if (i <= j) 
            {
                const temp = items[i];
                items[i] = items[j];
                items[j] = temp;
                i++;
                j--;
            }
        }

        quickSort(items, left, j);
        quickSort(items, i, right);
    }
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
    const n = str.length;
    if (n === 0) return '';

    const chars = [];
    for (let i = 0; i < n; ++i) 
    {
        chars[i] = str[i];
    }

    const visited = [];
    for (let i = 0; i < n; ++i) 
    {
        visited[i] = false;
    }

    const half = Math.ceil(n / 2);

    for (let i = 0; i < n; ++i) 
    {
        if (visited[i]) continue;

        const cycle = [];
        let curr = i;

        while (!visited[curr]) 
        {
            visited[curr] = true;
            cycle[cycle.length] = curr;

            if (curr < half) 
            {
                curr = curr * 2;
            } 
            else 
            {
                curr = (curr - half) * 2 + 1;
            }
        }

        const k = cycle.length;
        const steps = iterations % k; 
        if (steps === 0) continue;

        const temp = [];
        for (let j = 0; j < k; ++j) 
        {
            temp[j] = chars[cycle[j]];
        }

        for (let j = 0; j < k; ++j) 
        {
            chars[cycle[(j + steps) % k]] = temp[j];
        }
    }

    let result = '';
    for (let i = 0; i < n; ++i) 
    {
        result += chars[i];
    }

    return result;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 */
function getNearestBigger(number) {
    const digits = [];
    let temp = number;
    while (temp > 0) 
    {
        digits[digits.length] = temp % 10;
        temp = Math.floor(temp / 10);
    }

    let i = 1;
    while (i < digits.length && digits[i] >= digits[i - 1]) 
    {
        ++i;
    }

    if (i === digits.length) 
    {
        return number;
    }

    let j = 0;
    while (digits[j] <= digits[i]) 
    {
        ++j;
    }

    const swap = digits[i];
    digits[i] = digits[j];
    digits[j] = swap;

    let left = 0;
    let right = i - 1;
    while (left < right) 
    {
        const tempSwap = digits[left];
        digits[left] = digits[right];
        digits[right] = tempSwap;
        ++left;
        --right;
    }

    let result = 0;
    for (let k = digits.length - 1; k >= 0; --k) 
    {
        result = result * 10 + digits[k];
    }

    return result;
}