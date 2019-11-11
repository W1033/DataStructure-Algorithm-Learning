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


## 本章内容 (Content)
### 6.1 链表数据结构
- ```javascript
    // - linked-list-models.js
    export class Node {
        constructor(element, next) {
            this.element = element;
            this.next = next;
        }
    }
    export class DoublyNode extends Node {
        constructor(element, next, prev) {
            super(element, next);
            this.prev = prev;
        }
    }
  ```
- ```javascript
    // - util.js
    export function defaultEquals(a, b) {
        return a === b;
    }
  ```
- Note: 书上 P97 页的 图(1)有问题, 一旦往 list 中添加元素, 请忽略图中的 head, 因为
  添加的元素填充了 head, 它已经变成了正常的节点 head(node). 所以自己在 ps 中更改 
  图(1) 为 图 (2).
  <img src="./img/list.png" width="70%;">
  ```javascript
    // - linked-list.js 见同级目录的 `chapter06-链表.html`
  ```
### 6.2 双向链表
- 6.2.1 在任意位置插入新元素
- 6.2.2 从任意位置移除元素
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
- 6.3.1 在任意位置插入新元素
- 6.3.2 从任意位置移除元素

### 6.4 有序链表

### 6.5 创建 `StackLinkedList` 类

### 6.6 小结


