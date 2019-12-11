# 第 4 章 -- 栈 (Stack)

## 本章目录 (Catalog)
- 4.1 创建一个 JavaScript 数据结构和算法库
- 4.2 栈数据结构
    + 4.2.1 创建一个基于数组的栈
    + 4.2.2 向栈添加元素 `push()`
    + 4.2.3 从栈移除元素 `pop()`
    + 4.2.4 查看栈顶元素 `peek()`
    + 4.2.5 检查栈是否为空 `isEmpty()`
    + 4.2.6 清空栈元素 `clear()`
    + 4.2.7 使用 Stack 类
- 4.3 创建一个基于 JavaScript 对象的 Stack 类
    + 4.3.1 向栈中插入元素 `push()`
    + 4.3.2 验证一个栈是否为空和它的大小 `isEmpty()`, `size()`
    + 4.3.3 从栈中弹出元素 `pop()`
    + 4.3.4 查看栈顶的值并将栈清空 `peek()`, `clear()`
    + 4.3.5 创建 `toString` 方法
- 4.4 保护数据结构内部元素
    + 4.4.1 下划线命名约定
    + 4.4.2 用 ES2015 的限定作用域 Symbol 实现类
    + 4.4.3 用 ES2015 的 WeakMap 实现类
    + 4.4.4 ECMAScript 类属提案        
- 4.5 用栈解决问题
- 从 10 进制 到 2 进制
    + 进制转换算法
- 4.6 小结


