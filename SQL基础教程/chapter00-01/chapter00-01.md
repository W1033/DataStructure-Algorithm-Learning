# SQL 基础教程 -- 第 2 版
- 本书的示例程序从下面网站下载:
    + http://www.ituring.com.cn/book/1880 (网也右侧的 "随书下载")

> 目录 (Table of Content)
- 第 0 章 -- 绪论--搭建 SQL 的学习环境
    + 0.1 PostgreSQL 的安装和连接设置
        - 0.1.1: 安装步骤
        - 0.1.2: 修改设置文件 
    - 0.2 通过 PostgreSQL 执行 SQL 语句    
- 第 1 章 -- 数据库和 SQL
    + 1.1 数据库是什么
        + 1.1.1 我们身边的数据库
        + 1.1.2 为什么 DBMS 那么重要
        + 1.1.3 DBMS 的种类
    + 1.2 数据库的结构
        + 1.2.1 RDBMS 的常见系统结构
        + 1.2.2 表的结构
    + 1.3 SQL 概要
        + 1.3.1 标准 SQL
        + 1.3.2 SQL 语句及其种类
        + 1.3.3 SQL 的基本书写规范
    + 1.4 表的创建
        + 1.4.1 表的内容的创建
        + 1.4.2 数据库的创建 (CREATE DATABASE 语句) 
        + 1.4.3 表的创建 (CREATE TABLE 语句)
        + 1.4.4 命名规则
        + 1.4.5 数据类型的指定
        + 1.4.6 约束的设置
    + 1.5 表的删除和更新
        + 1.5.1 表的删除 (DROP TABLE 语句)
        + 1.5.2 表定义的更新 (ALTER TABLE 语句)
        + 1.5.3 向 Product 表中插入数据
    + 练习题  

---

## 生词

---

## 第 0 章 -- 绪论--搭建 SQL 的学习环境
- 0.1 PostgreSQL 的安装和连接设置
    + 0.1.1 安装步骤
    + 0.1.2 修改设置文件 
- 0.2 通过 PostgreSQL 执行 SQL 语句 
    + > psql: 是 PostgreSQL 数据库的命令行交互工具
    + > pgAdmin: 是 PostgreSQL 数据库的图形化管理工具
    + PostgreSQL 提供了一个可以通过命令行来执行 SQL 语句的工具 "psql".psql 会把 
      SQL 语句发送给 PostgreSQL
    + 最基本的通过 psql 来执行 SQL 语句的命令:
        - 打开 postgresql 的安装目录进入到 `C:\PostgreSQL\10\bin` 然后在当前文件夹下
          按住 `shift` 单击鼠标右键打开 "在此处打开命令窗口(w)" 然后在当前运行窗口中输入
          `psql.exe -U postgres` 输入密码就会进入到 PostgreSQL 默认创建的 名为
          postgres 的示例数据库.
        - 输入如下命令: `SELECT 1;` 如果出现 
          ```
            ?column?
            --------
            (1 行记录)

            postgres=#
          ```
          就代表执行成功了.
        - 创建学习用的数据库: `CREATE DATABASE shop` (Tip:数据库的名称只能使用小写字母)
        - 结束 sql: 输入 `\q` (quit) 即可.
        - 连接上面创建的数据库(登录): 在当前 `C:\PostgreSQL\10\bin` 后面 输入 
          `psql.exe -U postgres -d shop`  (-d shop 是指定 "数据库 shop" 的意思)

## 第 1 章 -- 数据库和 SQL
- 1.1 数据库是什么
    + 1.1.1 我们身边的数据库
    + 1.1.2 为什么 DBMS 那么重要
    + 1.1.3 DBMS 的种类
- 1.2 数据库的结构
    + 1.2.1 RDBMS 的常见系统结构
    + 1.2.2 表的结构
- 1.3 SQL 概要
    + 1.3.1 标准 SQL
        - SQL 是用来操作关系数据库的语言. 它原来是为了**提高数据库查询效率**而开发的语言, 
          但是现在不仅可以进行数据查询, 就连数据的**插入**和**删除**等操作也基本上都可以
          通过 SQL 来完成了.
        - 国际标准化组织 (ISO) 为 SQL 制定了相应的标准, 以此为基准的 SQL 称为 `标准SQL`  
    + 1.3.2 SQL 语句及其种类
        - 笔记: 后补
    + 1.3.3 SQL 的基本书写规范
        - 本书 SQL 书写规范
            - (1) 关键字大写 (Tip: sql 语法上来讲, 关键字不区分大小写)
            - (2) 表名的首字母大写
            - (3) 其余 (列名等) 小写
- 1.4 表的创建
    + 1.4.1 表的内容的创建
    + 1.4.2 数据库的创建 (CREATE DATABASE 语句) 
        - `CREATE DATABASE shop`
    + 1.4.3 表的创建 (CREATE TABLE 语句)
        - ```sql
            # 代码清单 1-2 创建 Product 表的 CREATE TABLE 语句
            CREATE TABLE Product
            (product_id      CHAR(4)      NOT NULL,
            product_name    VARCHAR(100) NOT NULL,
            product_type    VARCHAR(32)  NOT NULL,
            sale_price      INTEGER ,
            purchase_price  INTEGER ,
            regist_date     DATE ,
            PRIMARY KEY (product_id));
          ```
    + 1.4.4 命名规则
    + 1.4.5 数据类型的指定
    + 1.4.6 约束的设置
- 1.5 表的删除和更新
    + 1.5.1 表的删除 (DROP TABLE 语句)
        - 删除 Product 表: `DROP TABLE Product;`
    + 1.5.2 表定义的更新 (ALTER TABLE 语句)
        - 变更表定义的 `ALTER TABLE 语句` 
        - (1) 首先是添加列时使用的语法: 
            + 语法 1-4 添加列的 ALTER TABLE 语句
                - `ALTER TABLE <表名> ADD COLUMN <列的定义>;`
            + 代码清单 1-4 添加一列可以存储 100 位的可变长字符串的 product_name_pinyin 列
            + **DB2, PostgreSQL, MySQL**
                - > `ALTER TABLE Product ADD COLUMN product_name_pinyin VARCHAR(100);`
            + **Oracle**
                - > `ALTER TABLE Product ADD (product_name_pinyin VARCHAR(100));`
            + **SQL Server**
                - > `ALTER TABLE Product ADD product_name_pinyin VARCHAR(100);`  
        - (2) 反之, 删除表中某列使用的语法如下所示:
            + 语法 1-5 删除列的 ALTER TABLE 语句
                - `ALTER TABLE <表名> DROP COLUMN <列名>;`  
                - 特定的 SQL : `Oracle` 中不用写 COLUMN...... 详细见 P39 
            + 代码清单 1-5 删除 product_name_pinyin 列
            + **SQL Server, DB2, PostgreSQL, MySQL**  
                - `ALTER TABLE Product DROP COLUMN product_name_pinyin;`
            + **Oracle**
                - `ALTER TABLE Product DROP (product_name_pinyin);`             
    + 1.5.3 向 Product 表中插入数据
        - 代码清单 1-6 向 Product 表中插入数据的 SQL 语句
        - **SQL Server, PostgreSQL**
            + ```sql
                -- DML 插入数据

              ```
    + 专栏: 变更表名
        - 代码清单 1-A 变更表名
            +           
- 练习题    