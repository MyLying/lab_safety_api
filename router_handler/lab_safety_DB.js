// 导入bcrypyjs模块
const bcrypt = require('bcryptjs')

// 导入数据库操作模块
const {
    use
} = require('express/lib/application')
const lab_safety_DB = require('../db/lab_safety_DB')

// user_a_All函数
exports.user_a_All = (req, res) => {
    const sqlStr = "SELECT * FROM user_admin;"
    lab_safety_DB.query(sqlStr, (err, results) => {
        if (err) {
            return res.cc(err)
        }
        if (!results.length) {
            return res.send({
                data: results,
                status: 202,
                message: '无数据！',
            })
        }
        return res.send({
            data: results,
            status: 200,
            message: '查询成功！',
        })
    })
}

// user_t_All函数
exports.user_t_All = (req, res) => {
    const sqlStr = "SELECT * FROM user_teacher;"
    lab_safety_DB.query(sqlStr, (err, results) => {
        if (err) {
            return res.cc(err)
        }
        if (!results.length) {
            return res.send({
                data: results,
                status: 202,
                message: '无数据！',
            })
        }
        return res.send({
            data: results,
            status: 200,
            message: '查询成功！',
        })
    })
}

// user_s_All函数
exports.user_s_All = (req, res) => {
    const sqlStr = "SELECT * FROM user_student;"
    lab_safety_DB.query(sqlStr, (err, results) => {
        if (err) {
            return res.cc(err)
        }
        if (!results.length) {
            return res.send({
                data: results,
                status: 202,
                message: '无数据！',
            })
        }
        return res.send({
            data: results,
            status: 200,
            message: '查询成功！',
        })
    })
}

// user_s_Login函数
exports.user_s_Login = (req, res) => {
    const account = req.body.account
    const password = req.body.password
    const sqlStr = "SELECT user_student_account,user_student_name,user_student_unit,user_student_college,user_student_tellnumber,user_student_email FROM user_student where user_student_account = ? and user_student_password = ?;"
    lab_safety_DB.query(sqlStr, [account, password], (err, results) => {
        if (err) {
            return res.cc(err)
        }
        if (!results.length) {
            return res.send({
                data: results,
                status: 202,
                message: '登录失败，您的账号或密码错误！',
            })
        }
        return res.send({
            data: results,
            status: 200,
            message: '登录成功！',
        })
    })
}

// user_s_ByAccount函数
exports.user_s_ByAccount = (req, res) => {
    const account = req.body.account
    const sqlStr = "SELECT * FROM user_student where user_student_account = ?;"
    lab_safety_DB.query(sqlStr, [account], (err, results) => {
        if (err) {
            return res.cc(err)
        }
        if (!results.length) {
            return res.send({
                data: results,
                status: 202,
                message: '无数据！',
            })
        }
        return res.send({
            data: results,
            status: 200,
            message: '查询成功！',
        })
    })
}

// questionAll函数
exports.questionAll = (req, res) => {
    const sqlStr = "SELECT * FROM question;"
    lab_safety_DB.query(sqlStr, (err, results) => {
        if (err) {
            return res.cc(err)
        }
        if (!results.length) {
            return res.send({
                data: results,
                status: 202,
                message: '无数据！',
            })
        }
        return res.send({
            data: results,
            status: 200,
            message: '查询成功！',
        })
    })
}

// questionByIds函数
exports.questionByIds = (req, res) => {

    const sqlStr = "SELECT * FROM question where FIND_IN_SET(question_id,'" + req.body.exam_questions + "') ORDER BY question_type ASC "
    lab_safety_DB.query(sqlStr, (err, results) => {
        if (err) {
            return res.cc(err)
        }
        if (!results.length) {
            return res.send({
                data: results,
                status: 202,
                message: '无数据！',
            })
        }
        return res.send({
            data: results,
            status: 200,
            message: '查询成功！',
        })
    })
}
// laboratoryAll函数
exports.laboratoryAll = (req, res) => {
    const sqlStr = "SELECT * FROM laboratory;"
    lab_safety_DB.query(sqlStr, (err, results) => {
        if (err) {
            return res.cc(err)
        }
        if (!results.length) {
            return res.send({
                data: results,
                status: 202,
                message: '无数据！',
            })
        }
        return res.send({
            data: results,
            status: 200,
            message: '查询成功！',
        })
    })
}

