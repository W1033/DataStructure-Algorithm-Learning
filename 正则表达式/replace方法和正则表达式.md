# replace() 方法和正则表达式结合使用示例

## 目录 (Catalog)
1. 基本语法
2. 几个使用示例
3. `replace` 和 分组 配合使用示例
4. `replace` 和 正则搭配使用的几个经典案例 


## 生词 (New Words)
- ****


## 内容 (Content)
### 1. 基本语法 - 来自(<js高程> -- (P127 -- 5.6 基本包装类型))
为了简化替换子字符串的操作, ECMAScript 提供了 `replace()` 方法.
这个方法接受两个参数:
+ 第一个参数可以是一个 RegExp 对象或者一个字符串(这个字符串不会被转换成正则表达式),
+ 第二个参数可以是一个字符串或者一个函数. 如果第一个参数是字符串,
  那么只会替换第一个子字符串. 要想替换所有子字符串,
  唯一的办法就是提供一个正则表达式, 而且要指定全局(`//g`)标志, 如下所示.
```js
// - 示例(1)
const text = "cat, bat, sat, fat";
let result = text.replace("at", "ond");
// "cond, bat, sat, fat"
console.log (result);
// - 首先通过正则 `/at/g` 匹配到字符串中所有的 `at`, 然后使用 'ond'
//   替换掉所有的 'at'.
result = text.replace(/at/g, "ond");
// "cond, bond, sond, fond"
console.log(result);
```
在这个例子中, 首先传入 replace() 方法的是字符串 "at" 和替换用的字符串 "ond".
替换的结果是把 "cat" 变成了 "cond", 但字符串中的其他字符并没有受到影响. 然后,
通过将第一个参数修改为带有全局标志的正则表达式, 就将全部 "at" 都替换成了 "ond". 

如果第二个参数是字符串, 那么还可以使用一些特殊的字符序列,
将正则表达式操作得到的值插入到结果字符串中. 下表列出了 ECMAScript
提供的这些特殊的字符序列. 

