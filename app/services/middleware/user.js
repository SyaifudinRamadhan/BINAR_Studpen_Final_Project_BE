const users = require('../../repositories/users');
const jwt = require('jsonwebtoken');

const verifyToken = (req) => {
    let headerToken = req.headers['x-access-token'];
    headerToken = headerToken.split(' ');

    if(headerToken[0] !== 'Bearer'){
        return;
    }

    if(headerToken[1] == undefined){
        return;
    }

    return headerToken[1];
}

const basicAuth = async (req) => {
    let token = verifyToken(req);

    if(!token){
        return;
    }
    let payload = jwt.verify(token, process.env.JWT_SIGNATURE_KEY || "Rahasia")
    return payload.user
}

module.exports = {
    async isLogin(req){
        // Butuh request body token
        if(req.headers['x-access-token'] === undefined) return {error: 401, msg: "Akses dilarang, user tidak login"}
        try {
            console.log("Masuk midleware isLogin");
            let userID = await basicAuth(req) 
            console.log(userID)
            let user = await users.find({id: userID})
            if(!user)  return {error: 401, msg: "Akses dilarang, user tidak login"}
            if(user.deleted) return {error: 401, msg: "Akses dilarang, user tidak terdaftar"}
            if(user.active !== true) return {error: 403, msg: "Akses ditolak, akun user belum aktif"}
            req.user = user
            return {user}
        } catch (error) {
            console.log(error);
            return {error: 400, msg: error ? error : "Bad request server function"}
        }
    },
    async isAdmin(req){
        // Cek access level req.user
        if(req.user.access_level !== 0) return {error: 403, msg: "Akses ditolak, user bukan admin"}
        return {user: req.user}
    },
    async getUser(req){
        // Berdasarkan id target (req.body.target)
        // returnnya targetUser
        try {
            let user = await users.find({id: req.body.id})
            if(!user)  return {error: 404, msg: "User tidak ditemukan"}
            req.targetUser = user
            return {user}
        } catch (error) {
            console.log(error);
            return {error: 400, msg: error ? error : "Bad request server function"}
        }
    }
}