# 第 6 章 -- 链表

## 本章目录 (Catalog)
- 6.1 链表数据结构
- 6.2 双向链表
    + 6.2.1 -- 在任意位置插入新元素
    + 6.2.2 -- 从任意位置移除元素
- 6.3 循环链表 
    + 6.3.1 -- 在任意位置插入新元素
    + 6.3.2 -- 从任意位置移除元素
- 6.4 有序链表
    + 6.4.1 -- 有序插入元素
- 6.5 创建 `StackLinkedList` 类
- 6.6 小结


## 生词 (New Words)
- **doubly ['dʌblɪ] --adv.双重地; 双倍地**
    + doubly linked list 双向链表
    + You must be doubly careful. 你必须加倍小心.
    + He is doubly troubled, by illness and poverty.  
      他受着疾病和贫穷的双重困扰.


## Added 
> [线性表-维基百科](https://zh.wikipedia.org/zh-cn/%E7%BA%BF%E6%80%A7%E8%A1%A8)
- `线性表(Linear List)` 
    + 是由 n(n≥0) 个数据元素(结点) `a[0], a[1], a[2]..., a[n-1]`组成的有限序列. 
      其中: 
        - 数据元素的个数 n 定义为表的长度 = `"list".length()` 
          ("list".length() = 0（表里没有一个元素）时称为空表）
        - 将非空的线性表（n >=1 ）记作：（a[0]，a[1]，a[2]，…，a[n-1]）
        - 数据元素 a[i]（0 ≤ i ≤ n-1）只是个抽象符号，其具体含义在不同情况下可以不同.  
    + 一个数据元素可以由若干个数据项组成。数据元素称为记录，含有大量记录的线性表又称为文件。
      这种结构具有下列特点：
        - 存在一个唯一的没有前驱的（头）数据元素；
        - 存在一个唯一的没有后继的（尾）数据元素；
        - 此外，每一个数据元素均有一个直接前驱和一个直接后继数据元素。 　
- 线性表的存储结构:
    + (1) 顺序表: 顺序表是在**计算机内存中**以**数组**的形式保存的线性表, 是指用一组
      **地址**连续的`存储单元`依次存储数组元素的线性结构.
    + (2) 链表
        + <1> 单链表
            - 动态单链表
                + 动态链表是用内存申请函数（malloc/new）动态申请内存的，所以在链表
                  的长度上没有限制。动态链表因为是动态申请内存的，所以每个节点的物理
                  地址不连续，要通过指针来顺序访问。
            - 静态单链表
                + 静态链表是用类似于数组方法实现的，是顺序的存储结构，在物理地址上是
                  连续的，而且需要预先分配地址空间大小。所以静态链表的初始长度一般是
                  固定的，在做插入和删除操作时不需要移动元素，仅需修改指针.
        + <2> 双链表
        + <3> 循环链表
            - 单循环链表
            - 双循环链表 
> [链表-维基百科](https://zh.wikipedia.org/zh-cn/%E9%93%BE%E8%A1%A8)
- `链表（Linked list`:
    + 链表是一种常见的基础数据结构，是一种线性表，但是并不会按线性的顺序存储数据，而是在
      每一个节点里存储到下一个节点的指针(Pointer)。由于不必按顺序存储，链表在插入的时候
      可以达到 `O(1)` 的复杂度，比另一种线性表`顺序表`快得多，但是查找一个节点或者访问
      特定编号的节点则需要 `O(n)` 的时间，而顺序表相应的时间复杂度分别是 `O(logn)`
      和 `O(1)`。
    + 使用链表结构可以克服数组链表需要预先知道数据大小的缺点，链表结构可以充分利用计算机
      内存空间，实现灵活的内存动态管理。但是链表失去了数组随机读取的优点，同时链表由于
      增加了结点的指针域，空间开销比较大。
    + 在计算机科学中，链表作为一种基础的数据结构可以用来生成其它类型的数据结构。链表通常
      由一连串节点组成，每个节点包含任意的实例数据（data fields）和一或两个用来指向
      上一个/下一个节点的位置的链接（links）。
    + 链表最明显的好处就是，常规数组排列关联项目的方式可能不同于这些数据项目在记忆体或
      磁盘上顺序，数据的访问往往要在不同的排列顺序中转换。而链表是一种自我指示数据类型，
      因为它包含指向另一个相同类型的数据的指针（链接）。
      链表允许插入和移除表上任意位置上的节点，但是不允许随机存取。链表有很多种不同的类型
      ：单向链表，双向链表以及循环链表。
    + 链表可以在多种编程语言中实现。像 Lisp 和 Scheme 这样的语言的内建数据类型中就包含
      了链表的访问和操作。程序语言或面向对象语言，如C/C++和Java依靠易变工具来生成链表。

## 本章内容 (Content)
- 我们在第 3章学习了数组这种数据结构。数组（也可以称为列表）是一种非常简单的存储数
  据序列的数据结构。在本章，你会学习如何实现和使用链表这种动态的数据结构，这意味着我们
  可以从中随意添加或移除项，它会按需进行扩容。
### 6.1 链表数据结构
- 要存储多个元素，数组（或列表）可能是最常用的数据结构。然而，这种数据结构有一个缺点：
  (在大多数语言中) 数组的大小是固定的，从数组的起点或中间插入或移除项的成本很高，因为需要
  移动元素。（尽管我们已经学过，JavaScript 有来自 Array 类的方法可以帮我们做这些事，
  但背后的情况同样如此。）
- 链表存储有序的元素集合，但不同于数组，链表中的元素在内存中并不是连续放置的。每个元素由
  一个存储元素本身的节点和一个指向下一个元素的引用（也称指针或链接）组成。下图展示了一个
  链表的结构.  
  <img src="./img/linked-list-show-pic.jpg">
#### 6.1.1 创建链表  
- 我们先来看看 LinkedList 类的方法:
    + (1) `push(element)` ：向链表尾部添加一个新元素。 
    + (2) `insert(element, position)` ：向链表的特定位置插入一个新元素。
    + (3) `getElementAt(index)` ：返回链表中特定位置的元素。如果链表中不存在
      这样的元素，则返回 undefined 。
    + (4) `remove(element)` ：从链表中移除一个元素。
    + (5) `indexOf(element)` ：返回元素在链表中的索引。如果链表中没有该元素则返回 -1 。
    + (6) `removeAt(position)` ：从链表的特定位置移除一个元素。
    + (7) `isEmpty()` ：如果链表中不包含任何元素，返回 true ，如果链表长度大于 0 则
      返回 false 。
    + (8) `size()` ：返回链表包含的元素个数，与数组的 length 属性类似。
    + (9) `toString()` ：返回表示整个链表的字符串。由于列表项使用了 Node 类，就需要
      重写继承自 JavaScript 对象默认的 toString 方法，让其只输出元素的值。
- **6.1.1-1 向链表尾部添加元素 `push(element)`**
    + 向 LinkedList 对象尾部添加一个元素时，可能有两种场景：链表为空，添加的是第一个
      元素；链表不为空，向其追加元素。
    + Note: 书上 P97 页的 图(1)有问题, 一旦往 list 中添加元素, 请忽略图中的 head, 
      因为添加的元素填充了 head, 它已经变成了正常的节点 head(node). 所以在 ps 中
      更改 图(1) 为 图 (2).  
      <img src="./img/list.png" width="70%;">
- **6.1.1-2 从链表移除元素 `removeAt(index)`**: removeAt(index) 从特定位置
  移除一个元素      
- **6.1.1-3 循环迭代链表直到目标位置 `getElementAt(index)`**      
- **6.1.1-4 在任意位置插入元素 `insert(element, position)`**      
- **6.1.1-5 返回一个元素的位置 `indexOf(element)`**
- **6.1.1-6 从链表中移除元素 `remove(element)`**: remove(element) 根据元素的值
  移除元素
- **6.1.1-7 `isEmpty, size 和 getHead` 方法**
- **6.1.1-8 `toString` 方法**
- **LinkedList 完整实现**:
  ```javascript
    function defaultEquals(a, b) {
        return a === b;
    }
    // - (1) 要表示链表中的第一个以及其他元素，我们需要一个助手类，叫作 Node. Node 类表示
    //   我们想要添加到链表中的项。它包含一个 element 属性，该属性表示要加入链表元素
    //   的值；以及一个 next 属性，该属性是指向链表中下一个元素的指针。 
    class Node {
        constructor(element, next) {
            this.element = element;
            this.next = next;
        }
    }

    // - 链表 (Linked list) 完整源码
    // - (2) LinkedList 类提供节点插入, 删除和查找. 
    class LinkedList {
        constructor(equalsFn = defaultEquals) {
            this.equalsFn = equalsFn;
            this.count = 0;
            this.head = undefined;
        }

        // - push(element): 向链表尾部添加一个新元素.
        push(element) {
            const newNode = new Node(element); // {1}
            // - current: 指向链表中 current (当前) 项的变量.
            let current;    // {2}
            if (this.head == null) {    // {3}
                // - 把要添加的 newNode (新节点实例) 赋值给 head.
                this.head = newNode;
            }
            else {
                // - 要向链表的尾部添加一个元素, 首先需要找到最后一个元素. 记住, 我们
                //   只有第一个元素的引用 (行{4}), 因此需要循环访问列表, 直到找到最后
                //   一项. 为此, 我们需要一个指向链表中 current 项的变量(行{2}).
                current = this.head; // {4}

                // - 在循环访问链表的过程中，当 current.next 元素为 undefined 或
                //   null 时，我们就知道已经到达链表尾部了(行{5})。然后要做的就是让当前
                //   (也就是最后一个)元素的 next 指针指向想要添加到链表的节点(行{6}).
                while (current.next != null) {  // {5} 获得最后一项
                    current = current.next;
                }
                current.next = newNode;    // {6}

                // - 测试执行完后输出结果为:
                // - Node {element: 15, next: Node}
                //   + element: 15
                //   + next: Node
                //     - element: 10
                //     - next: Node
                //       + element: 5
                //       + next: Node
                //         - element: 6
                //         - next: Node
                //           + element: 9
                //           + next: undefined
                //           + __proto__: Object
                //         - __proto__: Object
                //       + __proto__: Object
                //     - __proto__: Object
                //   + __proto__: Object
                console.log(current);
            }
            this.count++;   // {7}
            // console.log('this.count:', this.count);
        }

        // - getElementAt(index): 返回链表中特定位置的元素. 如果链表中不存在这样的
        //   元素, 则返回 undefined.
        getElementAt(index) {
            if (index >= 0 && index <= this.count) {
                let node = this.head;
                // - 为什么是 `i < index && node != null` ?  A: 比如调用了
                //   remove()/removeAt() 方法后 this.head 即链表的第一项时可能
                //   变化的, 所以我们每次 for 循环时这样判断更好.
                for (let i = 0; i < index && node != null; i++) {
                    node = node.next;
                }
                return node;
            }
            return undefined;
        }

        // - (2) 从链表中移除元素
        // - 现在，让我们看看如何从 LinkedList 对象中移除元素。我们要实现两种 remove
        //   方法：第一种是从特定位置移除一个元素(removeAt)，第二种是根据元素的值移除
        //   元素(稍后会展示第二种 remove 方法). 和 push 方法一样, 从链表中移除元素
        //   也存在两种场景: 第一种是移除第一个元素, 第二种是移除第一个元素之外的其他元素。
        removeAt(index) {
            if (index >= 0 && index < this.count) { // {1}
                let current = this.head;    // {2}
                // - 移除第一项
                if (index === 0) {  // {3}
                    this.head = current.next;
                }
                else {
                    // - Tip: `index - 1` 是因为我们取得的是 previous 上一项
                    const previous = this.getElementAt(index - 1);

                    // previous.element:  15
                    console.log('previous.element: ', previous.element);

                    current = previous.next;
                    // - 把当前项的下一项(current.next), 赋值给上一项的下一项
                    //   (previous.next) 也即是赋值给当前项(current), 那么当前项
                    //   就被替覆盖了.
                    previous.next = current.next;
                }
                this.count--;
                return current.element;
            }
            return undefined;
        }

        // - remove(element): 从链表中移除一个元素
        remove(element) {
            const index = this.indexOf(element);
            return this.removeAt(index);
        }

        // - insert(element, index): 向链表的特定位置插入一个新元素.
        insert(element, index) {
            if (index >= 0 && index <= this.count) {
                const node = new Node(element);
                // - 第 1 种场景是需要在链表的起点添加一个元素, 也就是第一个位置.
                if (index === 0) {
                    node.next = this.head;
                    this.head = node;
                }
                // - 第 2 种场景在链表中间或尾部添加一个元素.
                else {
                    // - (index-1) 表示需要添加新节点位置的前一个位置.
                    const previous = this.getElementAt(index - 1);
                    node.next = previous.next;
                    previous.next = node;
                }
                this.count++;
                return true;
            }
            return false;
        }

        // - indexOf(element): 返回元素在链表中的索引. 如果链表中没有该元素则返回 -1.
        indexOf(element) {
            let current = this.head;
            for (let i = 0; i < this.size() && current != null; i++) {
                if (this.equalsFn(element, current.element)) {
                    return i;
                }
                current = current.next;
            }
            return -1;
        }
        isEmpty() {return this.size() === 0;}
        size() {return this.count;}
        getHead() {return this.head;}
        clear() {
            this.head = undefined;
            this.count = 0;
        }
        // - (8) toString 方法会把 LinkedList 对象转换成一个字符串.
        toString() {
            if (this.head == null) {
                return '';
            }
            let objString = `${this.head.element}`;
            let current = this.head.next;
            for (let i = 1; i < this.size() && current != null; i++) {
                objString = `${objString},${current.element}`;
                current = current.next;
            }
            return objString;
        }
    }

    const list = new LinkedList();
    list.push(15);
    list.push(10);
    list.push(5);
    list.push(6);
    list.push(9);

    // console.log(list.removeAt(0));  // 15
    console.log(list.removeAt(1));  // 10
    // console.log(list.removeAt(3));

    // console.log("list:");
    // console.log(list);
    // console.log(list.toString());
  ```
### 6.2 双向链表
- 一种更复杂的链表是"双向链表" 或 "双面链表". 在单向链表中,一个节点只有链向下一个节点的
  链接; 而在双向链表中, 每个节点都有 2 个链接: 一个链接指向前一个节点 (链表中第一个节点
  指向的前一个节点为空值{undefined}), 而另一个链接指向下一个节点 (链表中最后一个节点
  指向下的下一个节点为空值{undefined}).  如下图所示。  
  <img src="./img/dobly-linked-list.jpg">
- **6.2.1 在任意位置插入新元素**
- **6.2.2 从任意位置移除元素**
- ```javascript
    import { defaultEquals } from '../util';
    import LinkedList from './linked-list';
    import { DoublyNode } from './models/linked-list-models';
    
    export default class DoublyLinkedList extends LinkedList {
      constructor(equalsFn = defaultEquals) {
        super(equalsFn);
        this.tail = undefined;
      }
    
      push(element) {
        const node = new DoublyNode(element);
        if (this.head == null) {
          this.head = node;
          this.tail = node; // NEW
        } else {
          // attach to the tail node // NEW
          this.tail.next = node;
          node.prev = this.tail;
          this.tail = node;
        }
        this.count++;
      }
    
      insert(element, index) {
        if (index >= 0 && index <= this.count) {
          const node = new DoublyNode(element);
          let current = this.head;
          if (index === 0) {
            if (this.head == null) { // NEW
              this.head = node;
              this.tail = node; // NEW
            } else {
              node.next = this.head;
              this.head.prev = node; // NEW
              this.head = node;
            }
          } else if (index === this.count) { // last item NEW
            current = this.tail;
            current.next = node;
            node.prev = current;
            this.tail = node;
          } else {
            const previous = this.getElementAt(index - 1);
            current = previous.next;
            node.next = current;
            previous.next = node;
            current.prev = node; // NEW
            node.prev = previous; // NEW
          }
          this.count++;
          return true;
        }
        return false;
      }
    
      removeAt(index) {
        if (index >= 0 && index < this.count) {
          let current = this.head;
          if (index === 0) {
            this.head = this.head.next;
            // if there is only one item, then we update tail as well //NEW
            if (this.count === 1) {
              // {2}
              this.tail = undefined;
            } else {
              this.head.prev = undefined;
            }
          } else if (index === this.count - 1) {
            // last item //NEW
            current = this.tail;
            this.tail = current.prev;
            this.tail.next = undefined;
          } else {
            current = this.getElementAt(index);
            const previous = current.prev;
            // link previous with current's next - skip it to remove
            previous.next = current.next;
            current.next.prev = previous; // NEW
          }
          this.count--;
          return current.element;
        }
        return undefined;
      }
    
      indexOf(element) {
        let current = this.head;
        let index = 0;
        while (current != null) {
          if (this.equalsFn(element, current.element)) {
            return index;
          }
          index++;
          current = current.next;
        }
        return -1;
      }
    
      getHead() {
        return this.head;
      }
    
      getTail() {
        return this.tail;
      }
    
      clear() {
        super.clear();
        this.tail = undefined;
      }
    
      toString() {
        if (this.head == null) {
          return '';
        }
        let objString = `${this.head.element}`;
        let current = this.head.next;
        while (current != null) {
          objString = `${objString},${current.element}`;
          current = current.next;
        }
        return objString;
      }
    
      inverseToString() {
        if (this.tail == null) {
          return '';
        }
        let objString = `${this.tail.element}`;
        let previous = this.tail.prev;
        while (previous != null) {
          objString = `${objString},${previous.element}`;
          previous = previous.prev;
        }
        return objString;
      }
    }

  ```
### 6.3 循环链表 
- 循环链表可以像链表一样只有单向引用, 也可以像双向链表一样有双向引. 循环链表和链表之间
  唯一的区别在于, 最后一个元素指向下一个元素的指针 (tail.next) 不是引用 undefined,
  而是指向第一个元素 (head), 
- **`单向循环链表 (one-way circular linked list)`** 如下图所示.   
  <img src="./img/one-way-circular-linked-list.jpg" style="width:90%">
- **`双向循环链表 (doubly circular linked list)`** : 有指向 head 元素的 
  tail.next 和 指向 tail 元素的 head.prev.  
  <img src="./img/dobly-circular-linked-list.jpg" style="width:90%">
- 6.3.1 在任意位置插入新元素
- 6.3.2 从任意位置移除元素

### 6.4 有序链表
- 有序链表: 有序链表是指保持元素有序的链表结构. 除了使用排序算法之外, 我们还可以将元素
  插入到正确的位置来保证链表的有序性.
#### 6.4.1 有序插入元素
- 我们会用下面的代码来覆盖 insert 方法: 
  ```html
     <script src="01-linked-list.js"></script>
     <script>
        const Compare = {
            LESS_THAN: -1,
            BIGGER_THAN: 1,
        };
        function defaultCompare(a, b) {
            if (a === b) {
                return 0;
            }
            return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
        }
        class SortedLinkedList extends LinkedList {
            constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
                super(equalsFn);
                this.compareFn = compareFn;
            }
            // ### 6.4.1 有序插入元素 -- 我们会用下面的代码来覆盖 insert 方法
            // - 由于我们不想允许在任何位置插入元素，我们要给 index 参数设置一个默认值
            //  （行 {1} ），以便直接调用 list.insert(myElement) 而无须传入 index
            //  参数。如果 index 参数传给了方法，它的值会被忽略，因为插入元素的位置是
            //  内部控制的。我们这么做的原因是不想重写整个 LinkedList 类的方法，我们只
            //  需要覆盖 insert 方法的行为。如果愿意，也可以从头创建 SortedLinkedList
            //  类，把 LinkedList 类中的代码复制过来。但是这样会使代码维护变得困难，
            //  因为后面要修改代码的话，就需要修改两处而非一处。
            // - 如果有序链表为空，我们可以直接调用 LinkedList 的 insert 方法并传入
            //   0 作为 index（行 {2} ）。如果有序链表不为空，我们会知道插入元素的
            //   正确位置（行 {3} ）并调用 LinkedList 的 insert 方法，传入该位置来
            //   保证链表有序（行 {4} ）。
            // - 要获得插入元素的正确位置，我们需要创建一个叫作 
            //   getIndexNextSortedElement 的方法。在该方法里，我们需要迭代整个
            //   有序链表直至找到需要插入元素的位置，或是迭代完所有的元素。在后者的场景中
            //   , 返回的 index (行 {7})将是有序链表的长度 (元素将被插入在链表的末尾
            //   ）。我们将使用 compareFn (行 {5}) 来比较传入构造函数的元素。当我们
            //   要插入有序链表的元素小于 current 的元素时，我们就找到了插入元素的位置
            //   (行 {6}).
            // - 就是这样了！我们可以在内部复用 LinkedList 的 insert 方法。其他方法
            //   例如 remove 、indexOf 和 on 都和 LinkedList 是一样的.
            insert(element, index = 0) {
                if (this.isEmpty()) {   // {1}
                    return super.insert(element, 0);    // {2}
                }
                const pos = this.getIndexNextSortedElement(element); // {3}
                return super.insert(element, pos);  // {4}
            }
            getIndexNextSortedElement(element) {
                let current = this.head;
                let i = 0;
                for (; i < this.size() && current; i++) {
                    const comp = this.compareFn(element, current.element); // {5}
                    if (comp === Compare.LESS_THAN) {   // {6}
                        return i;
                    }
                    current = current.next;
                }
                return i;   // {7}
            }
        }
    </script>
  ```
  

### 6.5 创建 `StackLinkedList` 类

### 6.6 小结
- 本章介绍了链表这种数据结构，以及其变体：双向链表、循环链表和有序链表。你学习了如
  何在任意位置添加和移除元素，以及如何循环访问链表。你还学习了链表相比数组最重要的优点，
  那就是无须移动链表中的元素，就能轻松地添加和移除元素。因此，**当你需要添加和移除很多元**
  **素时，最好的选择就是链表，而非数组。**

