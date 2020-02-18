console.log( "/\d+/.test(123): ", /\d+/.test(123));       // true
// - Tip: 此处 test('123') 会被 js 引擎自动转换为数字
console.log( "/\d+/.test('123'): ", /\d+/.test('123'));   // true
console.log( "/\d+/.test('abc'): ", /\d+/.test("abc"));   // false