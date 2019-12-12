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
- **eliminate [ɪ'lɪmɪneɪt] --vt.消除，消灭，清除，淘汰**
    + eliminate unnecessary words from an essay. 从论文中删去不必要的字.
    + You have been eliminated from the race. 你已经被淘汰了.
    + eliminate the false and retain the true. 去伪存真
    + Eliminate render-blocking resources 消除渲染阻塞资源
- **palindrome ['pælɪndrəʊm] --n.回文**
    + palindrome checker. 回文检查器
    + The words 'deed' and 'level' are palindromes.  
     'deed' 和 'level' 两个词是回文. 


## 本章内容 (Content)
### 5.1 队列数据结构
- *队列和栈非常类似, 但是使用了不同的原则, 而非后进先出(Last-in-First-out, LIFO)*
- 队列是遵循 `FIFO (First-in-First-out) 先进先出` 也称为 "先来先服务" 原则的一组有序
  的项.队列在尾部添加新元素, 并从顶部移除元素. 最新添加的元素必须排在队列的末尾.
  + Tip: 队列末尾(栈顶)/栈底 --> 见 `chapter03-栈.md`
- 在现实中, 最常见的队列的例子就是排队.  
- **5.1.1 创建队列**
    + (1) 向队列添加元素: `enqueue(element(s))` -- 向队列尾部添加一个(或多个) 新的项.
    + (2) 从队列移除元素: `dequeue()` -- 移除队列的第一项并返回被移除的项.
    + (3) 查看队列头元素: `peek()` -- 该方法会返回队列最前面的项 
    + (4) 检查队列是否为空: `isEmpty()`
    + (5) 打印队列元素: `toString()`
    + (6) 获取队列的长度: `size()`
    + (7) 清空队列: `clear()`
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
                // - 模板插值太强了
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
- 双端队列(deque, 或称 double-ended queue) 是一种允许我们同时从前端和后端添加和移除
  元素的特殊队列.
- 双端队列在现实生活中的例子有 电影院, 餐厅中排队的队伍等.
- 在计算机科学中, 双端队列的一个常见应用是存储一系列的撤销操作. 每当用户在软件中进行了
  一个操作, 该操作会被存在一个双端队列中(就像在一个栈里). 当用户点击撤销按钮时, 该操作
  会被从双端队列中弹出, 表示它被从后面移除了. 在进行了预先定义的一定数量的操作后, 最先
  进行的操作会被是从双端队列的前端移除. 由于双端队列同时遵循了先进先出和后进先出原则,
  可以说**它是把队列和栈相结合的一种数据结构**.
- **5.2.1 创建Deque类**
    + 由于双端队列允许在两端添加和移除元素，还会有下面几个方法。
        - `addFront(element)`：该方法在双端队列前端添加新的元素。
        - `addBack(element)`：该方法在双端队列后端添加新的元素（实现方法和 Queue
          类中的 enqueue 方法相同）。
        - `removeFront()`：该方法会从双端队列前端移除第一个元素（实现方法和 Queue 
          类中的 dequeue 方法相同）。
        - `removeBack()`：该方法会从双端队列后端移除第一个元素（实现方法和 Stack 类
          中的 pop 方法一样）。
        - `peekFront()`：该方法返回双端队列前端的第一个元素（实现方法和 Queue 类中的
          peek 方法一样）。
        - `peekBack()`：该方法返回双端队列后端的第一个元素（实现方法和 Stack 类中的 
          peek 方法一样）。
        - Deque 类同样实现了 isEmpty、 clear、 size 和 toString 方法（你可以下载
          本书的源代码包查看完整的源代码）。
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
        const deque = new Deque();
        console.log(deque.isEmpty()); // 输出 true
        deque.addBack('John');
        deque.addBack('Jack');
        console.log(deque.toString()); // John, Jack
        deque.addBack('Camila');
        console.log(deque.toString()); // John, Jack, Camila
        console.log(deque.size()); // 输出 3
        console.log(deque.isEmpty()); // 输出 false
        deque.removeFront(); // 移除 John
        console.log(deque.toString()); // Jack, Camila
        deque.removeBack(); // Camila 决定离开
        console.log(deque.toString()); // Jack
        deque.addFront('John'); // John 回来询问一些信息
        console.log(deque.toString()); // John, Jack
      ```
      
### 5.3 使用队列和双端队列来解决问题
- **5.3.1 循环队列一 击鼓传花游戏**
    + 由于队列经常被用在计算机领域和我们的现实生活中, 就出现了一些队列的修改版本, 我们
      会在本章实现他们. 这其中的一种叫做 **循环队列**. 循环队列的一个例子就是击鼓传花
      游戏(hot potato). 在这个游戏中，孩子们围成一个圆圈，把花尽快地传递给旁边的人。
      某一时刻传花停止，这个时候花在谁手里，谁就退出圆圈、结束游戏。重复这个过程，直到
      只剩一个孩子（胜者）。
      ```javascript
        // - 实现一个模拟的击鼓传花游戏，要用到本章开头实现的 Queue 类（行{1}）。
        //   我们会得到一份名单，把里面的名字全都加入队列（行{2}）。给定一个数字，
        //   然后迭代队列。从队列开头移除一项，再将其添加到队列末尾（行{3}），模拟
        //   击鼓传花（如果你把花传给了旁边的人，你被淘汰的威胁就立刻解除了）。一旦
        //   达到给定的传递次数，拿着花的那个人就被淘汰了（从队列中移除——行{4}）。
        //   最后只剩下一个人的时候，这个人就是胜者（行{5}）。
        function hotPotato(elements, num) {
            const queue = new Queue(); // {1}
            const eliminatedList = [];
            for (let i = 0; i < elements.length; i++) {
                queue.enqueue(elements[i]); // {2}
            }
            while (queue.size() > 1) {
                for (let i = 0; i < num; i++) {
                    // - `dequeue()` -- 移除队列的第一项并返回被移除的项.
                    queue.enqueue(queue.dequeue())  // {3}
                }
                eliminatedList.push(queue.dequeue());   // {4}
            }
            return {
                eliminated: eliminatedList,
                winner: queue.dequeue()    // {5}
            }
        }
        // - 调用
        const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
        const result = hotPotato(names, 7);
        result.eliminated.forEach(name => {
            console.log(`${name} 在击鼓传花游戏中被淘汰.`);
        });
        console.log(`胜利者: ${result.winner}`);
      ```
- **5.3.2 回文检查器**
- **5.3.3 JavaScript 任务队列**

### 5.4 小结

