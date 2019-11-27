# 第 13 章 -- 排序与搜索算法

## 本章目录 (Catalog)
- 13.1 排序算法
    + 13.1.1 冒泡排序 
    + 13.1.2 选择排序
    + 13.1.3 插入排序
    + 13.1.4 归并排序
    + 13.1.5 快速排序
    + 13.1.6 计数排序
    + 13.1.7 桶排序
    + 13.1.8 基数排序
- 13.2 搜索算法
    + 13.2.1 顺序搜索
    + 13.2.2 二分搜索
    + 13.2.3 内插搜索
- 13.3 随机算法
    + Fisher-Yates 随机
- 13.4 小结    

## 生词 (New Words)
- **insertion [ɪn'sɜːʃ(ə)n] --n.插入; 挿入物**
    + The insertion of a line or two into the script.  
      在书稿中插入一两行.
    + Sometimes the insertion of one word can change the meaning of a whole
      sentence.  
      有时插入一个字可以改变全句的意义.


## 本章内容 (Content)
### 13.1 排序算法
#### 13.1.1 冒泡排序 
- 冒泡排序是排序算法中最简单的, 然而, 从运行时间的角度来看, 冒泡排序是最差的一个.
- 冒泡排序比较所有相邻的 2 个项, 如果第 2 个比第 1 个大, 则交换它们. 元素向上移动至正确
  的顺序, 就好像气泡升至表面一样, 冒泡排序因此得名.
  ```javascript
    const Compare = {
        // - less than 小于
        LESS_THAN: -1,
        // - bigger than 大于
        BIGGER_THAN: 1,
        EQUALS: 0
    };
    function defaultCompare(a, b) {
        if (a === b) {
            return Compare.EQUALS;
        }
        return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
    }
    function swap(array, a, b) {
        const temp = array[a];
        array[a] = array[b];
        array[b] = temp;
        // - ES6 的方式
        // [array[a], array[b]] = [array[b], array[a]]
    }

    // - 首先，声明一个名为 length 的变量，用来存储数组的长度（行{1}）。这一步可选，
    //   它能帮助我们在行{2}和行{3}时直接使用数组的长度。接着，外循环({2})会从数组的
    //   第一位迭代至最后一位，它控制了在数组中经过多少轮排序（应该是数组中每项都经过一轮，
    //   轮数和数组长度一致）。然后，内循环将从第一位迭代至倒数第二位，内循环实际上进行
    //   当前项和下一项的比较（行{4}）。如果这两项顺序不对(当前项比下一项大), 则交换它们
    //   (行{5})，意思是位置为 j+1 的值将会被换置到位置 j 处，反之亦然.
    function bubbleSort(array, compareFn = defaultCompare) {
        const {length} = array; // {1}
        for (let i = 0; i < length; i++) {  // {2}
            for (let j = 0; j < length-1; j++) {
                if (compareFn(array[j], array[j + 1]) 
                    === Compare.BIGGER_THAN) {  // {4}
                    swap(array, j, j + 1);  // {5}
                }
            }
        }
        return array;
    }
  ```
  下图展示了冒泡排序的工作过程:  
  <img src="./chapter13-images/01-bubble-sort.png" style="width: 100%;">  
  该示意图中每一小段表示外循环的一轮({2}), 而相邻两项的比较则是在内循环中进行的({3}).  
  我们使用下面这段代码来测试冒泡排序算法, 看看结果是否和示意图所示一致.
  ```js
    let array = [5, 4, 3, 2, 1];
    // - join(): 只接受一个参数, 即用作分隔符的字符串, 然后返回包含所有数组项的字符串.
    console.log(array.join());  // 5, 4, 3, 2, 1
    let arr = bubbleSort(array);
    console.log("arr: ", arr);  // arr: [1, 2, 3, 4, 5]
  ```
  注意当算法执行外循环(for)的第二轮时, 数字 6 和 7 都已经是正确排序的了. 尽管如此, 
  在后续比较中, 它们还是在一直进行着比较, 即使这是不必要的. 因此, 我们可以稍微改进
  一下冒泡排序算法.
- **改进后的冒泡排序**
    + 如果从内循环减去外循环中已跑过的轮数, 就可以避免内循环中所有不必要的比较({1}).
      ```js
        function modifiedBubbleSort(array, compareFn = defaultCompare) {
            const {length} = length;
            for (let i = 0; i < length; i++) {
                for (let j = 0; j < length - 1 - i; j++) {  // {1}
                    if (compareFn(array[j], array[j +1]) 
                        === Compare.BIGGER_THAN) {
                        swap(array, j, j+1);
                    }
                }
            }
            return array;
        }
      ```
    + 下面这个示意图展示了改进后的冒泡排序算法是如何执行的.  
      <img src="./chapter13-images/01-modified-bubble-sort.png" 
            style="width: 100%;">  
    + 注意, 已经在正确位置上的数字没有被比较. 即便我们做了这个小改变来改进冒泡排序算法, 但
      还是不推荐该算法, 它的复杂度为 $O(n^2)$.  
    + 我们将在第 15 章详细介绍大 $O$ 表示法, 对算法做更多的讨论.
#### 13.1.2 选择排序
- 选择排序算法是一种原址比较排序算法。选择排序大致的思路是找到数据结构中的最小值并将其放置在
  第一位，接着找到第二小的值并将其放在第二位，以此类推.
    + 下面是选择排序算法的源代码:
      ```js
        // - 首先声明一些将在算法内使用的变量 ({1}). 接着, 外循环({2}) 迭代数组, 并控制
        //   迭代轮次 (数组的第 n 个值 -- 下一个最小值). 我们假设本迭代轮次的第一个值为
        //   数组最小值 ({3}). 然后, 从当前 i 的值开始至数组结束({4}), 我们比较是否位置
        //   j 的值比当前最小值小({5}); 如果是, 则改变最小值至新最小值({6}). 当内循环
        //   结束({4}), 将得出数组第 n 小的值. 最后, 如果该最小值和原最小值不同({7}),
        //   则交换其值.
        function selectionSort(array, compareFn = defaultCompare) {
            const {length} = array; 
            // - indexMin 用来保存最小值得索引
            let indexMin;   // {1}
            // - Tip: 为什么这里是 `length -1`?: 因为内部的 for 语句执行第一次循环后,
            //   数组中的最大值便已经放到数组的末尾, 所以我们无需对最后一项做操作.
            for (let i = 0; i < length - 1; i++) {  // {2}
                indexMin = i;   // {3}
                for (let j = i; j < length; j++) {  // {4}
                    if (compareFn(array[indexMin], array[j]) 
                        === Compare.BIGGER_THAN) {  // {5}
                        indexMin = j;   // {6}
                    }
                }
                if (i !== indexMin) {   // {7}
                    swap(array, i, indexMin);
                }
            }
            return array;
        }
      ```
    + 测试代码同上.
    + 下面的示意图展示了选择排序算法, 此例基于之前代码中所用的数组, 也就是 [5, 4, 3, 2, 1].
      <img src="./chapter13-images/02-selection-sort.png" style="width: 70%;">  
    + 数组底部的箭头指示出当前迭代轮寻找最小值的数组范围 (内循环——{4})，示意图中的每一步
      则表示外循环({2}). Tip: 执行语句为中间 4 行, 因为外 for 循环语句 length - 1 = 4.
    + 选择排序同样也是一个复杂度为 $O(n^2)$ 的算法。和冒泡排序一样，它包含有嵌套的两个循环
      , 这导致了二次方的复杂度。然而，接下来要学的插入排序比选择排序性能要好。
#### 13.1.3 插入排序
- 插入排序`每次排一个数组项`, 以此方式构建最后的排序数组. `假定第一项已经排序了`. 接着, 它
  和第 2 项进行比较 -- 第 2 项是应该待在原位还是插到第 1 项之前? 这样, 头两项就已正确排序,
  接着和第三项比较 (它是该插入到 第一, 第二 还是第三 的位置呢), 以此类推.
- 下面这段代码表示插入排序算法:
  ```js
    // - 照例，算法的第一行用来声明代码中使用的变量({1})。接着，迭代数组来给
    //   第 i 项找到正确的位置(行 {2})。注意，算法是从第二个位置(索引 1)而不是索引
    //   0 位置开始的 (我们认为第一项已排序了)。然后，用 i 的值来初始化一个辅助变量
    //   (行 {3}) 并也将其值存储在一个临时变量中(行 {4})，便于之后将其插入到正确的
    //   位置上。下一步是要找到正确的位置来插入项目。只要变量 j 比 0 大 (因为数组的
    //   第一个索引是 0——没有负值的索引) 并且数组中前面的值比待比较的值大(行 {5}),
    //   我们就把这个值移到当前位置上(行 {6})并减小 j 。最终, 能将该值插入到正确的位置上。
    function insertionSort(array, compareFn = defaultCompare) {
        const {length} = array;
        let temp;   // {1}
        for (let i = 1; i < length; i++) {  // {2}
            let j = i;  // {3}
            // - temp 存储 for 循环的当前项
            temp = array[i];    // {4}
            console.log('temp = array[i]: ', temp);
            while (j > 0 && compareFn(array[j - 1], temp)
                === Compare.BIGGER_THAN) {  // {5}
                array[j] = array[j -1];     // {6}
                j--;
                console.log('array[j] = array[j - 1]: ', array[j]);
                console.log('j: ', j);
            }
            array[j] = temp;    // {7}
            // console.log('array[j]: ', array[j]);
        }
        return array;
    }

    let array = [3, 5, 1, 4, 2];
    let arr = insertionSort(array);
    console.log("arr: ", arr);  // arr: [1, 2, 3, 4, 5]
  ```
    + 下面的示意图展示了一个插入排序的实例.  
        <img src="./chapter13-images/03-insertion-sort.png" style="width:90%;">
    + 举个例子，假定待排序数组是 [3, 5, 1, 4, 2] 。这些值将被插入排序算法按照下面
      的步骤进行排序。
        - (1) 3 已被排序，所以我们从数组第二个值 5 开始。3 比 5 小，所以 5 待在原位
          (数组的第二位)。3 和 5排序完毕。
        - (2) 下一个待排序和插到正确位置上的值是 1（目前在数组的第三位）。5 比 1 大，
          所以 5 被移至第三位去了。我们得分析 1 是否应该被插入到第二位——1比 3大吗？不，
          所以 3被移到第二位去了。接着，我们得证明 1应该插入到数组的第一位上。因为 0 是
          第一个位置且没有负数位，所以 1必须被插入第一位。1、3、5三个数字已经排序。
        - (3) 然后看下一个值：4。4 应该在当前位置（索引 3）还是要移动到索引较低的位置上
          呢？4 比 5 小，所以 5 移动到索引 3 位置上去。那么应该把 4 插到索引 2 的位置
          上去吗？4 比 3 大，所以把 4 插入数组的位置 3上。
        - (4) 下一个待插入的数字是 2（数组的位置 4）。5 比 2 大，所以 5 移动至索引 4。
          4 比 2 大，所以 4也得移动（位置 3）。3 也比 2大，所以 3 还得移动。1 比 2小，
          所以 2 插入到数组的第二位置上。至此，数组已排序完成。
    + 排序小型数组时，此算法比选择排序和冒泡排序性能要好。  
#### 13.1.4 归并排序
- 归并排序**是第一个可以实际使用的**排序算法. 你在本书学到的前三个排序算法性能不好, 但归并
  排序性能不错, 其算法复杂度为 $O(n\log_{10}{n})$.
- Note: JavaSscirpt 的 Array 类定义了一个 sort 函数 (`Array.prototype.sort`)
  用以排序 JavaScript 数组 (我们不必自己实现这个算法). ECMAScript 没有定义用哪个
  排序算法, 所以浏览器厂商可以自行去实现算法. 例如, Mozilla Firefox 使用了归并排序
  作为 Array.prototype.sort 的实现, 而 Chrome (V8 引擎) 使用了一个快速排序的变体
  (下面我们会学习).
    + Tip: Array.prototype.sort 的使用示例见: 仓库 `JS-book-learning\`
      `《Javascript设计模式与编程实践》\第一部分--基础知识\第3章-闭包和高阶函数\`
      `第3章--闭包和高阶函数.md`
- 归并排序是一种分而治之算法. 其思想是将原始数组切分成较小的数组, 直到每个小数组只有一个位置,
  接着将小数组归并成较大的数组, 直到最后只有一个排序完毕的大数组.
- 由于是分治法, 归并排序也是递归(recursive, `chapter09-递归`)的. 我们要将算法分为
  2 个函数: 第 1 个负责将一个大数组分为多个小数组并调用用来排序的辅助函数. 我们来看看在
  这里声明的主要函数:
  ```javascript
    
  ```
#### 13.1.5 快速排序
#### 13.1.6 计数排序
#### 13.1.7 桶排序
#### 13.1.8 基数排序

### 13.2 搜索算法
#### 13.2.1 顺序搜索
#### 13.2.2 二分搜索
#### 13.2.3 内插搜索

### 13.3 随机算法
#### Fisher-Yates 随机

### 13.4 小结    



