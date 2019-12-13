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
### 7.3 集合运算
- 7.3.1 -- 并集 (`union`)
- 7.3.2 -- 交集 (`intersection`)
- 7.3.3 -- 差集 (`difference`)
- 7.3.4 -- 子集 (`inSubsetOf`)
### 7.4 ECMAScript 2015 -- Set 类
- 7.4.1 -- ES2015 Set 类的运算
### 7.5 多重集或袋
### 7.6 小结



