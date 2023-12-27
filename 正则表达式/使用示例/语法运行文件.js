console.log( "/\d+/.test(123): ", /\d+/.test(123));       // true
// - Tip: 此处 test('123') 会被 js 引擎自动转换为数字
console.log( "/\d+/.test('123'): ", /\d+/.test('123'));   // true
console.log( "/\d+/.test('abc'): ", /\d+/.test("abc"));   // false

let re = null;
let i;
// for (i = 0; i < 10; i++) {
//     re = /cat/g;
//     // - 返回 10 个 true.
//     console.log(re.test("catastrophe"));
// }

// for (i = 0; i < 10; i++) {
//     re = new RegExp("cat", "g");
//     // - 返回 10 个 true.
//     console.log(re.test("catastrophe"));
// }


// - 代码来自同级目录的 `replace方法和正则表达式.md` 文件
// - 参数: (1) `str`: 要插入的字符串; (2): `offset`: 要插入的索引位置(index)
String.prototype.insetAt = function(str,offset){
    // - 使用 RegExp() 构造函数 创建正则表达式
    var regx = new RegExp("(.{" + offset + "})");
    return this.replace(regx, "$1" + str);
};
// - 在 b 和 c 之间插入 xyz
console.log("abcd".insetAt('xyz',2));   // "abxyzcd"



console.log('--- --- ---');


const noonday = "HelloCodeSheep";
const reg = /Code\B/;
console.log(reg.test(noonday));
console.log(1111);

