// 导入mysql模块
const mysql = require('mysql')

// 创建数据库连接对象
const Terminal_DB = mysql.createPool({
    host: 'sh-cynosdbmysql-grp-duki04l6.sql.tencentcdb.com',//远程MySQL数据库的ip地址
    port: '22966',
    user: 'root',
    password: 'Lying_1120',
    database: 'Terminal_DB'
})

// 向外共享db数据库链接对象
module.exports = Terminal_DB