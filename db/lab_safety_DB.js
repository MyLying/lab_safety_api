// 导入mysql模块
const mysql = require('mysql')

// 创建数据库连接对象
const db = mysql.createPool({
    host: '127.0.0.1',
    port:'3306',
    user: 'root',
    password: 'Lying_1120',
    database: 'lab_safety',
})

// 向外共享db数据库链接对象
module.exports = db