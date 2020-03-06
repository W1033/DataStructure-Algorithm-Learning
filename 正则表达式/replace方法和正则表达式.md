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
- `String`类型(字符串类型) 的 `replace()` 方法, 接收 2 个参数:
  `replace("RegExp对象 | 一个字符串", "一个字符串 | 一个函数") `
    + 如果第 1 个参数是字符串, 第 2 个参数只会替换第一个子字符串.
    + 想要替换所有子字符串, 唯一的办法就是提供一个正则表达式，而且要指定全局标志(即: `g`)。
-  P127: `replace()` 方法接受 2 个参数:
    + 第 1 个参数可以是 `一个RegExp对象` 或 `一个字符串`(这个字符串不会被转换成正则表达式);
    + 第 2 个参数可以是 `一个字符串` 或 `一个函数`.
### 2. 几个使用示例
- 基本示例:
  ```js
    // - 示例(1)
    const text = "cat, bat, sat, fat";
    let result = text.replace("at", "ond");
    // "cond, bat, sat, fat"
    console.log (result);
    result = text.replace(/at/g, "ond");
    // "cond, bond, sond, fond"
    console.log(result);

    // - 示例(2) -- 替换字符为星号
    let reg3 = /(doubi)/g;
    let string = "Kid is a doubi";
    string = string.replace(reg3, (word) => {
        return word.replace(/./g, "*")
    });
    console.log(string);  // Kid is a *****
  ```
### 3. `replace` 和 分组 配合使用示例
- 如果 `replace()` 第 1 个参数是 RegExp, js 会先提取 RegExp 匹配处的结果,
  然后用第 2 个参数逐一替换匹配出的结果. 如果 replace() 第 2 个参数是回调函数, 
  每匹配到一个结果就回调一次，每次回调都会传递以下参数:
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
    // - 数字千分位就是将数字三个一分，如 1234567890 转为 1,234,567,890
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
- 示例(1): 实现字符串的 trim 函数，去除字符串两边的空格
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
- 示例(2): 提取浏览器url中的参数名和参数值，生成一个 `key/value`的对象
  ```js
    function getUrlParamObj(){
        var obj = {};
        // - 获取url的参数部分
        var params = window.location.search.substr(1);
        // - [^&=]+ 表示不含 & 或 = 的连续字符，加上 () 就是提取对应字符串
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
- 示例(5): 实现函数 escapeHtml，将 `<`, `>`, `&`, `"` 进行转义
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