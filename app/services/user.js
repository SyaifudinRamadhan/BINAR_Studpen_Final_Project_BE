// Perintah update dan delete, select user dibawahi oleh middleware getUser
// Perintah read dan create jika membutuhkan akses data user, dilkukan direct ke repo
const users = require('../repositories/users');
const bcrypt = require('bcryptjs');
const jwtWeb = require('jsonwebtoken');
const dotenv = require('dotenv')
const jwt_decode = require('jwt-decode');

dotenv.config();

const encryptPassword = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, parseInt(process.env.salt), (err, encryptedPassword) => {
            if (!!err) {
                reject(err);
                return;
            }
            resolve(encryptedPassword);
        })
    })
}

const checkPassword = (password, encryptedPassword) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, encryptedPassword, (err, isPassCorect) => {
            if (!!err) {
                reject(err);
                return;
            }
            resolve(isPassCorect);
        })
    })
}

const createToken = (id) => {
    return 'Bearer ' + jwtWeb.sign({ user: id }, process.env.JWT_SIGNATURE_KEY || "Rahasia");
}

const verify = () => {
    console.log('Verifikasi');
}

async function register(req, withGoogle = false) {
    try {
        let args = {}
        if (withGoogle) {
            if (req.body.credential !== undefined) {
                let tokenDecode = jwt_decode(req.body.credential)
                console.log(tokenDecode)
                args.username = tokenDecode.name
                args.email = tokenDecode.email
                args.password = await encryptPassword(process.env.passwoordWithGoogle)
                args.g_id = tokenDecode.aud
                args.f_name = tokenDecode.given_name
                args.l_name = tokenDecode.family_name
                args.active = false
                args.access_level = 1
                args.deleted = false
                args.photo = '/user/avatar_default.png'
                console.log(args)
            } else {
                return { error: 404, msg: "Google token kosong" }
            }
        } else {
            let user = await users.findAll({username: req.body.username})
            let user2 = await users.findAll({email: req.body.email})
            if(user.length > 0 || user2.length > 0){
                return {error: 403, msg: "Username / email sudah terdaftar"}
            }
            args.username = req.body.username
            args.email = req.body.email
            args.password = await encryptPassword(req.body.password)
            args.g_id = ""
            args.f_name = req.body.f_name
            args.l_name = req.body.l_name
            args.active = false
            args.access_level = 1
            args.deleted = false
            args.photo = '/user/avatar_default.png'
            console.log(args)
        }
        verify()
        let user = await users.create(args)
        let tokenJwt = createToken(user.id);
        return { token: tokenJwt, user }
    } catch (error) {
        console.log(error)
        return { error: 400, msg: error ? error : "Bad request server function" }
    }
}

// return function wajib menggunakan Object
// Error return wajib pakai code
module.exports = {
    async login(req) {
        let email = req.body.email;
        let username = req.body.username;
        let args = {};
        if (email) {
            args.email = email
        } else {
            args.username = username
        }
        
        try {
            let user = await users.findAll(args)
            if (user) {
                let check = undefined
                for (let i = 0; i < user.length; i++) {
                    check = await checkPassword(req.body.password, user[i].password)
                    if(check) user = user[i]
                }
                if(user.deleted) return {error: 401, msg: "Akses dilarang, user tidak terdaftar"}
                if(user.active !== true) return {error: 403, msg: "Akses ditolak, akun user belum aktif"}
                if (check) {
                    let token = createToken(user.id)
                    return { token, user }
                } else {
                    return { error: 403, msg: "Password tidak sesuai" }
                }
            } else {
                return { error: 404, msg: "Username tidk tersedia" }
            }
        } catch (error) {
            console.log(error)
            return { error: 400, msg: error ? error : "Bad request server function" }
        }

    },
    
    async loginRegGoogle(req) {
        try {
            if (req.body.credential !== undefined) {
                let tokenDecode = jwt_decode(req.body.credential)
                let user = await users.find({ g_id: tokenDecode.aud })
                if (user) {
                    if(user.deleted) return {error: 401, msg: "Akses dilarang, user tidak terdaftar"}
                    if(user.active !== true) return {error: 403, msg: "Akses ditolak, akun user belum aktif"}
                    let token = createToken(user.id)
                    return { token, user }
                } else {
                    return register(req, withGoogle = true)
                }
            } else {
                return { error: 404, msg: "Google token kosong" }
            }
        } catch (error) {
            console.log(error)
            return { error: 400, msg: error ? error : "Bad request server function" }
        }
    },
    verifyRegister() {

    },
    forgotPassword() {

    },
    verifyForgotPass() {

    },
    async updateUser(req, isAdmin = true) {
        let idTarget = undefined
        isAdmin ? idTarget = req.targetUser : idTarget = req.user.id
        try {
            let user = await users.findAll({username: req.body.username})
            let user2 = await users.findAll({email: req.body.email})
            if(user.length > 0 || user2.length > 0){
                if(req.user.username != req.body.username && user.length > 0){
                    console.log('-------------- Cek double username -----------------');
                    return {error: 403, msg: "Username / email sudah terdaftar"}
                }else if(req.user.email != req.body.email && user2.length > 0){
                    console.log('-------------- Cek double email -----------------');
                    return {error: 403, msg: "Username / email sudah terdaftar"}
                }
            }
            let args = {};
            args.username = req.body.username
            args.email = req.body.email
            args.f_name = req.body.f_name
            args.l_name = req.body.l_name
            args.photo = req.body.image
            // args.active = req.body.active
            
            if(req.body.password !== undefined && req.body.password !== ''){
                args.password = await encryptPassword(req.body.password)
            }
            let update = await users.update(idTarget, args)
            return {update}
        } catch (error) {
            console.log(error)
            return {error: 400, msg: error ? error : "Bad request server function"}
        }
    },
    async deleteUser(req) {
        // Perintah khusus untuk admin
        try {
            let deleted = await users.delete(req.targetUser.id)
            return {deleted}
        } catch (error) {
            console.log(error)
            return {error: 400, msg: error ? error : "Bad request server function"}   
        }
    },
    // updateProfile() {

    // }
    register
}