// certAll函数
exports.certAll = (req, res) => {
    const sqlStr = "SELECT * FROM cert;"
    lab_safety_DB.query(sqlStr, (err, results) => {
        if (err) {
            return res.cc(err)
        }
        if (!results.length) {
            return res.send({
                data: results,
                status: 202,
                message: '无数据！',
            })
        }
        return res.send({
            data: results,
            status: 200,
            message: '查询成功！',
        })
    })
}

// certByAccount函数
exports.certByAccount = (req, res) => {
    const account = req.body.account
    const sqlStr = "SELECT * FROM cert where user_student_account = ?;"
    lab_safety_DB.query(sqlStr, [account], (err, results) => {
        if (err) {
            return res.cc(err)
        }
        if (!results.length) {
            return res.send({
                data: results,
                status: 202,
                message: '无数据！',
            })
        }
        let mypromise = function forof() {
            return new Promise((resolve, reject) => {
                for (let i in results) {
                    const sqlStr = "SELECT laboratory_name,laboratory_type,laboratory_unit,laboratory_method FROM laboratory where laboratory_name =?;"
                    lab_safety_DB.query(sqlStr, [results[i].laboratory_name], (err, results2) => {
                        if (err) {
                            return res.cc(err)
                        }
                        if (!results2.length) {
                            return res.send({
                                data: results2,
                                status: 201,
                                message: '查询失败！',
                            })
                        }
                        results[i] = { ...results[i], ...results2[0] }
                        if (i == (results.length - 1)) {
                            resolve();
                        }
                    })
                }
            })
        }
        mypromise().then(() => {
            return res.send({
                data: results,
                status: 200,
                message: '查询成功！',
            })
        }).catch(() => {
            return res.send({
                data: results,
                status: 201,
                message: '查询失败！',
            })
        })
    })
}

// examAll函数
exports.examAll = (req, res) => {
    const sqlStr = "SELECT * FROM exam;"
    lab_safety_DB.query(sqlStr, (err, results) => {
        if (err) {
            return res.cc(err)
        }
        if (!results.length) {
            return res.send({
                data: results,
                status: 202,
                message: '无数据！',
            })
        }
        return res.send({
            data: results,
            status: 200,
            message: '查询成功！',
        })
    })
}

// examByAccount函数
exports.examByAccount = (req, res) => {
    const account = req.body.account
    const sqlStr = "SELECT * FROM exam where exam_id =?;"
    lab_safety_DB.query(sqlStr, [account], (err, results) => {
        if (err) {
            return res.cc(err)
        }
        if (!results.length) {
            return res.send({
                data: results,
                status: 202,
                message: '无数据！',
            })
        }
        return res.send({
            data: results,
            status: 200,
            message: '查询成功！',
        })
    })
}

// examrecordsAll函数
exports.examrecordsAll = (req, res) => {
    const sqlStr = "SELECT * FROM examrecords;"
    lab_safety_DB.query(sqlStr, (err, results) => {
        if (err) {
            return res.cc(err)
        }
        if (!results.length) {
            return res.send({
                data: results,
                status: 202,
                message: '无数据！',
            })
        }
        return res.send({
            data: results,
            status: 200,
            message: '查询成功！',
        })
    })
}

// examrecordsInsrt函数
exports.examrecordsInsrt = (req, res) => {
    const sqlStr = "INSERT INTO examrecords (examRecords_beginTime,examRecords_endTime,exam_id,user_student_account,examRecords_studentAnswer,examRecords_standardAnswer,examRecords_scores) VALUES ('" + req.body.examRecords_beginTime + "','" + req.body.examRecords_endTime + "','" + req.body.exam_id + "','" + req.body.user_student_account + "','" + req.body.examRecords_studentAnswer + "','" + req.body.examRecords_standardAnswer + "',100) "
    lab_safety_DB.query(sqlStr, (err, results) => {
        if (err) {
            return res.cc(err)
        }
        if (results.length) {
            return res.send({
                data: results,
                status: 200,
                message: '插入成功！',
            })
        }
        return res.send({
            data: results,
            status: 202,
            message: '写入失败！',
        })
    })
}

