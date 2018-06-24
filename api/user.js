var User = require('../models/user');

module.exports.userReg = function (req, res, next) {
    var mobile = req.body.mobile;
    var regUser = new User({
        mobile: req.body.mobile,
        pwd: req.body.pwd,
        name: req.body.name
    });
    regUser.save(function (err, content) {
        if (err) {
            return res.send({status: 0, msg: err || '注册失败'});
        } else {
            return res.send({status: 1, msg: "注册成功"});
        }
    })
};

module.exports.userLogin = function (req, res, next) {
    var userMobile = req.body.mobile;
    var userPwd = req.body.pwd;
    User.findOne({mobile: userMobile}, function (err, content) {
        if (err) {
            return res.send({status: 0, msg: err || '登录失败'});
        } else {
            var pwd = content.pwd;
            if (pwd === userPwd) {
                var userData = {"user_id": content._id,
                                "name": content.name,
                                "mobile": content.mobile};
                return res.send({status: 1, msg: "登录成功", data: userData});
            } else  {
                return res.send({status: 1, msg: "登录失败，密码错误"});
            }
        }
    });
};