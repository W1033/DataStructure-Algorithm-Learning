import { Compare, defaultCompare, defaultEquals } from '../util';
import LinkedList from './linked-list';

export default class SortedLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
    super(equalsFn);
    this.equalsFn = equalsFn;
    this.compareFn = compareFn;
  }

  push(element) {
    if (this.isEmpty()) {
      super.push(element);
    } else {
      const index = this.getIndexNextSortedElement(element);
      super.insert(element, index);
    }
  }

  insert(element, index = 0) {  // {1}
    if (this.isEmpty()) {
      return super.insert(element, index === 0 ? index : 0);  // {2}
    }
    const pos = this.getIndexNextSortedElement(element);  // {3}
    return super.insert(element, pos);  // {4}
  }

  // - 取得下一个元素排序后的索引
  getIndexNextSortedElement(element) {
    let current = this.head;
    let i = 0;
    for (; i < this.size() && current; i++) {
      const comp = this.compareFn(element, current.element); // {5}
      if (comp === Compare.LESS_THAN) { // {6}
        return i;
      }
      current = current.next;
    }
    return i; // {7}
  }
}
