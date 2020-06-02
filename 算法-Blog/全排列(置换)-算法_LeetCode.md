# 全排列 / 置换 算法


- 学习参考文章
    + (1) [一个【排列】就像一条路径](https://leetcode-cn.com/problems/permutations/solution/chou-xiang-cheng-jue-ce-shu-yi-ge-pai-lie-jiu-xian/)
    + (2) [回溯算法解题套路框架](https://labuladong.gitbook.io/algo/di-ling-zhang-bi-du-xi-lie/hui-su-suan-fa-xiang-jie-xiu-ding-ban) 



## Catalog
1. 置换/排列知识
2. 把全排列抽象成一颗决策树




## New Words
- **permute [pɚ'mjʊt] --vt.置换; 交换; 变更; [数]排列**
- **popup ['pɔpʌp] --n.弹出; 发射; 弹出层.**
    + Popup menus. 弹出式菜单.
    + Popup dialogs. 弹出对话框
- **track [træk] --n.轨道; 足迹; 跟踪; 履带; --vt.追踪; 通过; --vi.追踪; 走**
    + The dirt road showed many automobile tracks(n).
      在(未铺路面的)沙土路上显出许多汽车通过的痕迹.
    + We saw some quadruped tracks(n) near our camp.
      我们在营地附近看见一些四足兽的足迹.
    + A track(n) runs across the field to his house.
      一条小路穿过原野通到他的家.




## Content
### 1. 置换/排列知识
- 我们在高中的时候就学过过排列组合, 我们也知道 `n` 个不重复的数, 全排列称为置换,
  表示为 $\color{red}{n!}$.
  
  比如 对 `[1, 2, 3]` 我们进行全排列:
  
  第一排有 3 种选择, 从 1, 2, 3 三个数字中任选一, 第二排有 2 种选择,
  除去第一排从 3 个数中选出的一个, 第三排只有一种选择, 如果按照排列的公式计算是
  3 * 2 * 1 = 6 种排法.

- 关于更多 置换, 排列组合的知识见仓库:
  `Mathematics-learning/程序员的数学_BOOK/程序员的数学-One/Chapter05-排列组合/chapter05-排列组合.md`


### 2. 把全排列抽象成一颗决策树
- 通过 `### 1.` 我们知道了全排列的排法, 但是我们在没有学习置换排列之前, 如果给你
  `[1, 2, 3]` 让你实现全排的话, 比较有效的方法大概如下图这样:
 
   <img src="./images-algorithm-blog/permute.png"
        style="margin-left: 0; border-radius: 4px; width: 66%;
            box-shadow: 1px 1px 3px 2px #e5e5e5">

  只要从根遍历这棵树, 记录路径上的数字, 其实就是所有的全排列.
  **我们不妨把这棵树称为回溯(back track)算法的 [决策树]**.

  为啥说这是决策树呢, 因为你在每个节点上其实都是在做决策.

- 在上图中, 1 种 "排列组合" 可以看作 1 条路径:
    + 从根节点开始, path 路径数组为空, 代表状态是还没选择, 它面临 3 个选择.
    + 每个子节点又有 3 个选择, 从上往下作出决策, 选择就像走过一个点, 组成了一条路径.
    + 遍历到树的底部就结束遍历, 没有可选的数字, 此时 path 的长度和 nums 一样,
      它就是全排列之一.

- 关于**回溯(back track)**
    + 下面代码中 `path.pop()`(数组的 `pop()` 方法) 做的就是回溯, 回溯就是撤销选择,
      回到之前的状态(即: 上一层节点树).
    + 这样 path 路径的最后一个选择就被撤销了, 继续下一次迭代, 考察上一层的别的选择.
    + 然后继续 `dfs (deep first search 深度优先搜索)`, 继续回溯.
    + 最后你发现穷举整个决策树是不可避免的, 这是回溯算法的一个特点.(也即是: 暴力破解).
- 下面给出 JS 实现的代码
  ```js
    // - permute() 传入的 nums 为数组
    let permute = function(nums) {
        let res = [];   // - results
        
        // - 调用 dfs 时传入一个空数组 `[]` 
        dfs([]);
        function defs(path) {
            if (path.length === nums.length) {
                // - path.slice() 拷贝当前 path 数组的一个副本, 也可以使用
                //   ES6 的对象展开运算符 [...path]
                // - 当 path 数组的长度和 nums 数组的长度相等时, 把 path
                //   数组推入到 res, 然后 return 退出函数.
                res.push(path.slice());
                return;
            }
            for (let i = 0; i < nums.length; i++) {
                if (path.includes(nums[i])) {
                    // - continue 退出当前循环, 但退出循环后会从循环的顶部继续执行.
                    continue;
                }
                path.push(nums[i]);
                dfs(path);
                path.pop();
            }
        }
    }
  ```
  **Hint:** 这段代码还没有新建 js 文件, 在浏览器中跑过执行过程, 不是特别理解,
  以后有时间在浏览器中完全弄懂后, 回来添加执行流程的笔记.
  