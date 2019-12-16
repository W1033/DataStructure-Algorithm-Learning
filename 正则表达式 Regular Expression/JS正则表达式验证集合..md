# JS 正则表达式

## 创建正则表达式的方式: 
  ```js
    function validate(num) {
        // - 第一种: 使用 RegExp 构造函数创建正则表达式
        let reg = new RegExp('^[0-9]*$');
        if (!reg.test(num)) {
            console.log('请输入数字!');
        }

        // - 第二种: 使用正则表达式字面量创建正则表达式 
        if (!(/^[0-9]*$/).test(num)) {
            console.log('请输入数字!');
        }
    }
  ```

# 正则表达式验证集锦: 