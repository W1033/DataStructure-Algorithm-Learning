##. 第 2 章: 数组 (笔记来自第三版)

## 本章目录 (Catalog)
- 2.1 JavaScript 中对数组的定义
- 2.2 使用数组
    + 2.2.1 创建数组
    + 2.2.2 读写数组
    + 2.2.3 由字符串生成数组
    + 2.2.4 对数组的整体性操作
- 2.3 存取函数
    + 2.3.1 查找元素
    + 2.3.2 数组的字符串表示
    + 2.3.3 从已有数组创建新数组
- 2.4 可变函数
    + 2.4.1 为数组添加元素
    + 2.4.2 从数组中删除元素
    + 2.4.3 从数组中间位置添加和删除元素
    + 2.4.4 为数组排序
2.5 迭代器方法 
    + 2.5.1 不生成新数组的迭代器方法
    + 2.5.2 生成新数组的迭代器方法
2.6 二维和多维数组
    + 2.6.1 创建二维数组
    + 2.6.2 处理二维数组的元素
    + 2.6.3 参差不齐的数组
2.7 对象数组
2.8 对象中的数组
2.9 练习

## 生词 (New Words)


## 本章内容 (Contents)
### 2.1 JavaScript 中对数组的定义
- 数组是最简单的内存数据结构.
- 数组的标准定义是：`一个存储元素的线性集合（collection）`，元素可以通过索引来任意存取，
  索引通常是数字，用来计算元素之间存储位置的偏移量。几乎所有的编程语言都有类似的数据结构。
  然而 JavaScript 的数组却略有不同。
- `JS 中的数组是一种特殊的对象，用来表示偏移量的索引是该对象的属性`，索引可能是整数。
  然而，这些数字索引在内部被转换为字符串类型，这是因为 JavaScript 对象中的属性名
  必须是字符串。数组在 JS 中只是一种特殊的对象，所以效率上不如其他语言中的数组高。
- JS 中的数组，严格来说应该称作对象，是特殊的 JavaScript 对象， 在内部被归类为数组。 
  由于 Array 在 JavaScript 中被当作对象， 因此它有许多属性和方法可以在编程时使用。
### 2.2 使用数组
- 2.2.1 创建数组
    + ```javascript
        var daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", 
        "Saturday", "Sunday"]

        // - 求斐波那契数列的前 20 个数字. 已知斐波那契数列中第一个数字是 1, 第二个是 2,
        //   从第三项开始, 每一项都等于前两项之和.
        let fibonacci = [];
        // - 数组的索引是从 0 开始的, 这里略过了第一项.
        fibonacci[1] = 1;
        fibonacci[2] = 2;
        for (let i = 3; i < 20; i++) {
            fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
        }
        console.log("fibonacci: ", fibonacci);
        for (var i = 1; i < fibonacci.length; i++) {
            console.log(fibonacci[i]);
        }     
      ```
- 2.2.2 读写数组

- 2.2.3 由字符串生成数组
    + 调用字符串对象的 `split()` 方法可以生成数组.
        - 《js高程》: `split()`方法是基于指定的分隔符将一个字符串分割成多个子字符串, 
          并将结果放在一个数组中.
    
- 2.2.4 对数组的整体性操作
    + 将一个数组中的每个元素复制一份到新数组中.(深复制):
      ```javascript
        function copy(arr1, arr2) {
            for (var i=0; i < arr1.length; i++) {
                arr2[i] = arr[i]
            }
        }
      ```
### 2.3 存取函数
- 2.3.1 查找元素
    + 见: `JS--方法总结\20190920_indexOf_includes_的区别.html`
- 2.3.2 数组的字符串表示
    + 有 2 个方法可以把数组转换为字符串: `join()` 和 `toString()`
        - 《js高程》: `join()` 方法只接收一个参数，即用作分隔符的字符串，然后返回包含
          所有数组项的字符串.
- 2.3.3 从已有数组创建新数组
    + (1) `concat()`
    + (2) `splice()`
