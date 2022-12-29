const {login, register, loginRegGoogle, forgotPassword, verifyForgotPass, verifyRegister, updateUser, deleteUser, getAllUser, getUser, findByEmail} = require('../../../services/user');
const dotenv = require('dotenv')

dotenv.config();

module.exports = {
    login(req, res){
        login(req).then(data => {
            if(data.error){
                res.status(data.error).json({errors: [data.msg]})
            }else{
                res.status(200).json(data)
            }
        }).catch(err => {
            res.status(400).json({errors: [err]})
        })
    },
    register(req, res){
        register(req).then(data => {
            if(data.error){
                res.status(data.error).json({errors: [data.msg]})
            }else{
                res.status(200).json(data)
            }
        }).catch(err => {
            res.status(400).json({errors: [err]})
        })
    },
    loginRegGoogle(req, res){
        loginRegGoogle(req).then(data => {
            if(data.error){
                res.status(data.error).json({errors: [data.msg]})
            }else{
                res.status(200).json(data)
            }
        }).catch(err => {
            res.status(400).json({errors: [err]})
        })
    },
    updateProfile(req, res){
        updateUser(req, isAdmin = false).then(data => {
            if(data.error){
                res.status(data.error).json({errors: [data.msg]})
            }else{
                res.status(200).json(data)
            }
        }).catch(err => {
            res.status(400).json({errors: [err]})
        })
    },
    deleteUser(req, res){
        deleteUser(req).then(data => {
            if(data.error){
                res.status(data.error).json({errors: [data.msg]})
            }else{
                res.status(200).json(data)
            }
        }).catch(err => {
            res.status(400).json({errors: [err]})
        })
    },
    whoAmI(req, res){
        res.status(200).json({user: req.user})
    },
    verifyRegister(req, res){
        verifyRegister(req).then(data => {
            if(data.error){
                // ganti dengan redirect ke url tertentu res.redirect
                // res.status(data.error).json({errors: [data.msg]})
                res.redirect(`https://binar-studpen-final-prj-fe.vercel.app/verif-failed`)
            }else{
                // ganti dengan redirect ke url tertentu res.redirect
                // res.status(200).json(data)
                res.redirect(`https://binar-studpen-final-prj-fe.vercel.app/verif`)
            }
        }).catch(err => {
            // ganti dengan redirect ke url tertentu res.redirect
            // res.status(400).json({errors: [err]})
            res.redirect(`https://binar-studpen-final-prj-fe.vercel.app/verif-failed`)
        })
    },
    verifyForgotPass(req, res){
        verifyForgotPass(req).then(data => {
            if(data.error){
                // ganti dengan redirect ke url tertentu res.redirect
                // res.status(data.error).json({errors: [data.msg]})
                res.redirect(`https://binar-studpen-final-prj-fe.vercel.app/verif-failed`)
            }else{
                // ganti dengan redirect ke url tertentu res.redirect
                // res.status(200).json(data)
                res.redirect(`https://binar-studpen-final-prj-fe.vercel.app/`)
            }
        }).catch(err => {
            // ganti dengan redirect ke url tertentu res.redirect
            // res.status(400).json({errors: [err]})
            res.redirect(`https://binar-studpen-final-prj-fe.vercel.app/verif-failed`)
        })
    },
    forgotPassword(req, res){
        console.log("Masuk controller");
        let msg = forgotPassword(req)
        res.status(200).json(msg)
    },
    getAllUser(req, res){
        getAllUser(req).then(data => {
            if(data.error){
                res.status(data.error).json({errors: [data.msg]})
            }else{
                res.status(200).json(data)
            }
        }).catch(err => {
            res.status(400).json({errors: [err]})
        })
    },
    getUser(req, res){
        getUser(req).then(data => {
            if(data.error){
                res.status(data.error).json({errors: [data.msg]})
            }else{
                res.status(200).json(data)
            }
        }).catch(err => {
            res.status(400).json({errors: [err]})
        })
    },
    findByEmail(req, res){
        findByEmail(req).then(data => {
            if(data.error){
                res.status(data.error).json({errors: [data.msg]})
            }else{
                res.status(200).json(data)
            }
        }).catch(err => {
            res.status(400).json({errors: [err]})
        })
    }
}