|字符序列| 替换文本|
|:---:|:---|
| $$ | $ |
| $& | 匹配整个模式的子字符串. 与 RegExp.lastMatch 的值相同 |
| $' | 匹配的子字符串之前的子字符串. 与 RegExp.leftContext 的值相同 |
| $` | 匹配的子字符串之后的子字符串. 与 RegExp.rightContext 的值相同 |
| $n | 匹配第 n 个捕获组的子字符串, 其中 n 等于 0～9. 例如: `$1` 是匹配第一个捕获组的子字符串, <br/>`$2` 是匹配第二个捕获组的子字符串, 以此类推. 如果正则表达式中没有定义捕获组, 则使用空字符串 |
| $nn | 匹配第nn个捕获组的子字符串, 其中 nn 等于 01～99. 例如: `$01` 是匹配第一个捕获组的子字符串, <br/>`$02` 是匹配第二个捕获组的子字符串, 以此类推. 如果正则表达式中没有定义捕获组, 则使用空字符串 |

通过这些特殊的字符序列, 可以使用最近一次匹配结果中的内容, 如下面的例子所示
```js
var text = "cat, bat, sat, fat";
result = text.replace(/(.at)/g, "word ($1)");
console.log(result); // word (cat), word (bat), word (sat), word (fat)
```

在此, 每个以 "at" 结尾的单词都被替换了, 替换结果是 "word" 后跟一对圆括号, 而圆括号中是被字符序列 `$1` 所替换的单词. 

`replace()` 方法的**第二个参数也可以是一个函数**.
在只有一个匹配项(即与模式匹配的字符串）的情况下, 会向这个函数传递 3 个参数:
**模式的匹配项**、**模式匹配项在字符串中的位置**和**原始字符串**.
在正则表达式中定义了多个捕获组的情况下, 传递给函数的参数依次是模式的匹配项、第一个捕获组的匹配项、第二个捕获组的匹配项......, 但最后两个参数仍然分别是模式的匹配项在字符串中的位置和原始字符串. 这个函数应该返回一个字符串, 表示应该被替换的匹配项使用函数作为`replace()` 方法的第二个参数可以实现更加精细的替换操作, 请看下面这个例子. 
```js
    function htmlEscape(text) {
        return text.replace(/[<>"&]/g, function(match, pos, originalText)){
            switch(match) {
                case "<":
                    return "&lt;";
                case ">":
                    return "&gt;";
                case "&":
                    return "&amp;";
                case "\"":
                    return "&quot;";
            }
        }
    }
    // &lt;p class=&quot;greeting&quot;&gt;Hello world!&lt;/p&gt;
    console.log(htmlEscape("<p class=\"greeting\">Hello world!</p>"));
```
这里, 我们为插入 HTML 代码定义了函数 htmlEscape(), 这个函数能够转义 4 个字符:
小于号、大于号、和号以及双引号. 实现这种转义的最简单方式,
就是使用正则表达式查找这几个字符, 然后定义一个能够针对每个匹配的字符返回特定 HTML
实体的函数. 

### 2. 几个使用示例
- 基本示例:
  ```js
    // - 示例(1)
    const text = "cat, bat, sat, fat";
    let result = text.replace("at", "ond");
    // "cond, bat, sat, fat"
    console.log (result);
    // - 首先通过正则 `/at/g` 匹配到字符串中所有的 `at`, 然后使用 'ond'
    //   替换掉所有的 'at'.
    result = text.replace(/at/g, "ond");
    // "cond, bond, sond, fond"
    console.log(result);

    // - 示例(2) -- 替换字符为星号
    let reg3 = /(doubi)/g;
    let str = "Kid is a doubi";
    // - 注释: 首先根据 reg3 的正则, 匹配到 str 字符串中所有的 `doubi`,
    //   接着第二步, 把所有匹配到的字符当做后面第二个函数的参数,
    //   再在当前参数(为字符串)上调用 replace() 方法, 根据 `/\./g` 正则,
    //   把匹配到的所有字符都替换为 * (星号).
    str = str.replace(reg3, (word) => {
        return word.replace(/./g, "*")
    });
    console.log(str);  // Kid is a *****
  ```
### 3. `replace` 和 分组 配合使用示例
- 如果 `replace()` 第 1 个参数是 RegExp, js 会先提取 RegExp 匹配处的结果,
  然后用第 2 个参数逐一替换匹配出的结果. 如果 replace() 第 2 个参数是回调函数, 
  每匹配到一个结果就回调一次, 每次回调都会传递以下参数:
    + `result`: 本次匹配到的结果
    + `$1...$9`: 正则表达式中有几个分组, 就会传递几个参数, `$1...$9`
      分别代表本次匹配中每个分组提取的结果, 最多 9 个.
    + `offset`: 记录本次匹配的开始位置.
    + `source`: 接受匹配的原始字符串.
- [replace 另外讲解文章](https://zhuanlan.zhihu.com/p/32179882)
- 示例(1): 给字符串添加横线
  ```js
    function replacer(match, p1, p2, p3, offset, string) {
        return [p1, p2, p3].join("-");
    }
    let newString = "abc12345#$*%".replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
    console.log("newString: ", newString);  // abc-12345-#$*%
  ```
- 示例(2): 颠倒字符串的顺序
  ```js
    // - `\w`: 匹配字母、数字、下划线.
    // - `\s`: 匹配一个空白字符
    const nameReg = /(\w+)\s(\w+)/;
    const name = "John Smith";
    // output: Smith, John
    console.log("name.replace(re, '$2, $1')", name.replace(nameReg, '$2, $1'));
  ```
- 示例(3): 给数字添加 `,` 逗号.
  ```js
    // - 数字千分位就是将数字三个一分, 如 1234567890 转为 1,234,567,890
    // - 详解:`\d{1,3}`: 表示匹配连续的 1 到 3 个数字;  `(?=)` 表示反向匹配, 
    //   即为从后向前匹配, (?=(\d{3}+$)) 表示从后向前 3 位数字一匹配, 至少匹配一次,
    //   而最前面必须要有 1 到 3 个数字, 即第一次的 `\d{1,3}`,
    //   最后的参数 g 表示全局匹配, 匹配完所有
    const number = "1234567890";
    let numberComma = number.replace(/\d{1,3}(?=(\d{3})+$)/g, function(match){
        return match + ",";
    });
    // output: 1,234,567,890
    console.log("numberComma: ", numberComma);
    // - 下面在回调函数中多添加几个参数, 以便更详细的查看回调函数中的参数:
    let numberCommaMore = number.replace(/\d{1,3}(?=(\d{3})+$)/g,
        function(match, p1, offset, string){
        console.log("~~~~~~~~~~start~~~~~~~~~~~");
        console.log("match: ", match);
        console.log("p1: ", p1);
        console.log("offset: ", offset);
        console.log("string: ", string);
        console.log("~~~~~~~~~~~over~~~~~~~~~~");
    });
    console.log("numberCommaMore: ", numberCommaMore);
  ```
- 示例(4): 中划线命名(`-`)方式 转 驼峰命名方式:
  ```js
    // - Camel Case 小驼峰式命名;
    // - Pascal Case 大驼峰式命名
    let naming = "shou-hou";
    naming = naming.replace(/-(\w)/g, function($0, $1) {
        // - TIP: $0 = "-h"; $1 = "h"
        return $1.toUpperCase();
    });
    console.log("naming: ", naming);
  ```

### 4. `replace` 和 正则搭配使用的几个经典案例 
- 示例(1): 实现字符串的 trim 函数, 去除字符串两边的空格
  ```js
    String.prototype.trim = function(){
        //方式一：将匹配到的每一个结果(即: 一到多个空格)都用 "" 替换
        /*return this.replace(/(^\s+)|(\s+$)/g,function(){
            return "";
        });*/

        //方式二：和方式一的原理相同
        return this.replace(/(^\s+)|(\s+$)/g,'');
    };
  ```
- 示例(2): 提取浏览器url中的参数名和参数值, 生成一个 `key/value`的对象
  ```js
    function getUrlParamObj(){
        var obj = {};
        // - 获取url的参数部分
        var params = window.location.search.substr(1);
        // - [^&=]+ 表示不含 & 或 = 的连续字符, 加上 () 就是提取对应字符串
        params.replace(/([^&=]+)=([^&=]*)/gi,function(rs,$1,$2){
            obj[$1] = $2;
        });
        return obj;
    }
  ```
- 示例(3): 在字符串指定位置插入新字符串
  ```js
    // - 参数: (1) `str`: 要插入的字符串; (2): `offset`: 要插入的索引位置(index)
    String.prototype.insetAt = function(str,offset){
        // - 使用 RegExp() 构造函数 创建正则表达式
        // - 根据下面调用参数的参数, 即为 /(\{2})/
      var regx = new RegExp("(.{" + offset + "})");
  
        return this.replace(regx, "$1" + str);
    };
    
    // - 在 b 和 c 之间插入 xyz
    console.log("abcd".insetAt('xyz',2));   // "abxyzcd"
  ```
- 示例(4): 将手机号 12988886666 转化成 129 8888 6666
  ```js
    function telFormat(tel){
        tel = String(tel);
        /*//方式一
        return tel.replace(/(\d{3})(\d{4})(\d{4})/,function (rs,$1,$2,$3){
            return $1+" "+$2+" "+$3
        });*/
        //方式二
        return tel.replace(/(\d{3})(\d{4})(\d{4})/,"$1 $2 $3");
    }
  ```
- 示例(5): 实现函数 escapeHtml, 将 `<`, `>`, `&`, `"` 进行转义
  ```js
     function escapeHtml(str) {
        // - 匹配< > " &
        return str.replace(/[<>"&]/g, function(rs) {
            switch (rs) {
                case "<":
                    return "<";
                case ">":
                    return ">";
                case "&":
                    return "&";
                case "\"":
                    return "";
            }
        });
    }
  ```