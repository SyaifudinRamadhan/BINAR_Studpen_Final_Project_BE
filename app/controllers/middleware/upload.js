const multer = require("multer");
const path = require('path');

const pubDir = path.join(__dirname, '../../../bin/public')
// const pubDir = path.join(__dirname, 'public');
// const upDir = path.join(pubDir, 'images');

// const storage = multer.diskStorage({
//     destination : function(req, file, callback){
//         callback(null, upDir);
//     },
//     filename : function(req, file, callback){
//         const uniqueIdentifier = Date.now() + '_' + Math.round(Math.random() * 1E9);
//         console.log(file);
//         callback(null, file.fieldname + '_' + uniqueIdentifier + path.extname(file.originalname));
//     }
// });

// const pubDir = `/public/images/${req.my_data.id}`;
const fnSetup = (pathDir) => {
    return multer.diskStorage({
        destination : function(req, file, callback){
                req.pathDir = pathDir
               callback(null, path.join(pubDir, pathDir));
        },
        filename : function(req, file, callback){
            const uniqueIdentifier = Date.now() + '_' + Math.round(Math.random() * 1E9);
               console.log(file);
               callback(null, '_' + file.fieldname + '_' + uniqueIdentifier + path.extname(file.originalname));
         }
    })
}

    
// const setupUser = multer.diskStorage({
//     destination : function(req, file, callback){
//            callback(null, path.join(pubDir, 'user'));
//     },
//     filename : function(req, file, callback){
//         const uniqueIdentifier = Date.now() + '_' + Math.round(Math.random() * 1E9);
//            console.log(file);
//            callback(null, '_' + file.fieldname + '_' + uniqueIdentifier + path.extname(file.originalname));
//      }
// });

// const setupTicket = multer.diskStorage({
//     destination : function(req, file, callback){
//            callback(null, path.join(pubDir, 'ticket'));
//     },
//     filename : function(req, file, callback){
//         const uniqueIdentifier = Date.now() + '_' + Math.round(Math.random() * 1E9);
//            console.log(file);
//            callback(null, '_' + file.fieldname + '_' + uniqueIdentifier + path.extname(file.originalname));
//      }
// });

const uploadUser = multer({storage: fnSetup('user')});
const uploadTicket = multer({storage: fnSetup('ticket')});

module.exports = {
    uploadUser, uploadTicket
}