## 生词 (New Words)
- **binary ['baɪnərɪ] --adj.二进制的，二元的**
- **octal ['ɒkt(ə)l] --adj.八进制的**
- **decimal ['desɪm(ə)l] --adj.十进位的，小数的， n.小数**
- **hexadecimal [ˌheksə'desɪm(ə)l] --adj.十六进制的**
- **remainder [rɪ'meɪndə] --n.剩余; 余数; 其余**
    + --> The remainder of the group stayed at the hotel.
        该团其余的人留在旅馆
    + --> He spent the remainder of his life in the country.
        他在乡间度过了余生.
- **peek [piːk] --n.偷看; 瞥(很快的看一眼)= glance = peep. --vi.窥视; 偷看**
    + steal a peek(n). 偷看
    + Now close your eyes, but don't peek. 现在闭上眼睛, 不要偷看哦.


## 本章内容 (Content)
- 有 2 种数据结构类似于数组, 但在添加和删除元素时更为可控. 它们就是 `栈` 和 `队列`.
- 栈是一种遵循 `后进先出(Last-in-First-out) LIFO` 原则的有序集合. 新添加的或待删除的
  元素都保存在栈的同一端, 称为栈顶, 另一端就叫栈底. 在栈里, 新元素都靠近栈顶, 旧元素都
  接近栈底. 
    + 此处说明 `栈顶` 和 `栈底`:
        - 从下面 Stack 类内 push() 方法的提示可以看出: 如果一个数组 `arr = [1, 2, 3]`
          那么, 数组左侧为栈底右侧为栈顶.    

### 4.1 创建一个 JavaScript 数据结构和算法库
### 4.2 栈数据结构
- 4.2.1 创建一个基于数组的栈
- 4.2.2 向栈添加元素 `push()`
- 4.2.3 从栈移除元素 `pop()`
- 4.2.4 查看栈顶元素 `peek()`
- 4.2.5 检查栈是否为空 `isEmpty()`
- 4.2.6 清空栈元素 `clear()`
- 4.2.7 使用 Stack 类

### 4.3 创建一个基于 JavaScript 对象的 Stack 类
- 创建一个 Stack 类最简单的方式是使用一个数组来存储其元素。在处理大量数据的时候（这在
  现实生活中的项目里很常见），我们同样需要评估如何操作数据是最高效的。在使用数组时，大部分
  方法的时间复杂度是 O(n)。第 15 章我们将学习到更多有关算法复杂度的知识。 O(n)的意思是，
  我们需要迭代整个数组直到找到要找的那个元素，在最坏的情况下需要迭代数组的所有位置，其中的
  n 代表数组的长度。如果数组有更多元素的话，所需的时间会更长。另外，数组是元素的一个
  有序集合，为了保证元素排列有序，它会占用更多的内存空间。
- 如果我们能直接获取元素，占用较少的内存空间，并且仍然保证所有元素按照我们的需要排列，
  那不是更好吗？对于使用 JavaScript 语言实现栈数据结构的场景，我们也可以使用一个
  JavaScript 对象来存储所有的栈元素，保证它们的顺序并且遵循 LIFO 原则。我们来看看如何
  实现这样的行为。
- 4.3.1 向栈中插入元素 `push()`
- 4.3.2 验证一个栈是否为空和它的大小 `isEmpty()`, `size()`
- 4.3.3 从栈中弹出元素 `pop()`
- 4.3.4 查看栈顶的值并将栈清空 `peek()`, `clear()`
- 4.3.5 创建 `toString` 方法
- 下面给出 Stack 类的实现方法:
  ```javascript
    class Stack {
        constructor() {
            this.count = 0;
            this.items = {};
        }
        push(element) {
            this.items[this.count] = element;
            this.count++;
            console.log(this.count);
        }
        pop() {
            if (this.isEmpty()) {
                return undefined;
            }
            // - 为什么要首先执行 this.count--? A: 因为 items 对象中
            //   键值对的索引是从 0 开始的, count 始终大 1, 所以需要先减 1. 
            this.count--;
            const result = this.items[this.count];
            delete this.items[this.count];
            return result;
        }
        peek() {
            if (this.isEmpty()) {
                return undefined;
            }
            // - Note: 此处是查看栈顶, 即对象的末尾项.
            console.log(this.items[this.count - 1]);
            return this.items[this.count - 1];
        }
        isEmpty() {
            return this.count === 0;
        }
        size() {
            return this.count;
        }
        clear() {
            this.items = {};
            this.count = 0;
        }
        toString() {
            if (this.isEmpty()) {
                return "";
            }
            let objString = `${this.items[0]}`;
            for (let i = 1; i < this.count; i++) {
                objString = `${objString}, ${this.items[i]}`;
            }
            return objString;
        }
    }

    let stack = new Stack();
    stack.push(4);
    stack.push("我是第二项");
    stack.push("2426");
    stack.peek();   // "2426"
    // stack.pop();
    console.log(stack.items);   // {0: 4, 1: "我是第二项", 2: "2426"}
    console.log(stack.toString());  // 4, 我是第二项, 2426
  ```


### 4.4 保护数据结构内部元素
- 4.4.1 下划线命名约定
- 4.4.2 用 ES2015 的限定作用域 Symbol 实现类
- 4.4.3 用 ES2015 的 WeakMap 实现类
    * ES6 的类是基于原型的. 虽然基于原型的类比基于函数的类更节省内存, 也更适合创建多个实例,
      却不能够声明私有属性(变量)或方法.
    + 有一种数据类型可以确保属性是私有的, 这就是 WeakMap.我们会在第 8 章深入探讨 Map
        这种数据结构, 现在只需要知道 WeakMap 可以存储键值对, 其中键是对象, 值可以是任意
        数据类型.
    + 如果用 WeakMap 来存储 items 属性 (数组版本), Stack 类就是这样的: 
      ```javascript
        const _items = new WeakMap();
        const _count = new WeakMap();
        class Stack {
            constructor() {
                _items.set(this, []);
                _count.set(this, 0);
            }
            push(element) {
                // - 最原始的向栈添加元素的写法是: items= [] (为一个空数组)
                // this.item.push(element);
                const items = _items.get(this);
                const count = _count.get(this);
                items[count] = element;
                _count.set(this, count + 1);
            }
            // - pop 从栈移除元素.(Tip；从数组 `pop()`方法删除数组末尾的元素, 的
            //   定义可以, pop 移除元素是从栈顶移除, 也即是 "后进先出")
            pop() {
                if(this.isEmpty()) {
                    return undefined;
                }
                const items = _items.get(this);
                let count = _count.get(this);
                count--;
                _count.set(this, count);
                const result = items[count];
                delete items[count];
                return result;
            }
            // - peek 查看栈顶元素
            peek() {
                if (this.isEmpty()) {
                    return undefined;
                }
                const items = _items.get(this);
                const count = _count.get(this);
                return items[count - 1];
            }
            // - isEmpty 检查栈是否为空
            isEmpty() {
                return _count.get(this) === 0;
            }
            // - size 返回栈里的元素个数. 这个方法和数组的 length 属性很类似.
            size() {
                return _count.get(this);
            }
            // - clear 清空和打印栈元素
            clear() {
                _count.set(this, 0);
                _items.set(this, 0);
            }
            // - toString 打印栈的内容
            toString() {
                if (this.isEmpty()) {
                    return '';
                }
                const items = _items.get(this);
                const count = _count.get(this);
                let objString = `${items[0]}`;
                for (let i = 1; i < count; i++) {
                    objString = `${objString}, ${items[i]}`;
                }
                return objString;
            }
        }

        let stack = new Stack();
        stack.push(6);
      ```
        - {1}: 声明一个 WeakMap 类型的变量 items.
        - {2}: 在 constructor 中, 以 this (Stack类自己的引用. Tip:即 Stack 
            构造函数的实例) 为键, 把代表栈的数组存入 items.
        - {3}: 从 WeakMap 中取出值, 即以 this 为键 (行 {2} 设置的) 从 items 中取值.
- 4.4.4 ECMAScript 类属性提案        

### 4.5 用栈解决问题
#### 从 10 进制 到 2 进制
- 进制转换的详细笔记见: `Mathematics-learning/《程序员的数学》/进制转换.md`
- 基本的 10 进制转 2 进制算法描述:
    ```javascript
    // - decimal number 十进制的
    function divideBy2 (decNum) {
        // - remainder stack 余数栈
        let remStack = new Stack();
        let rem;
        let binaryString = "";

        while(decNum > 0) {     // (1)
            rem = Math.floor(decNum % 2);   // (2)
            remStack.push(rem); // (3)
            decNum = Math.floor(decNum / 2);    // (4)
        }

        while(!remStack.isEmpty()) {    // (5)
            binaryString += remStack.pop().toString();
        }
        return binaryString;
    }
    console.log(divideBy2(233));    // 11101001
    console.log(divideBy2(10));     // 1010
    console.log(divideBy2(1000));   // 1111101000
    ```
+ **进制转换算法**
    ```javascript
    function baseConverter (decNum, base) {
        let remStack = new Stack();
        let rem;
        let baseString = "";
        let digits = "0123456789ABCDEF";
        while (decNum > 0) {
            rem = Math.floor(decNum % base);
            remStack.push(rem);
            decNum = Math.floor(decNum / base);
        }
        while (!remStack.isEmpty()) {
            baseString += digits[remStack.pop()];
        }
        return baseString;
    }
    ```
### 4.6 小结
