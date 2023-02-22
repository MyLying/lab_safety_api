const express = require('express')
// 创建路由对象
const Terminal_DB_router = express.Router()

// 导入用户路由处理函数模块
const userHandler = require('../router_handler/Terminal_DB')

// AdminUserLogin函数
Terminal_DB_router.post('/adminUserLogin', userHandler.adminUserLogin)

// StuUserLogin函数
Terminal_DB_router.post('/stuUserLogin', userHandler.stuUserLogin)

// selectAdminUserAll
Terminal_DB_router.get('/selectAdminUserAll', userHandler.selectAdminUserAll)

// selectStuUserAll
Terminal_DB_router.get('/selectStuUserAll', userHandler.selectStuUserAll)

// addAdminUser函数
Terminal_DB_router.post('/addAdminUser', userHandler.addAdminUser)

// addStuUser函数
// Terminal_DB_router.post('/addStuUser', userHandler.addStuUser)

// updateAdminUser函数
Terminal_DB_router.post('/updateAdminUser', userHandler.updateAdminUser)

// updateStuUser函数
// Terminal_DB_router.post('/updateStuUser', userHandler.updateStuUser)

// deleteAdminUser函数
Terminal_DB_router.post('/deleteAdminUser', userHandler.deleteAdminUser)

// deleteStuUser函数
// Terminal_DB_router.post('/deleteStuUser', userHandler.deleteStuUser)


// 将路由对象共享出去
module.exports = Terminal_DB_router