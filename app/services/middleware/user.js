const users = require('../../repositories/users');
const jwt = require('jsonwebtoken');

const verifyToken = (req) => {
    let headerToken = req.headers['x-access-token'];
    headerToken = headerToken.split(' ');

    if (headerToken[0] !== 'Bearer') {
        return;
    }

    if (headerToken[1] == undefined) {
        return;
    }

    return headerToken[1];
}

const basicAuth = async (req) => {
    let token = verifyToken(req);

    if (!token) {
        return;
    }
    let payload = jwt.verify(token, process.env.JWT_SIGNATURE_KEY || "Rahasia")
    return payload.user
}

module.exports = {
    async isLogin(req) {
        // Butuh request body token
        if (req.headers['x-access-token'] === undefined) return { error: 401, msg: "Akses dilarang, user tidak login" }
        try {
            console.log("Masuk midleware isLogin");
            let userID = await basicAuth(req)
            console.log(userID)
            let user = await users.find({ id: userID })
            if (!user) return { error: 401, msg: "Akses dilarang, user tidak ditemukan" }
            if (user.deleted) return { error: 401, msg: "Akses dilarang, user tidak terdaftar" }
            if (user.active !== true) return { error: 403, msg: "Akses ditolak, akun user belum aktif" }
            req.user = user
            return { user }
        } catch (error) {
            console.log(error);
            return { error: 400, msg: error ? error : "Bad request server function" }
        }
    },
    async isAdmin(req) {
        // Cek access level req.user
        if (req.user.access_level !== 0) return { error: 403, msg: "Akses ditolak, user bukan admin" }
        return { user: req.user }
    },
    async getUser(req) {
        // Berdasarkan id target (req.body.target)
        // returnnya targetUser
        try {
            let user = await users.find({ id: req.params.id, deleted: false, access_level: 1 })
            if (!user) return { error: 404, msg: "User tidak ditemukan" }
            req.targetUser = user
            return { user }
        } catch (error) {
            console.log(error);
            return { error: 400, msg: error ? error : "Bad request server function" }
        }
    },
    async verifyRegister(req) {
        let token = atob(req.params.token).split(' ');

        if (token[0] !== 'Bearer') {
            return { error: 403, msg: "Akses ditolak, Token tidak valid" }
        }

        if (token[1] == undefined) {
            return { error: 403, msg: "Akses ditolak, Token tidak valid" }
        }

        console.log(token);
        let payload = jwt.verify(token[1], process.env.JWT_SIGNATURE_KEY || "Rahasia")
        let userID = await payload.user
        let user = await users.find({ id: userID })
        if (!user) return { error: 401, msg: "Akses dilarang, user tidak ditemukan" }
        if (user.deleted) return { error: 401, msg: "Akses dilarang, user tidak terdaftar" }
        req.user = user
        return { user }
    },
    async verifyResetPass(req){
        let email = atob(req.params.email)
        
        let usersData = await users.findAll({email})
        if(usersData.length === 0) return {error: 404, msg: "User tidak ditemukan"}
        req.users = usersData
        console.log(usersData);
        return {users: usersData}
    }
}