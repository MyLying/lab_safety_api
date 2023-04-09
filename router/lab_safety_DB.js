const express = require('express')
// 创建路由对象
const lab_safety_DB_router = express.Router()

// 导入用户路由处理函数模块
const userHandler = require('../router_handler/lab_safety_DB')

// user_a_All函数
lab_safety_DB_router.get('/user_a_All', userHandler.user_a_All)

// user_t_All函数
lab_safety_DB_router.get('/user_t_All', userHandler.user_t_All)

// user_s_All函数
lab_safety_DB_router.get('/user_s_All', userHandler.user_s_All)

// user_s_Login函数
lab_safety_DB_router.post('/user_s_Login', userHandler.user_s_Login)

// user_s_ByAccount函数
lab_safety_DB_router.post('/user_s_ByAccount', userHandler.user_s_ByAccount)

// questionAll函数
lab_safety_DB_router.get('/questionAll', userHandler.questionAll)

// questionByIds函数
lab_safety_DB_router.post('/questionByIds', userHandler.questionByIds)

// laboratoryAll函数
lab_safety_DB_router.get('/laboratoryAll', userHandler.laboratoryAll)

// certAll函数
lab_safety_DB_router.get('/certAll', userHandler.certAll)

// certByAccount函数
lab_safety_DB_router.post('/certByAccount', userHandler.certByAccount)

// examAll函数
lab_safety_DB_router.get('/examAll', userHandler.examAll)

// examByAccount函数
lab_safety_DB_router.post('/examByAccount', userHandler.examByAccount)

// examrecordsAll函数
lab_safety_DB_router.get('/examrecordsAll', userHandler.examrecordsAll)

// examrecordsInsrt函数
lab_safety_DB_router.post('/examrecordsInsrt', userHandler.examrecordsInsrt)

// examrecordsByAccount函数
lab_safety_DB_router.post('/examrecordsByAccount', userHandler.examrecordsByAccount)

// learnAll函数
lab_safety_DB_router.get('/learnAll', userHandler.learnAll)

// learnByAccount函数
lab_safety_DB_router.post('/learnByAccount', userHandler.learnByAccount)

// learnrecordsAll函数
lab_safety_DB_router.get('/learnrecordsAll', userHandler.learnrecordsAll)

// learnrecordsByAccount函数
lab_safety_DB_router.post('/learnrecordsByAccount', userHandler.learnrecordsByAccount)

// practiceAll函数
lab_safety_DB_router.get('/practiceAll', userHandler.practiceAll)

// practicePageByView函数
lab_safety_DB_router.post('/practicePageByView', userHandler.practicePageByView)

// practiceByAccount函数
lab_safety_DB_router.post('/practiceByAccount', userHandler.practiceByAccount)

// practicerecordsAll函数
lab_safety_DB_router.get('/practicerecordsAll', userHandler.practicerecordsAll)

// practicerecordsByAccount函数
lab_safety_DB_router.post('/practicerecordsByAccount', userHandler.practicerecordsByAccount)


// 将路由对象共享出去
module.exports = lab_safety_DB_router