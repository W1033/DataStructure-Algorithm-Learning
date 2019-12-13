function defaultEquals(a, b) {
    return a === b;
}

class Node {
    constructor(element, next) {
        this.element = element;
        this.next = next;
    }
}

// - 链表 (Linked list) 书上完整源码
class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.equalsFn = equalsFn;
        this.count = 0;
        this.head = undefined;
    }

    // - push(element): 向链表尾部添加一个新元素.
    push(element) {
        const node = new Node(element); // {1}
        // - current: 指向链表中 current (当前) 项的变量.
        let current;    // {2}
        if (this.head == null) {    // {3}
            // - 把要添加的 node (节点实例) 赋值给 head.
            this.head = node;
        } else {
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
            current.next = node;    // {6}

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
            } else {
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

    isEmpty() {
        return this.size() === 0;
    }

    size() {
        return this.count;
    }

    getHead() {
        return this.head;
    }

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
