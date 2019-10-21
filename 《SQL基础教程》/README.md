## PostgreSQL win10 安装教程
- 下载 `https://www.enterprisedb.com/downloads/postgres-postgresql-downloads` 
  右键以管理员身份运行
- 更改 `C:\Program Files\PostgreSQL\10` 到 `C:\PostgreSQL\10`
- 设置密码: `111111`
- 设置地区 (Select the locale to be used by the new database cluster)
    + 选择 "C"
- 完成时取消勾选 "Launch Stack Builder at (退出时启动堆栈生成器)"
- 修改设置文件:
    + 打开 `C:\PostgreSQL\10\data\postgresql.conf`
    + 把 `listen_addresses = '*'` 前添加 # 注释掉, 再添加一行 
      `listen_addresses = 'localhost'`
    + 在左下角的 windows 图标上右键选择 --> `控制面板` --> `管理工具`
      (右上角的 "查看方式" 更改为 "大图标") --> `服务` 找到 "postgresql-x64-10" 用鼠标
      右键进行点击, 然后在弹出的菜单中选择 "启动" 或者 "重新启动". 这样上面修改的 
      listen_addresses 就生效了.



### PostgreSQL安装报错：The database cluster initialisation failed.
- 1、第一次安装PostgreSQL报错The database cluster initialisation failed.时，等待
  安装程序结束运行，然后到PostgreSQL的安装后的程序目录下，右击文件夹-属性-安全，给每个
  Window账户都授权修改、读取和运行等权限；
- 2、使用PostgreSQL程序文件夹目录下的uninstall-postgresql.exe卸载程序；
- 3、重新安装PostgreSQL，再选择语言locale 时，选择“C”（网上有很多人建议选择诸如Chinese 
  HongKong等）



## PgAdmin 
- PgdAdmin 是和 postgreSQL 安装程序一起被安装的, 打开方式点击桌面左下角的 windows
    图标, 找到 PostgreSQL 软件目录, 点击展开后即可看到.
- PgAdmin 英文界面
    + Databases (数据库)
    + Login/Group Roles
    + Tablespaces (表空间)   
    + Schemas (模式)
        - Public
            + Collations (定序规则)
            + Domains (域)
            + FTS Configurations (FTS 配置)
            + FTS Dictionaries (FTS 字典)
            + FTS Parsers (FTS 解析)
            + FTS Templates (FTS 模板)
            + Foreign Tables 
            + Functions (函数)
            + Materialized Views 
            + Sequences (序列)
            + Tables (数据表)
            + Trigger Functions (出发函数)
            + Types
            + Views (视图)

## 使用 pgAdmin 链接远程数据库服务需要注意一下这些问题:
- 关闭服务器端机器防火墙
- 修改服务器端链接监听 (postgresql.conf 配置文件)
- 修改链接认证方式 (pg_hba.conf 配置文件)
