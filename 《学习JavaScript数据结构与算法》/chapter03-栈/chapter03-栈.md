# 第 3 章: 栈 (Stack)


## 本章目录 (Catalog)
- 3.1 栈数据结构 
- 3.2 ECMAScript 6 和 Stack 类
- 3.3 用栈解决问题
- 3.4 小结


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
    

#### 3.1 栈数据结构 
- 3.1.1 创建栈
- 3.1.2 向栈添加元素
- 3.1.3 从栈移除元素
- 3.1.4 查看栈顶元素
- 3.1.5 检查栈是否为空
- 3.1.6 清空和打印栈元素
#### 3.2 ECMAScript 6 和 Stack 类
- 用 ES6 语法声明 Stack 类
    * ES6 的类是基于原型的. 虽然基于原型的类比基于函数的类更节省内存, 也更适合创建多个实例,
      却不能够声明私有属性(变量)或方法.
    + (1) 用 ES6 的限定作用域 Symbol 实现类
    + (2) 用 ES6 的 WeakMap 实现类
        - 有一种数据类型可以确保属性是私有的, 这就是 WeakMap.我们会在第 8 章深入探讨 Map
          这种数据结构, 现在只需要知道 WeakMap 可以存储键值对, 其中键是对象, 值可以是任意
          数据类型.
        - 如果用 WeakMap 来存储 items 属性 (数组版本), Stack 类就是这样的: 
          ```javascript
            const _items = new WeakMap();
            const _count = new WeakMap();
            class Stack {
                constructor() {
                    _items.set(this, []);
                    _count.set(this, 0);
                }
                // - push 向栈添加元素: 该方法只添加元素到栈顶, 也就是栈的末(mo)尾.
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
            + {1}: 声明一个 WeakMap 类型的变量 items.
            + {2}: 在 constructor 中, 以 this (Stack类自己的引用. Tip:即 Stack 
              构造函数的实例) 为键, 把代表栈的数组存入 items.
            + {3}: 从 WeakMap 中取出值, 即以 this 为键 (行 {2} 设置的) 从 items 中取值.
#### 3.3 用栈解决问题
- **从 10 进制 到 2 进制**
    + 进制转换的详细笔记见: `Mathematics-learning/《程序员的数学》/进制转换.md`
    + 基本的 10 进制转 2 进制算法描述:
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
#### 3.4 小结