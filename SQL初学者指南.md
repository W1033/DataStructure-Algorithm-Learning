# The language of SQL -- 第 2 版
> SQL (Structured Query Language) 是用于和关系数据库交互的主要语言.

> 目录 (Table of Content)
- 第 1 章 -- 关系型数据库和 SQL
    + 1.1 SQL 是什么
    + 1.2 Microsoft SQL Server, MySQL 和 Oracle 
    + 1.3 关系型数据库
    + 1.4 主键和外键
    + 1.5 数据类型
    + 1.6 空值
    + 1.7 SQL 的重要性
    + 1.8 小结
- 第 2 章 -- 基本数据检索
    + 2.1 一条简单的 SELECT 语句
    + 2.2 语法注释
    + 2.3 注释
    + 2.4 指定列
    + 2.5 带有空格的列名
    + 2.6 预览完整 SELECT 语句
    + 2.7 小结
- 第 3 章 -- 计算字段和别名
    + 3.1 字面值
    + 3.2 算术运算
    + 3.3 连接字段
    + 3.4 列的名字
    + 3.5 表的名字
    + 3.6 小结
- 第 4 章 -- 使用函数
    + 4.1 什么是函数
    + 4.2 字符函数
    + 4.3 复合函数
    + 4.4 日期/时间函数
    + 4.5 数值函数
    + 4.6 转换函数
    + 4.7 小结
- 第 5 章 -- 排序数据
    + 5.1 升序排序
    + 5.2 降序排序
    + 5.3 根据多列来排序
    + 5.4 根据计算字段来排序
    + 5.5 排序序列
    + 5.6 小结
- 第 6 章 -- 查询条件
    + 6.1 应用查询条件
    + 6.2 WHERE 子句运算符
    + 6.3 限制行
    + 6.4 用 Sort 限制行数
    + 6.5 模式匹配
    + 6.6 通配符
    + 6.7 小结
- 第 7 章 -- 布尔逻辑
- 第 8 章 -- 条件逻辑
- 第 9 章 -- 汇总数据
- 第 10 章 -- 分类汇总和交叉表
- 第 11 章 -- 内连接
- 第 12 章 -- 外连接
- 第 13 章 -- 自连接和
- 第 14 章 -- 子查询
- 第 15 章 -- 集合逻辑
- 第 16 章 -- 存储过程和参数
- 第 17 章 -- 修改数据
- 第 18 章 -- 维护表
- 第 19 章 -- 数据库设计原理
- 第 20 章 -- 显示数据的策略


