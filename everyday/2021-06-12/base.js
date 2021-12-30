/**
 * 背包问题
 * 有N件物品和一个容量为V的背包。第i件物品的重量是weight[i]，价值是cost[i]。求解将哪些物品装入背包可使这些物品的费用总和不超过背包容量W，且价值总和最大。
 *
 */

// 普通实现的话是通过递归求和判断

// 通过计算所有背包可放入物品的最大价值状态，然后一层层进行状态迁移计算得出最终容量的最大价值状态
function knapsack1(weights, cost, W) {
  var n = weights.length - 1; // 本身重量存储数组长度
  var f = [[]];
  // 先算第一件物品的存放价值列表
  for (let j = 0; j <= W; ++j) {
    if (j < weights[0]) {
      //背包的容量小于物品重量  那么对应价值为0
      f[0][j] = 0;
    } else {
      f[0][j] = cost[0]; // 如果背包可以放入物品  那么对应价值为cost[i]
    }
  }

  // 接下来计算第二个以后物品的继续存放时的价值
  for (let j = 0; j <= W; ++j) {
    for (let i = 1; i <= n; i++) {
      if (!f[i]) {
        f[i] = [];
      }

      if (j < weights[i]) {
        // 小于当前物品重量 则
        f[i][j] = f[i - 1][j]; // 等于上一个物品在此容量的最大价值
      } else {
        const prevCost = f[i - 1][j]; // 上一个物品在此容量的最大价值
        const leftW = j - weights[i]; // 背包放入当前物品后 剩下的容量
        const prevNowCost = f[i - 1][leftW]; // 上一个物品在剩下的容量 的最大价值

        const nowCost = prevNowCost + cost[i]; // 计算两者的之和 价值

        // 判断两者的哪个价值大  赋值给当前物品在此容量下的最大价值
        f[i][j] = Math.max(prevCost, nowCost);
      }
    }
  }


  // 最终得出最后放入物品后的最大价值

  return f[n][W];
}

// 优化版 将第一行初始化合并到循环中
function knapsack2(weights, cost, W) {
  var len = weights.length;
  var f = new Array(len);
  f[-1] = new Array(W+1).fill(0); // 模拟-1最大价值为0物品 为什么要构造11长度 是因为下一个一定会获取10索引位置的
  for (let i = 0; i < len; i++) {
    f[i] = new Array(W).fill(0); // 先构造物品的最大价值
    const currentWeight = weights[i]; // 当前物品的重量
    for (let j = 0; j <= W; j++) {
      if (j < currentWeight) {
        f[i][j] = f[i - 1][j];
      } else {
          if(j==10){
              console.log(`f[${i - 1}][${j}]`)
          }
        f[i][j] = Math.max(f[i - 1][j], f[i - 1][j - currentWeight] + cost[i]);
      }
    }
  }
  return f[len - 1][W];
}

var a = knapsack1([2, 2, 6, 5, 4], [6, 3, 5, 4, 6], 10);
var b = knapsack2([2, 2, 6, 5, 4], [6, 3, 5, 4, 6], 10);
console.log(a, b);
