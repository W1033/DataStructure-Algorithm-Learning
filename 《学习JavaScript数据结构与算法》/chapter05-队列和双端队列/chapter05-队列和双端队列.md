# 第 5 章 -- 队列

## 本章目录 (Catalog)
- 5.1 队列数据结构
    + 5.1.1 创建队列
    + 5.1.2 使用Queue类
- 5.2 双端队列数据结构
    + 5.2.1 创建Deque类
    + 5.2.2 使用Deque类
- 5.3 使用队列和双端队列来解决问题
    + 5.3.1 循环队列一 击鼓传花游戏
    + 5.3.2 回文检查器
    + 5.3.3 JavaScript 任务队列
- 5.4 小结


## 生词 (New Words)
- **queue [kjuː] --n.队列，顺序。--vi.排队, 排成一行**
    + task queue 任务队列 (Node.js 任务队列)
    + in a queue(n). 成一行
    + form a queue(n). 排成一行
    + You have to queue(vi) up at the bus stop [for the bus].
        你在公车站[等公共汽车时]必须排队。
- **enqueue [ɪn'kjuː] --v.入队**
    + Enqueue Task. 任务
    + Enqueue time. 入队时间
- **dequeue [di'kju:] --vi.出列, 出队**
    + Packets are enqueued for transmission and dequeued by the device driver.
      数据包是由设备驱动进行入队传输和出队.
      


## 本章内容 (Content)
### 5.1 队列数据结构
- *队列和栈非常类似, 但是使用了不同的原则, 而非后进先出(Last-in-First-out, LIFO)*
- 队列是遵循 `FIFO (First-in-First-out) 先进先出` 也称为 "先来先服务" 原则的一组有序
  的项.队列在尾部添加新元素, 并从顶部移除元素. 最新添加的元素必须排在队列的末尾.
  
  + Tip: 队列末尾(栈顶)/栈底 --> 见 `chapter03-栈.md`
- 在现实中, 最常见的队列的例子就是排队.  
- **5.1.1 创建队列**
    + (1) 向队列添加元素 (enqueue())
    + (2) 从队列移除元素 (dequeue())
    + (3) 检查队列头元素 (front())
    + (4) 检查队列是否为空 (isEmpty())
    + (5) 打印队列元素 (print())
    + 下面给出 Queue 队列的实现方法:
      ```javascript
        // - Queue 类和上一张的 Stack 类非常相似, 只是添加和移除元素的原则不同.
        export default class Queue {
            constructor() {
                this.count = 0;     // - 作为 items 对象的索引
                this.lowestCount = 0;   // - 最低数量(Tip:作用类似于 arr[0] 总取第一项)
                this.items = {};    // - items 用于保存队列中的项 (key:value 结构)
            }
            // - 添加一项到队列末尾 
            // - Question: 这个方法只可以添加一项, 以后若有时间可以改写一下允许添加多项.
            enqueue(element) {
                // - 当前构造函数的 count 属性作为 key(键), element 作为 value(值), 
                //   保存到 items 对象属性中.
                this.items[this.count] = element;
                this.count++;
            }
            // - 删除队列的第一项(元素)
            dequeue() {
                if (this.isEmpty()) {
                    return undefined;
                }
                // - 取到数组的第一项
                const result = this.items[this.lowestCount];
                delete this.items[this.lowestCount];
                this.lowestCount++;
                return result;
            }
            // - Note: 此处 peek() 查看队列的第一项(即对象中的第一项), 而第三章 Stack 类
            //   的 peek() 方法是查看栈顶项(即数组的末尾项).
            peek() {
                if (this.isEmpty) {
                    return undefined;
                }
                // - 返回对象中的第一项
                return this.items[this.lowestCount];
            }
            isEmpty() {
                return this.size() === 0;
            }
            clear() {
                this.items = {};
                this.count = 0;
                this.lowestCount = 0;
            }
            size() {
                return this.count - this.lowestCount;
            }
            toString() {
                if (this.isEmpty()) {
                    return "";
                }
                // - 模板插值太强了, 可以保存上次的数据
                let objString = `${this.items[this.lowestCount]}`;
                for (let i = this.lowestCount + 1; i < this.count; i++) {
                    console.log("before ojbString: ", `${objString}`);
                    objString = `${objString}, ${this.items[i]}`;
                    console.log("After ojbString: ", `${objString}`);
                }
                return objString;
            }
        }

        const queue = new Queue();
        console.log(queue.isEmpty());
        queue.enqueue("John");
        queue.enqueue("Jack");
        queue.enqueue("Lynch");
        queue.enqueue("Dannel");
        console.log(queue.toString());  // John, Jack, Lynch, Dannel
      ```
- **5.1.2 使用Queue类**

### 5.2 双端队列数据结构
- **5.2.1 创建Deque类**
    + ```javascript
         export default class Deque {
            constructor() {
                this.count = 0;
                this.lowestCount = 0;
                this.items = {};
            }
            addFront(element) {
                if (this.isEmpty()) {
                    this.addBack(element);
                } else if (this.lowestCount > 0) {
                    this.lowestCount--;
                    this.items[this.lowestCount] = element;
                } else {
                    for (let i = this.count; i > 0; i--) {
                        this.items[i] = this.items[i - 1];
                    }
                    this.count++;
                    this.items[0] = element;
                }
            }
            addBack(element) {
                this.items[this.count] = element;
                this.count++;
            }
            removeFront() {
                if (this.isEmpty()) {
                    return undefined;
                }
                const result = this.items[this.lowestCount];
                delete this.items[this.lowestCount];
                this.lowestCount++;
                return result;
            }
            removeBack() {
                if (this.isEmpty()) {
                    return undefined;
                }
                this.count--;
                const result = this.items[this.count];
                delete this.items[this.count];
                return result;
            }
            peekFront() {
                if (this.isEmpty()) {
                    return undefined;
                }
                return this.items[this.lowestCount];
            }
            peekBack() {
                if (this.isEmpty()) {
                    return undefined;
                }
                return this.items[this.count - 1];
            }
            isEmpty() {
                return this.size() === 0;
            }
            clear() {
                this.items = {};
                this.count = 0;
                this.lowestCount = 0;
            }
            size() {
                return this.count - this.lowestCount;
            }
            toString() {
                if (this.isEmpty()) {
                    return '';
                }
                let objString = `${this.items[this.lowestCount]}`;
                for (let i = this.lowestCount + 1; i < this.count; i++) {
                    objString = `${objString},${this.items[i]}`;
                }
                return objString;
            }
        }
      ```
- **5.2.2 使用Deque类**
    + ```javascript
        
      ```

### 5.3 使用队列和双端队列来解决问题
- **5.3.1 循环队列一 击鼓传花游戏**
- **5.3.2 回文检查器**
- **5.3.3 JavaScript 任务队列**

### 5.4 小结

