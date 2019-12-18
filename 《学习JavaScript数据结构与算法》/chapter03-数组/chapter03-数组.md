## 第 3 章: 数组 

## 本章目录 (Catalog)
- 3.1 为什么用数组 
- 3.2 创建和初始化数组
- 3.3 添加元素
    + 3.3.1 在数组末尾插入元素
    + 3.3.2 在数组开头插入元素
- 3.4 删除元素
    + 3.4.1 从数组末尾删除元素
    + 3.4.2 从数组开头删除元素
- 3.5 在任意位置添加或删除元素
- 3.6 二维和多维数组
    + 3.6.1 迭代二维数组的元素
    + 3.6.2 多维数组
- 3.7 JavaScript 的数组方法参考
    + 3.7.1 数组合并
    + 3.7.2 迭代器函数
    + 3.7.3 ES6 和数组的新功能
    + 3.7.4 排序元素
    + 3.7.5 搜索
    + 3.7.6 输出数组为字符串
- 3.8 类型数组
- 3.9 TypeScript 中的数组
- 3.10 小结



## 生词 (New Words)
- **memorization [ˌmɛmərɪ'zeʃən] --n.记住; 默记**
    + --> Memorization master. 记忆大师
    + --> lexis memorization. 词汇记忆


- join() 数组转换为字符串.
- split() 字符串转换为数组.


## 本章内容 (Contents)
- *几乎所有的编程语言都原生支持数组类型, 因为 **数组** 是最简单的内存数据结构. 数组存储*
  *一系列同一种数据类型的值. 虽然在 JavaScript 里, 也可以在数组中保存不同类型的值,*
  *但我们还是遵守最佳实践, 避免这么做 (大多语言都没有这个能力).*
### 3.1 为什么用数组 

### 3.2 创建和初始化数组
- 常用创建数组的方式: 
  ```javascript
    // - 1st method
    let daysOfWeek01 = [];

    // - 2nd method
    var daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", 
    "Saturday", "Sunday"];
  ```
- 访问和迭代数组
  ```javascript
    // - 我们来看一个例子: 
    // - 求斐波那契数列的前 20 个数. 已知斐波那契数列中前 2 项是 1, 从第三项开始, 
    //   每一项都等于前两项之和.
    // - 行 {2} 和 行{3},  在 js 中, 数组的索引是从 0 开始的,因为斐波那契数列中
    //   不存在 0, 这里略过了第一项, 从第二项开始分别保存斐波那契数列中对应位置的元素.
    // - 我们需要做的就是想办法得到斐波那契数列中第三到第二十个位置上的数（前两个值我们
    //   已经初始化过了）。我们可以用循环来处理，把数组中前两位上的元素相加，结果赋给
    //   当前位置上的元素（行{4}——从数组中的索引 3 到索引 19）。
    let fibonacci = [];
    fibonacci[1] = 1;   // {2}
    fibonacci[2] = 1;   // {3}
    for (let i = 3; i < 20; i++) {
        fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]; // {4}
    }
    console.log("fibonacci: ", fibonacci);
    for (var i = 1; i < fibonacci.length; i++) {
        console.log(fibonacci[i]);
    }     
  ```
    + 求斐波那契(fibonacci)数列前 n 个数:
      ```javascript
        // - 递归(recursive)斐波那契数: 后一项为前两项的和
        export function fibonacci(n) {
            if (n < 1) {
                return 0;
            }
            if (n <= 2) {
                return 1;
            }
            return fibonacci(n-1) + fibonacci(n-2)
        }
        // - 迭代求出前 n 个斐波那契数
        export function fibonacciIterative(n) {
            if (n < 1) {return 0;}
            let fibMinus2 = 0;
            let fibMinus1 = 1;
            let fib = n;
            for (let i = 2; i <= n; i++) {
                fib = fibMinus1 + fibMinus2;
                fibMinus2 = fibMinus1;
                fibMinus1 = fib;
            }
            return fib;
        }
        export function fibonacciMemorization(n) {
            if (n < 1) {return 0;}
            const memo = [0, 1];
            const fibonacciMem = (num) => {
                // - memo[num] 如果不为 null 代表已经存在当前数字了
                if (memo[num] != null) {return memo[num];}
                return (memo[num] = fibonacciMem[num -1] + fibonacciMem[num -2]);
            }
        }
      ```
### 3.3 添加元素
- 3.3.1 在数组末尾插入元素 `push()`
  
    + (1) 如果想给数组添加一个元素 (e.g.: 10), 只要赋值给数组中最后一个空位上的元素即可.
        - ```javascript
            let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            numbers[numbers.length] = 10;
          ```
        - Note: 在 js 中, 数组是一个可以修改的对象. 如果添加元素, 它就会自动增长. 
          在 C 和 Java 等其他语言里, 我们要决定数组的大小, 想添加元素就要创建一个
          全新的数组, 不能简单地往其中添加所需的元素.
    + (2) 使用 `push()`: 方法, 把元素添加到数组的末尾.
        - ```javascript
            var nums = [1, 2, 3, 4, 5];
            nums.push(6);
            console.log(nums);  // [1,2,3,4,5,6]
          ```
- 3.3.2 在数组开头插入元素 `unshift()`
  
     + `unshift()`: 方法,可以将元素添加在数组的开头.
       
        - ```javascript
            var nums = [2, 3, 4, 5];
       nums.unshift(1);
         console.log(nums);      // [1,2,3,4,5]
        
            let nums2 = [4, 6, 9];
            const newNum = 2;
            nums2.unshift(newNum, 1, 7);
            console.log(nums2);     // [2, 1, 7, 4, 6, 9]
         ```

### 3.4 删除元素
- 3.4.1 从数组末尾删除元素 
    + `pop()`方法: 可以删除数组末尾的元素:
      ```javascript
        let numbers = [1,2,3,4,5,9];
        numbers.pop();
        console.log(numbers);   // [1,2,3,4,5]
      ```
- 3.4.2 从数组开头删除元素
    + `shift()`方法: 可以删除数组的第一个元素.
      ```javascript
        var nums = [9,1,2,3,4,5];
        nums.shift();
        console.log(nums);  // [1,2,3,4,5]
      ```

### 3.5 在任意位置添加或删除元素
- `splice()` 方法:
    + 使用见: `《JavaScript高级程序设计》/Chapter05-引用类型/chapter05-引用类型.md`

### 3.6 二维和多维数组
- 3.6.1 迭代二维数组的元素
    + 略
- 3.6.2 多维数组
    + 略

### 3.7 JavaScript 的数组方法参考
- 3.7.1 数组合并 `concat()` 方法
- 3.7.2 迭代器函数
    1. 不生成新数组的迭代器方法
        - 我们要讨论的第一组迭代器方法不产生任何新数组, 相反, 它们要么对于数组中的每个元素
          执行某种操作, 要么返回一个值。
            + (1) 1st 方法是: `forEach()`
            + (2) 2nd 方法是: `every()`
            + (3) 3rd 方法是: `some()`  
            + (4) 4th 方法是: `reduce()`: 详细使用见
              `《深入理解ES6》/00-ES6 其他语法/Array.reduce().html`
    2. 生成新数组的迭代器方法
        + (1) `map()`: map() 返回一个新的数组, 该数组的元素是对原有元素应用某个函数
          得到的结果。下面给出一个例子：
          ```javascript
            function first(word) {
                return word[0];
            } 
            var words = ["for","your","information"];
            var acronym = words.map(first);
            print(acronym.join("")); // 显示 "fyi"
          ```
        + (2) `filter()`
- 3.7.3 ES6 和数组的新功能
    + 下表列出了 ES2015 和 ES2016 新增的数组方法
    + |--方法--|--描述--|
      |:------|:------|
      |@@iterator|返回一个包含数组键值对的迭代器(iterator)对象, 可以通过同步调用得到数组元素的键值对|
      |copyWithin|复数数组中一系列元素到同一数组指定的起始位置|
      |entries|返回包含数组所有键值对的 @@iterator|
      |includes|如果数组中存在某个元素就返回 true, 否则返回 false. ES2016 新增|
      |find|根据回调函数给定的条件从数组中查找元素, 如果找到则返回该元素|
      |findIndex|根据回调函数给定的条件从数组中查找元素, 如果找到则返回该元素在数组中的索引|
      |fill|用静态值填充数组|
      |from|根据已有数组创建一个新数组|
      |keys|返回包含数组所有索引的 @@iterator|
      |of|根据传入的参数创建一个新数组|
      |values|返回包含数组中所有值的 @@iterator|
    1. 使用 for...of 循环迭代
        + ```javascript
            for (const n of numbers) {
                console.log( n % 2 === 0 ? "even": "odd");
            }
          ```
    2. 使用 `@@iterator` 对象
        + ES2015 为 Array 类增加了一个 `@@iterator` 属性, 需要通过 
          `Symbol.iterator` 来访问。代码如下。
          ```javascript
            let iterator = numbers[Symbol.iterator]();
            console.log(iterator.next().value); // 1
            console.log(iterator.next().value); // 2
            console.log(iterator.next().value); // 3
            console.log(iterator.next().value); // 4
            console.log(iterator.next().value); // 5
          ```
          然后，不断调用迭代器的 next 方法，就能依次得到数组中的值。 numbers 数组
          中有 15 个值，因此需要调用 15 次 iterator.next().value。 <br/>
          我们可以用下面的代码来输出 numbers 数组中的 15 个值。
          ```javascript
            iterator = numbers[Symbol.iterator]();
            for (const n of iterator) {
                console.log(n);
            }
          ```
          数组中的所有值都迭代完之后，iterator.next().value 会返回 undefined。
    3. 数组的 `entries`、 `keys` 和 `values` 方法
        + 更详细的介绍见: 
          `JS-book-learning/《深入理解ES6》/chapter08-迭代器和生成器/chapter08-Iterator和Generator.md`   
    4. 使用 `Array.from` 方法: 
        + Array.from() 方法根据已有的数组创建一个新数组. 比如复制numbers 数组: 
          ```javascript 
            let numbers2 = Array.from(numbers)
          ````
        + 还可以传入一个用来过滤值的函数. 例如:
          ```javascript
            let evens = Array.from(numbers, x => {x % 2 == 0})
          ```
    5. 使用 `Array.of()` 方法 
        + Array.of 方法根据传入的参数创建一个新数组。以下面的代码为例。
          ```javascript
            let numbers3 = Array.of(1);
            let numbers4 = Array.of(1, 2, 3, 4, 5, 6);
            // - 它和下面这段代码的效果一样。
            let numbers3 = [1];
            let numbers4 = [1, 2, 3, 4, 5, 6];
            // - 我们也可以用该方法复制已有的数组，如下所示。
            let numbersCopy = Array.of(...numbers4);      
          ```
    6. 使用 `fill()` 方法
    7. 使用 `copyWithin()` 方法      
- 3.7.4 排序元素: 
    + `reverse()`
    + `sort()`: sort 方法在对数组做排序时, 把元素默认成字符串进行相互比较.
      ```js
        const numbers = [1, 2, 4, 5, 6, 7, 9, 12];
        function compare(a, b) {
            if (a < b) {
                return -1;
            }
            if (a > b) {
                return 1;
            }
            // - a === b
            return 0;
        }
        numbers.sort(compare);
      ```
    + 自定义排序
      ```js
        const friends = [
            { name: 'John', age: 30 },
            { name: 'Ana', age: 20 },
            { name: 'Chris', age: 25 }, // ES2017 允许存在尾逗号
        ];
        function comparePerson(a, b) {
            if (a.age < b.age) {
                return -1;
            }
            if (a.age > b.age) {
                return 1;
            }
            return 0;
        }
        console.log(friends.sort(comparePerson));
      ```
    + 字符串排序
      ```js
        const names = ['Ana', 'ana', 'john', 'John'];
        //  ["Ana", "ana", "john", "John"]
        console.log(names.sort((a, b) => {
            if (a.toLowerCase() < b.toLowerCase()) {
                return -1;
            }
            if (a.toLowerCase() > b.toLowerCase()) {
                return 1;
            }
            return 0;
        }));
        // - 如果希望小写字母排在前面, 需要使用 localeCompare 方法.
        names.sort((a, b) => a.localeCompare(b));
        // ["ana", "Ana", "john", "John"]
        console.log('names: ', names);
      ```
- 3.7.5 搜索
  
    + 在数组中查找元素: `JS--方法总结\20190920_indexOf_includes_的区别.html`
- 3.7.6 输出数组为字符串:  `toString()` 和 `join()`
    + 有 2 个方法可以把数组转换为字符串: `join()` 和 `toString()`
        - `join()` 方法只接收一个参数，即用作分隔符的字符串，然后返回包含所有数组项的
          字符串. --《js高程》
    + Tip: 细想上面的 join() 方法只接受一个参数..... 这些, 倒不如直接就记: 
      **join 输出数组为字符串**, 即快又方便.      


### 3.8 类型数组 (使用类数组处理二进制数据)
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

### 3.9 TypeScript 中的数组

### 3.10 小结

------
------

- 2.2.3 由字符串生成数组
    + 调用字符串对象的 `split()` 方法可以生成数组. (**str.split(): 字符串转换成数组**)
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