## 生词
- **sequel['siːkw(ə)l] --n.续集, 续篇. 结果**
    + --> as a sequel to  ....作为...的结果 
    + --> Some important new characters appear in the sequel.
        在续篇中出现了一些重要的新人物.
- **manipulation[mə,nɪpjʊ'leɪʃ(ə)n] --n.操纵; 控制; 篡改**
    + --> data manipulation. 数据操作
    + --> graph manipulation 图形处理
- **express [ɪk'spres] --vt.表达，表示。 --adj.特快(的)，高速(的)**
- **relation [rɪ'leɪʃ(ə)n] --n.关系，关联，叙述**
- **relational [rɪ'leɪʃ(ə)n(ə)l] --adj.相关的, 亲属的**
    + --> relational database 关系数据库
- **column ['kɒləm] --n.列**
---

## 第 1 章 -- 关系型数据库和 SQL
- ```sql 
    Select city, state
    from Customers
    order by state
  ```
- 这条 SQL 语句表示我们想要从数据库的 Customers 表中获取 city 和 state 字段, 并且希望
  按照 state 来排序.   
- 1.1 SQL 是什么
    + SQL 就是为了维护和使用关系型数据库中的数据而使用的一种标准的计算机语言. 简单来说, 
      SQL 就是能让用户和关系型数据库进行交互的一种语言. 
    + 一般来讲, SQL 语言有 3 个主要的组成部分. 
        - 第 1 部分叫做 `数据操纵语言 (Data Manipulation Language, DML)`. SQL 
          语言的这个模块让我门可以检索, 修改, 增加和删除数据库中的数据. 
        - 第 2 部分叫做 `数据定义语言 (Data Definition Language, DDL)`. DDL 使得
          我们能创建和修改数据库本身. 例如 DDL 提供了 ALTER 语句, 他让我们可以修改数据
          库中的表的设计.
        - 第 3 部分是 `数据控制语言 (Data Control Language, DCL)`, 用于维护数据库
          的安全.  
    + SQL 更倾向于一种声明式语句 (Declarative Language). 在 SQL 中, 经常用一条单独的
      语句来声明预期的目标. SQL 的结构之所以如此简单, 是因为它只关注关系型数据库, 而不是
      一整个计算机系统.
    + 关于 SQL 语言, 人们经常会把 SQL 语句和具体的 SQL 数据库搞混. 有很多的软件公式销售
      `数据库管理系统 (Database Management System, DBMS)`, 通常, 这些类型的软件包中
      的数据库称为 SQL 数据库, 因为 SQL 语言是管理和访问这些数据库中的数据的主要方法. 
      一些厂商甚至把 SQL 作为其数据库名称的一部分. 例如, Microsoft 把它最新的数据库叫做
      SQL Server 2016. 但实际上, 更准确地讲, SQL 是一种语言, 而不是一个数据库. 
- 1.2 Microsoft SQL Server, MySQL 和 Oracle 
- 1.3 关系型数据库
    + P4: 关系型数据库就是一个数据集合, 它保存了任意多个表. 在常见的用法中, 术语 "关系
      (relational)" 用来表示各个表 以某种形式彼此相互关联. 然而, 更准确地讲, 关系指的是
      数学关系理论, 并且和一个些逻辑属性相关, 而这些逻辑属性负责管理表之间相关的方式.
    + P5: 在 SQL 术语中, `记录 (record)` 和 `字段 (field)` 实际上就称为 `行 (row)`
      和 `列 (column)`, 这个视觉上的展示是对应的. 因此, 今后我们使用术语 "行" 和 "列" 
      来说明关系型数据库.
    + 我们来看关系型数据库中一个可能的, 最简单的实例. 在这个数据库中, 只有2个表, 分别是
      Customers 表 和 Orders 表. 这两个表看上去如下:  
    + |CustomerID|FirstName|LastName|
      |:---|:---|:---|
      |1|Bob|Davis|
      |2|Natalie|Lopez|
      |3|Connie|King|
    + |OrderID|CustomerID|OrderAmount|
      |:---|:---|:---|
      |1|1|50.00|
      |2|1|60.00|
      |3|2|33.50|
      |4|3|20.00|
- 1.4 主键和外键
    + 请留意上面每个表的第 1 列: 即 Customers 表中的 CustomersID 和 Orders 表中的 
      OrderID. 这些列通常称为 `主键(primary key)`
    + 在表之间使用共同的列, 这是关系型数据库中的一项基本的设计要素. 如上: Orders 表中的 
      Customers 列, 指向了 Customers 表中对应的一行.  
    + 除了可以指向 Customers 表, 还可以吧 Orders 表中的 CustomersID 列指定为
      `外键 (foreign key)`. 我会在第 18 章中详细介绍外键. 在这里只需要知道: 定义外键是为
      了要确保这一列有一个有效的值. 
- 1.5 数据类型
- 1.6 空值
    + P7: 许多数据库在显示带有控制的数据时, 使用大写的单词 NULL 来表示. 数据库的主键不能
      包含 NULL 值. 这是因为, 根据定义, 主键必须包含唯一的值.
- 1.7 SQL 的重要性
- 1.8 小结

## 第 2 章 -- 基本数据检索
- 2.1 一条简单的 SELECT 语句
    + 在 SQL 中, 数据的检索可以通过 SELECT 语句来完成. 来看一条最简单的 SELECT 语句示例:
      ```sql  SELECT * FROM Customers``` 
    + SELECT 和 FROM 是关键字. 这句话的意思是: 从 Customers 表中查找所有的列.  
- 2.2 语法注释
    + SQL 语句中的关键字不区分大小写. 单词 SELECT 等于 select / Select
- 2.3 注释
- 2.4 指定列
- 2.5 带有空格的列名
- 2.6 预览完整 SELECT 语句
- 2.7 小结