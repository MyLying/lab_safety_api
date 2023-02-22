// 导入bcrypyjs模块
const bcrypt = require('bcryptjs')

// 导入数据库操作模块
const {
    use
} = require('express/lib/application')
const Terminal_DB = require('../db/Terminal_DB')

// AdminUserLogin函数
exports.adminUserLogin = (req, res) => {
    const userInfo = req.body
    console.log(userInfo);
    const sqlStr = "select AdminUser_Account,AdminUser_Name,AdminUser_TelNumber,AdminUser_College  from AdminUser where AdminUser_Account = ? and AdminUser_Password = ?"
    Terminal_DB.query(sqlStr, [userInfo.AdminUser_Account, userInfo.AdminUser_Password], (err, results) => {
        if (err) {
            return res.cc(err)
        }
        if (!results.length) {
            return res.send({
                data: results,
                status: 202,
                message: '登录失败，您的账户或密码有误！',
            })
        }
        console.log(results);
        return res.send({
            data: results,
            status: 200,
            message: '登录成功！',
        })
    })
}
// stuUserLogin函数
exports.stuUserLogin = (req, res) => {
    const userInfo = req.body
    console.log(userInfo);
    const sqlStr = "select *  from StuUser where StuUser_Account = ? and StuUser_Password = ?"
    Terminal_DB.query(sqlStr, [userInfo.StuUser_Account, userInfo.StuUser_Password], (err, results) => {
        if (err) {
            return res.cc(err)
        }
        if (!results.length) {
            return res.send({
                data: results,
                status: 202,
                message: '登录失败，您的账户或密码有误！',
            })
        }
        console.log(results);
        return res.send({
            data: results,
            status: 200,
            message: '登录成功！',
        })
    })
}

// selectAdminUserAll处理函数
exports.selectAdminUserAll = (req, res) => {
    const sqlStr = 'select AdminUser_ID,AdminUser_Account,AdminUser_Name,AdminUser_TelNumber,AdminUser_College,AdminUser_Status from AdminUser'
    Terminal_DB.query(sqlStr, (err, results) => {
        if (err) {
            return res.cc(err)
        }
        if (!results.length) {
            return res.send({
                data: results,
                status: 202,
                message: '查询失败，无数据！',
            })
        }
        return res.send({
            data: results,
            status: 200,
            message: '查询成功！',
        })
    })
}

// selectAdminUserAll处理函数
exports.selectStuUserAll = (req, res) => {
    const sqlStr = 'select * from StuUser'
    Terminal_DB.query(sqlStr, (err, results) => {
        if (err) {
            return res.cc(err)
        }
        if (!results.length) {
            return res.send({
                data: results,
                status: 202,
                message: '查询失败，无数据！',
            })
        }
        return res.send({
            data: results,
            status: 200,
            message: '查询成功！',
        })
    })
}

exports.addAdminUser = (req, res) => {
    const userInfo = req.body
    const sqlStr = 'insert into AdminUser (AdminUser_Account,AdminUser_College) values (?,?)'
    Terminal_DB.query(sqlStr, [userInfo.AdminUser_Account, userInfo.AdminUser_College], (err, results) => {
        if (err) {
            return res.cc(err)
        }
        return res.send({
            data: userInfo,
            status: 200,
            message: '添加成功！',
        })
    })
}

exports.updateAdminUser = (req, res) => {
    const userInfo = req.body
    const sqlStr = 'update AdminUser set AdminUser_College=?,AdminUser_Name=?,AdminUser_TelNumber=? where AdminUser_Account=?'
    Terminal_DB.query(sqlStr, [userInfo.AdminUser_College, userInfo.AdminUser_Name, userInfo.AdminUser_TelNumber, userInfo.AdminUser_Account], (err, results) => {
        if (err) {
            return res.cc(err)
        }
        return res.send({
            status: 200,
            message: '修改成功！',
        })
    })
}

exports.deleteAdminUser = (req, res) => {
    const userInfo = req.body
    console.log(userInfo);
    const sqlStr = 'DELETE FROM AdminUser where AdminUser_Account=?'
    Terminal_DB.query(sqlStr, userInfo.AdminUser_Account, (err, results) => {
        if (err) {
            return res.cc(err)
        }
        return res.send({
            status: 200,
            message: '删除成功！',
        })
    })
}