# Leetcode 队列最大值——解题思路

请定义一个队列并实现函数 max_value 得到队列里的最大值，要求函数max_value、push_back 和 pop_front 的时间复杂度都是O(1)。
若队列为空，pop_front 和 max_value 需要返回 -1
示例 1：
输入: 
["MaxQueue","push_back","push_back","max_value","pop_front","max_value"]
[[],[1],[2],[],[],[]]
输出: [null,null,null,2,1,2]
示例 2：
输入: 
["MaxQueue","pop_front","max_value"]
[[],[],[]]
输出: [null,-1,-1]

## 方法一：
用一个queue数组记录插入数据，然后push，最后pop，求max，直接遍历数组得到最大值
平均耗时：340ms左右

代码详解见

## 方法二：
根据方法一，使用缓存最大值记录去减少遍历的次数，在插入的时候比较max值记录，然后在pop的时候判断max值是否被删除了，如果被删除了就再次遍历
平均耗时： 300ms左右
解释：优化的最简单方式就缓存所需数据，有点空间换时间的感觉，但是最坏的耗时其实没有太多的区别

## 方法三：
根据方法一，减少获取最大值遍历的总次数，将max值记录在一个顺序数组中，在插入

