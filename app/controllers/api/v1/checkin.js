const chekcinSrv = require('../../../services/chekcin')

module.exports = {
    createAuto(req, res){
        chekcinSrv.checkinUserAuto(req).then(data => {
            if(data.error){
                res.status(data.error).json({errors: [data.msg]})
            }else{
                res.status(200).json(data)
            }
        }).catch(err => {
            res.status(400).json({errors: [err]})
        })
    },
    createManual(req, res){
        chekcinSrv.checkinManual(req).then(data => {
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