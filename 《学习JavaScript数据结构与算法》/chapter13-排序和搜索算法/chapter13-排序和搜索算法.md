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



## 本章内容 (Content)
### 13.1 排序算法
#### 13.1.1 冒泡排序 
- 冒泡排序是排序算法中最简单的, 然而, 从运行时间的角度来看, 冒泡排序是最差的一个.
- 冒泡排序比较所有相邻的 2 个项, 如果第 2 个比第 1 个大, 则交换它们. 元素向上移动至正确
  的顺序, 就好像气泡升至表面一样, 冒泡排序因此得名.
  ```javascript
    const Compare = {
        LESS_THAN: -1,
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
    //   (行{5})，意思是位置为 j+1 的值将会被换置到位置 j 处，反之亦然
    function bubbleSort(array, compareFn = defaultCompare) {
        const {length} = array; // {1}
        for (let i = 0; i < length; i++) {
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
#### 13.1.2 选择排序
#### 13.1.3 插入排序
#### 13.1.4 归并排序
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



