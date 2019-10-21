## 生词
- **privilege ['prɪvɪlɪdʒ] --n.特权; 荣幸**
    + It is truly a privilege to be here. 能来此处真是莫大的荣幸.
    + the privileged classes. 特权阶级.
- **schema ['skiːmə]  --n.概要，议程，图解，模式**
    + --> database schema 数据库模式
    + --> schema theory. 图式理论
    + --> a schema of scientific reasoning. 科学推理的图示。
    + --> Did you overwrite the data schema? 你重写了整个数据模式吗？
    + --> Yeah, your algorithm is solid. It's a really good schema.
      你的算法很不错，架构相当完美。
---

## PostgreSQL 安装与使用 (Mac)
> [参考文章1](https://www.jianshu.com/p/16f17548a840)
> [参考文章2](https://www.jianshu.com/p/fedda9824f6a)

- 安装
    + `brew install postgresql`
- 查看安装版本
    + `pg_ctl -V` 或 `pg_ctl --version`
- 启动 postgresql 服务
    + `brew services start postgresql`
- 创建数据库和用户
    + (1) 创建数据库名为 `mydb`, 可以使用下面的命令
        - `createdb mydb`
    + (2) 创建用户 `wang`, 并输入密码
        - `createuser wang -P`
        - 会在屏幕提示输入密码, 记得输入
          ```
            Enter password for new role:
            Enter it again: 
          ```
- 用 psql 连接数据库
    + 使用 `psql` 连接 `mydb` 数据库
        - `psql mydb`
    + 屏幕提示:
        - ```
            psql (1.5)
            Type "help" for help.
    
            mydb=#
          ```
- 数据库访问权限配置
    + 用 psql 连接数据库后, 执行下面的 SQL 授权语句, 把 mydb 的所有权限给用户 wang
        - `GRANT ALL PRIVILEGES ON DATABASE mydb TO wang;`
    + 常用的授权语句有:
        - ```
            GRANT CONNECT ON DATABASE mydb To wang;
            GRANT USAGE ON SCHEMA public TO wang;
            GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public To wang;
            GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEME public TO wang;
          ```
- 连接数据库
    + 用 psql 连接数据库
        - `psql mydb wang`
    + 查询 public 下面所有的表
        - `SELECT table_name FROM information_scheme.tables WHERE table_schema = 'public';`
- 查询数据库
    + 用 pgAdmin 连接数据库
    + 可以从[这里](https://www.pgadmin.org/download/pgadmin-4-macos/)下载pgAdmin 
    + 安装好后连接数据库界面是这样的:      
