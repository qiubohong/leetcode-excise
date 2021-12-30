/**
 * @param {number[]} cost
 * @param {number} target
 * @return {string}
 */
var largestNumber = function (cost, target) {
  var indexArray = [];
  var successArray = [];
  var currentIdx = 0;
  var sum = 0;
  var len = cost.length;

  function loop(startIndex) {
    if (currentIdx >= len) {
      return;
    }
    if (startIndex >= len) {
      currentIdx += 1;
      indexArray = [currentIdx + 1];
      sum = cost[currentIdx];
      loop(0);
      return;
    }

    for (var i = startIndex; i < len; i++) {
      sum += cost[i];
      if (sum < target) {
        indexArray.push(i + 1);
        loop();
      } else if (sum > target) {
        sum -= cost[i];
        loop(startIndex + 1);
      } else {
        indexArray.push(i + 1);
        console.log("indexArray:", currentIdx, indexArray);
        //数组倒排序变成字符串
        var maxStr = indexArray
          .sort((a, b) => {
            return b - a;
          })
          .join("");
        successArray.push(maxStr);

        currentIdx += 1;
        if (currentIdx >= len) {
          return;
        }
        indexArray = [currentIdx + 1];
        sum = cost[currentIdx];
        loop(0);
      }
    }
  }

  sum = cost[currentIdx];
  indexArray = [currentIdx + 1];
  loop(currentIdx);

  console.log("successArray:", successArray);
};

largestNumber([4, 3, 2, 5, 6, 7, 2, 5, 5], 9);