// examrecordsByAccount函数
exports.examrecordsByAccount = (req, res) => {
    const account = req.body.account
    const sqlStr = "SELECT * FROM examrecords where user_student_account = ?;"
    lab_safety_DB.query(sqlStr, [account], (err, results) => {
        if (err) {
            return res.cc(err)
        }
        if (!results.length) {
            return res.send({
                data: results,
                status: 202,
                message: '无数据！',
            })
        }
        let mypromise = function forof() {
            return new Promise((resolve, reject) => {
                for (let i in results) {
                    const sqlStr = "SELECT exam_name,laboratory_name,exam_beginTime,exam_endTime,exam_duration,exam_scoresAll,exam_questions FROM exam where exam_id =?;"
                    lab_safety_DB.query(sqlStr, [results[i].exam_id], (err, results2) => {

                        if (err) {
                            return res.cc(err)
                        }
                        if (!results2.length) {
                            return res.send({
                                data: results2,
                                status: 201,
                                message: '查询失败！',
                            })
                        }
                        results[i] = { ...results[i], ...results2[0] }
                        if (i == (results.length - 1)) {
                            resolve();
                        }
                    })
                }
            })
        }
        mypromise().then(() => {
            return res.send({
                data: results,
                status: 200,
                message: '查询成功！',
            })
        }).catch(() => {
            return res.send({
                data: results,
                status: 201,
                message: '查询失败！',
            })
        })
    })
}

// learnAll函数
exports.learnAll = (req, res) => {
    const sqlStr = "SELECT * FROM  learn;"
    lab_safety_DB.query(sqlStr, (err, results) => {
        if (err) {
            return res.cc(err)
        }
        if (!results.length) {
            return res.send({
                data: results,
                status: 202,
                message: '无数据！',
            })
        }
        return res.send({
            data: results,
            status: 200,
            message: '查询成功！',
        })
    })
}

// learnByAccount函数
exports.learnByAccount = (req, res) => {

}

// learnrecordsAll函数
exports.learnrecordsAll = (req, res) => {
    const sqlStr = "SELECT * FROM learnrecords;"
    lab_safety_DB.query(sqlStr, (err, results) => {
        if (err) {
            return res.cc(err)
        }
        if (!results.length) {
            return res.send({
                data: results,
                status: 202,
                message: '无数据！',
            })
        }
        return res.send({
            data: results,
            status: 200,
            message: '查询成功！',
        })
    })
}

// learnrecordsByAccount函数
exports.learnrecordsByAccount = (req, res) => {
    const account = req.body.account
    const sqlStr = "SELECT * FROM learnrecords where user_student_account =?;"
    lab_safety_DB.query(sqlStr, [account], (err, results) => {
        if (err) {
            return res.cc(err)
        }
        if (!results.length) {
            return res.send({
                data: results,
                status: 202,
                message: '无数据！',
            })
        }
        return res.send({
            data: results,
            status: 200,
            message: '查询成功！',
        })
    })
}

// practiceAll函数
exports.practiceAll = (req, res) => {
    const sqlStr = "SELECT * FROM  practice;"
    lab_safety_DB.query(sqlStr, (err, results) => {
        if (err) {
            return res.cc(err)
        }
        if (!results.length) {
            return res.send({
                data: results,
                status: 202,
                message: '无数据！',
            })
        }
        return res.send({
            data: results,
            status: 200,
            message: '查询成功！',
        })
    })
}

// practiceByView函数
exports.practicePageByView = (req, res) => {
    const sqlStr = "SELECT * FROM  " + req.body.view + "  order by rand() limit " + req.body.number + ";"
    lab_safety_DB.query(sqlStr, (err, results) => {
        if (err) {
            return res.cc(err)
        }
        if (!results.length) {
            return res.send({
                data: results,
                status: 202,
                message: '无数据！',
            })
        }
        return res.send({
            data: results,
            status: 200,
            message: '查询成功！',
        })
    })
}


// practiceByAccount函数
exports.practiceByAccount = (req, res) => {

}

// practicerecordsAll函数
exports.practicerecordsAll = (req, res) => {
    const sqlStr = "SELECT * FROM  practicerecords;"
    lab_safety_DB.query(sqlStr, (err, results) => {
        if (err) {
            return res.cc(err)
        }
        if (!results.length) {
            return res.send({
                data: results,
                status: 202,
                message: '无数据！',
            })
        }
        return res.send({
            data: results,
            status: 200,
            message: '查询成功！',
        })
    })
}

// practicerecordsByAccount函数
exports.practicerecordsByAccount = (req, res) => {
    const account = req.body.account
    const sqlStr = "SELECT * FROM practicerecords where user_student_account =?;"
    lab_safety_DB.query(sqlStr, [account], (err, results) => {
        if (err) {
            return res.cc(err)
        }
        if (!results.length) {
            return res.send({
                data: results,
                status: 202,
                message: '无数据！',
            })
        }
        return res.send({
            data: results,
            status: 200,
            message: '查询成功！',
        })
    })
}
