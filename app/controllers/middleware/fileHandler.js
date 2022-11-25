const fs = require('node:fs');
const path = require('path');

// const pubDir = `/public/images/${req.my_data.id}`;
const pubDir = path.join(__dirname, '../../../bin/public');

const uploadHandler = (req, res, next)=>{
    if(req.file != undefined){
        if(req.file.mimetype == 'image/jpeg'){
            if((req.user == undefined && req.pathDir == 'user') || (req.ticket == undefined && req.pathDir == 'ticket')){
                req.body.image = `/${req.pathDir}/${req.file.filename}`;
                req.msg = 'New uploaded file success';
            }else{
                if(req.user){
                    req.user.photo == '/user/avatar_default.png' ? '' : fs.rm(path.join(pubDir,req.user.photo), (err) => {
                        console.log(err);
                    });
                }else if(req.ticket){
                    req.ticket.logo == '/ticket/ticket_default.jpg' ? '' : fs.rm(path.join(pubDir,req.ticket.logo), (err) => {
                        console.log(err);
                    });
                }
                req.body.image = `/${req.pathDir}/${req.file.filename}`;
                req.msg = 'Uploaded file success';
            }

        }else{
            req.msg = 'Uploaded file must be image/jpg/png';
        }
    }else{
        if(req.user){
            req.user == undefined ? req.body.image = '' : req.body.image = req.user.photo;
        }else if(req.ticket){
            req.ticket == undefined ? req.body.image = '' : req.body.image = req.ticket.logo;
        }
        req.msg = 'No uploaded file detected';
    }
    next()
}

module.exports = {
    uploadHandler
}