### 2.4 可变函数
- 2.4.1 为数组添加元素
    + (1) `push()`: 方法, 把元素添加到数组的末尾.
        - ```javascript
            var nums = [1, 2, 3, 4, 5];
            nums.push(6);
            console.log(nums);  // [1,2,3,4,5,6]
          ```
    + (2) `unshift()`: 方法,可以将元素添加在数组的开头.
        - ```javascript
            var nums = [2, 3, 4, 5];
            nums.unshift(1);
            console.log(nums);      // [1,2,3,4,5]

            let nums2 = [4, 6, 9];
            const newNum = 2;
            nums2.unshift(newNum, 1, 7);
            console.log(nums2);     // [2, 1, 7, 4, 6, 9]
          ```
- 2.4.2 从数组中删除元素
    + (1) `pop()`方法: 可以删除数组末尾的元素:
      ```javascript
        let numbers = [1,2,3,4,5,9];
        numbers.pop();
        console.log(numbers);   // [1,2,3,4,5]
      ```
    + (2) `shift()`方法: 可以删除数组的第一个元素.
      ```javascript
        var nums = [9,1,2,3,4,5];
        nums.shift();
        console.log(nums);  // [1,2,3,4,5]
      ```
- 2.4.3 从数组中间位置添加和删除元素
    + `splice()` 方法:
        - 使用见: `《JavaScript高级程序设计》/Chapter05-引用类型/chapter05-引用类型.md`
- 2.4.4 为数组排序
### 2.5 迭代器方法 
- 2.5.1 不生成新数组的迭代器方法
    + 我们要讨论的第一组迭代器方法不产生任何新数组, 相反, 它们要么对于数组中的每个元素执行
      某种操作, 要么返回一个值。
    + (1) 第 1 个方法是: `forEach()`
    + (2) 2nd 方法是: `every()`
    + (3) 3rd 方法是: `some()`  
    + (4) 4th 方法是: `reduce()`
        - 详细使用见: `《深入理解ES6》/00-ES6 其他语法/Array.reduce().html`
- 2.5.2 生成新数组的迭代器方法
  
    + (1) `map()`: map() 返回一个新的数组, 该数组的元素是对原有元素应用某个函数得到的
      结果。下面给出一个例子：
      ```javascript
        function first(word) {
            return word[0];
        } 
        var words = ["for","your","information"];
        var acronym = words.map(first);
        print(acronym.join("")); // 显示 "fyi"
      ```
    + (1) `filter()`
### 2.6 二维和多维数组
- 2.6.1 创建二维数组
- 2.6.2 处理二维数组的元素
- 2.6.3 参差不齐的数组
### 2.7 对象数组
### 2.8 对象中的数组
### 2.9 练习



------


#### ## 第二版同章的内容

#### 2.8 类型数组 (使用类数组处理二进制数据)
- 与 C 和 Java 等其他语言不同, JavaScript数组不是强类型的, 因此它可以存储任意类型的数据.
- 而类型数组用于存储单一类型的数据. 它的语法是 `let myArray = new TypedArray(length);`,
  其中 TypedArray 需替换为下表所列之一.
- | 类型数组 | 数据类型 |
  |:---:|:---:|
  |`Int8Array`| 8 位二进制补码整数|
  |`Uint8Array` (unsigned int 无符号类型)| 8 位无符号整数|
  |`Uint8ClampedArray`|8 位无符号整数|
  |`Int16Array`| 16 位二进制补码整数|
  |`Uint16Array`| 16 位无符号整数|
  |`Int32Array`| 32 位二进制补码整数|
  |`Uint32Array`| 32 位无符号整数|
  |`Float32Array`| 32 位 IEEE 浮点数|
  |`Float64Array`| 64 位 IEEE 浮点数|
- 使用 WebGL API, 进行位操作, 处理文件和图像时, 类数组都可以大展拳脚.
  它用起来和普通数组毫无二致, 文章所学的数组方法和功能都可以用于类型数组.
- ```javascript
    let length = 5;
    let int16 = new Int16Array(length);
    let array16 = [];
    array16.length = length;
    for (let i = 0; i < length; i++) {
        int16[i] = i + 1;
    }
    // int16: {Int16Array(5)} [ 1, 2, 3, 4, 5 ]
    console.log("int16: ", int16);
  ```
#### 2.9 小结