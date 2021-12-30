/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function (hand, groupSize) {
    const len = hand.length
    if (len % groupSize !== 0) {
        return false
    }
    hand = hand.sort((a, b) => a - b)
    for (let i = 0; i < len; i += groupSize) {
        let tempIndex = 0;
        let temparray = []
        while (tempIndex < groupSize) {
            temparray.push(hand[i + tempIndex])
            tempIndex++;
        }

        result.push(temparray)
    }

    return result
};

const result = isNStraightHand([1, 2, 3, 4, 5], 4)

console.log(result)