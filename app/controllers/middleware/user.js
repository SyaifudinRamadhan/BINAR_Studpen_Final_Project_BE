const {isLogin, isAdmin, getUser, verifyRegister, verifyResetPass} = require('../../services/middleware/user');

module.exports = {
    login(req, res, next){
        if((req.body.username === undefined && req.body.email === undefined) || req.body.password === undefined){
            console.log("Usernme / email wajib diinputkan");
            res.status(404).json({errors: ["Usernme / email wajib diinputkan"]})
            return
        }
        next()
    },
    register(req, res, next){
        if(req.body.username === undefined || req.body.email === undefined || req.body.password === undefined || req.body.re_type_pass === undefined || req.body.title === undefined || req.body.f_name === undefined || req.body.l_name === undefined){
            res.status(404).json({errors: ["Semua kolom wajib diisi"]})
            return
        }
        if(req.body.password !== req.body.re_type_pass){
            res.status(404).json({errors: ["Konfirmasi password tidak sama"]})
            return
        }
        req.body.username = req.body.title + ". " + req.body.username
        next()
    },
    updateUser(req, res, next){
        console.log(req.body);
        if(req.body.username === undefined || req.body.email === undefined  || req.body.title === undefined || req.body.f_name === undefined || req.body.l_name === undefined || req.body.visa_number === undefined){
            res.status(404).json({errors: ["Semua kolom wajib diisi"]})
            return
        }
        if(req.body.password){
            if(req.body.password !== req.body.re_type_pass){
                res.status(404).json({errors: ["Konfirmasi password tidak sama"]})
                return
            }
        }
        if(req.body.title != ""){
            req.body.username = req.body.title + ". " + req.body.username
        }
        next()
    },
    forgotPass(req, res, next){
        if(req.body.email === undefined){
            res.status(404).json({errors: ["Field email wajib diisi"]})
            return
        }
        next()
    },
    isLogin(req, res, next){
        isLogin(req).then(data => {
            if(data.error){
                res.status(data.error).json({errors: [data.msg]})
                return
            }else{
                // res.status(200).json(data)
                console.log(req.user);
                next()
            }
        }).catch(errors => {
            res.status(400).json({errors})
            return
        })
    },
    isAdmin(req, res, next){
        isAdmin(req).then(data => {
            if(data.error){
                res.status(data.error).json({errors: [data.msg]})
                return
            }else{
                // res.status(200).json(data)
                next()
            }
        }).catch(errors => {
            res.status(400).json({errors: [errors]})
            return
        })
    },
    getUser(req, res, next){
        getUser(req).then(data => {
            if(data.error){
                res.status(data.error).json({errors: [data.msg]})
                return
            }else{
                // res.status(200).json(data)
                next()
            }
        }).catch(errors => {
            res.status(400).json({errors: [errors]})
            return
        })
    },
    verifyRegister(req, res, next){
        verifyRegister(req).then(data => {
            if(data.error){
                req.error = data.msg
                next()
            }else{
                // res.status(200).json(data)
                next()
            }
        }).catch(errors => {
            req.error = errors
            next()
        })
    },
    verifyResetPass(req, res, next){
        verifyResetPass(req).then(data => {
            if(data.error){
                req.error = data.msg
                next()
            }else{
                // res.status(200).json(data)
                next()
            }
        }).catch(errors => {
            req.error = errors
            next()
        })
    }
}