# 第 7 章 -- 集合 (Set)

## 本章目录 (Catalog)
- 7.1 构建数据集合
- 7.2 创建集合类
    + 7.2.1 -- `has(element)` 方法
    + 7.2.2 -- `add` 方法
    + 7.2.3 -- `delete` 和 `clear` 方法
    + 7.2.4 -- `size` 方法
    + 7.2.5 -- `values` 方法
    + 7.2.6 -- 使用 `Set` 类
- 7.3 集合运算
    + 7.3.1 -- 并集 (`union`)
    + 7.3.2 -- 交集 (`intersection`)
    + 7.3.3 -- 差集 (`difference`)
    + 7.3.4 -- 子集 (`inSubsetOf`)
- 7.4 ECMAScript 2015 -- Set 类
    + 7.4.1 -- ES2015 Set 类的运算
- 7.5 多重集或袋
- 7.6 小结


## 生词 (New Words)
- **intersection [ɪntə'sekʃ(ə)n] --n.交集; 十字路口; 交叉点**
    + --> object intersection: 对象交集
    + --> intersection point: 交点; 交叉点


## 本章内容 (Contents)
- **集合是一种不允许存在重复值的顺序数据结构.**
### 7.1 构建数据集合
### 7.2 创建集合类
- 7.2.1 -- `has(element)` 方法
- 7.2.2 -- `add` 方法
- 7.2.3 -- `delete` 和 `clear` 方法
- 7.2.4 -- `size` 方法
- 7.2.5 -- `values` 方法
    + P122: 要实现 values 方法, 我们同样使用 Object 类内置的 `values` 方法.
      ```javascript
        values(); {
            return Object.values(this.items);
        }
      ```
    + Note: `Object.values()` 方法返回了一个包含给定对象所有属性值的数组. 它是在 
      ES2017 中被添加进来的, 目前只有在现在浏览器中可用.
    + 如果想让代码在任何浏览器中都能执行，可以用与之前代码等价的下面这段代码。
      ```javascript
        valuesLegacy(); {
            let values = [];
            for (let key in this.items) {   // {1}
                if (this.items.hasOwnProperty(key)) {
                    values.push(key);   // {2}
                }
            }
            return values;
        }
      ```
      首先迭代 items 对象的所有属性（行{1}），把它们添加到一个数组中（行{2}），并返回这
      个数组。该方法类似于我们开发的 sizeLegacy 方法，但这里不是计算属性个数，而是在一个
      数组里做加法。
- 7.2.6 -- 使用 `Set` 类
  ```js
    class Set {
        constructor() {
            this.items = {};
        }

        add(element) {
            if (!this.has(element)) {
                this.items[element] = element;
                return true;
            }
            return false;
        }

        delete(element) {
            if (this.has(element)) {
                delete this.items[element];
                return true;
            }
            return false;
        }

        has(element) {
            return Object.prototype.hasOwnProperty.call(this.items, element);
        }

        values() {
            return Object.values(this.items);

            // - P122: Object.values() 方法返回了一个包含给定对象所有属性值的数组.
            //   在 ECMAScript 2017 中被添加进来的, 目前只有在现在浏览器中可用.
            // - 如果想让代码在任何浏览器中都能执行, 可以用与之前代码等价的下面
            //   P122 - 略
        }

        // - 并集
        union(otherSet) {
            const unionSet = new Set();
            this.values().forEach(value => unionSet.add(value));
            otherSet.values().forEach(value => unionSet.add(value));
            return unionSet;
        }

        // - 交集
        intersection(otherSet) {
            const intersectionSet = new Set();
            const values = this.values();
            const otherValues = otherSet.values();
            let biggerSet = values;
            let smallerSet = otherValues;
            if (otherValues.length - values.length > 0) {
                biggerSet = otherValues;
                smallerSet = values;
            }
            smallerSet.forEach(value => {
                // - includes() 方法会遍历.查找数组中是否有和传入的参数相同的项
                if (biggerSet.includes(value)) {
                    intersectionSet.add(value);
                }
            });
            return intersectionSet;
        }

        // - 差集
        difference(otherSet) {
            const differenceSet = new Set();
            this.values().forEach(value => {
                if (!otherSet.has(value)) {
                    differenceSet.add(value);
                }
            });
            return differenceSet;
        }

        // - 子集
        isSubsetOf(otherSet) {
            if (this.size() > otherSet.size()) {
                return false;
            }
            let isSubset = true;
            this.values().every(value => {
                if (!otherSet.has(value)) {
                    isSubset = false;
                    return false;
                }
                return true;
            });
            return isSubset;
        }

        isEmpty() {
            return this.size() === 0;
        }

        size() {
            return Object.keys(this.items).length;
        }

        clear() {
            this.items = {};
        }

        toString() {
            if (this.isEmpty()) {
                return '';
            }
            const values = this.values();
            let objString = `${values[0]}`;
            for (let i = 1; i < values.length; i++) {
                objString = `${objString},${values[i].toString()}`;
            }
            return objString;
        }
    }

    const setA = new Set();
    setA.add(1);
    setA.add(2);
    setA.add("WANG");
    setA.add("New");
    setA.add(4);
    setA.add(5);
    // setA: Set
    //          items: {1: 1, 2: 2, 4: 4, 5: 5, WANG: "WANG", New: "New"}
    //          __proto__: Object
    console.log('setA:', setA);

    const setB = new Set();
    setB.add(3);
    setB.add(4);

    // const unionAB = setA.union(setB);
    // console.log(unionAB.values());
    const intersectionAB = setA.intersection(setB);
    console.log(intersectionAB.values());
  ```

### 7.3 集合运算
- 7.3.1 -- 并集 (`union`)
- 7.3.2 -- 交集 (`intersection`)
- 7.3.3 -- 差集 (`difference`)
- 7.3.4 -- 子集 (`inSubsetOf`)
### 7.4 ECMAScript 2015 -- Set 类
- 7.4.1 -- ES2015 Set 类的运算
### 7.5 多重集或袋
- 多重集或多重集合是数学中的一个概念, 
### 7.6 小结



