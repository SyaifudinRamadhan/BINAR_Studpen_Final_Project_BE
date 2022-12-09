const express = require('express');
const ctrl = require('../app/controllers');
const path = require('path');
const { uploadUser, uploadTicket } = require("../app/controllers/middleware/upload");
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const cors = require('cors');
const cron = require('node-cron');

const swaggerDocument = YAML.load(path.join(__dirname, '../openapi.yaml'));

const apiRouter = express.Router();

apiRouter.use(cors());

apiRouter.use(express.static(path.join(__dirname, '../bin/public')));
apiRouter.use('/', swaggerUi.serve);
apiRouter.get('/', swaggerUi.setup(swaggerDocument));

// =============================== Node Cron Scheduling =====================================
cron.schedule('0 0 */1 * * *', () => {
    console.log('running a task every 60 minutes');
    ctrl.api.v1.transactions.update()
});
// ==========================================================================================

/**
 * TODO: Implement your own API
 *       implementations
 */
//=================================== Route authentikasi =====================================
apiRouter.post('/api/v1/login', ctrl.middleware.auths.login, ctrl.api.v1.auths.login);
apiRouter.post('/api/v1/register', ctrl.middleware.auths.register, ctrl.api.v1.auths.register);
apiRouter.post('/api/v1/loginRegGoogle', ctrl.api.v1.auths.loginRegGoogle);

//===================================== Route untuk umum =====================================
apiRouter.get("/api/v1/filter-ticket", ctrl.middleware.tickets.filterForm, ctrl.api.v1.tickets.filter)
apiRouter.get("/api/v1/get-schedule", ctrl.middleware.tickets.scheduleForm, ctrl.api.v1.tickets.getSchedule)
apiRouter.get("/api/v1/tickets", ctrl.api.v1.tickets.getAllTicket)
apiRouter.get("/api/v1/:id/ticket", ctrl.api.v1.tickets.getTicket)

//==================================== Route untuk user login ================================
apiRouter.get('/api/v1/who-am-i', ctrl.middleware.auths.isLogin, ctrl.api.v1.auths.whoAmI);
apiRouter.put('/api/v1/update-profile', ctrl.middleware.auths.isLogin, uploadUser.single('image'), ctrl.middleware.uploadHandler, ctrl.middleware.auths.updateUser, ctrl.api.v1.auths.updateProfile);
// Route untuk wait list / cart 
apiRouter.get('/api/v1/wait-list', ctrl.middleware.auths.isLogin, ctrl.api.v1.carts.list);
apiRouter.post('/api/v1/wait-list', ctrl.middleware.auths.isLogin, ctrl.api.v1.carts.create);
apiRouter.delete('/api/v1/wait-list/:id', ctrl.middleware.auths.isLogin, ctrl.middleware.carts.getCart, ctrl.api.v1.carts.destroy);
// Route Transaksi / pembelian tiket
apiRouter.get('/api/v1/user-transactions', ctrl.middleware.auths.isLogin, ctrl.api.v1.transactions.list);
apiRouter.get('/api/v1/transactions/:id', ctrl.middleware.auths.isLogin, ctrl.api.v1.transactions.getTrx);
apiRouter.post('/api/v1/user-transactions', ctrl.middleware.auths.isLogin, ctrl.middleware.trx.create, ctrl.api.v1.transactions.create);
apiRouter.delete('/api/v1/user-transactions/:id', ctrl.middleware.auths.isLogin, ctrl.middleware.trx.getTrx, ctrl.api.v1.transactions.destroy);

//======================================= Route untuk admin ==================================
apiRouter.delete("/api/v1/:id/delete-user", ctrl.middleware.auths.isLogin, ctrl.middleware.auths.isAdmin, ctrl.middleware.auths.getUser, ctrl.api.v1.auths.deleteUser)
apiRouter.get("/api/v1/:id/user", ctrl.middleware.auths.isLogin, ctrl.middleware.auths.isAdmin, ctrl.api.v1.auths.getUser)
apiRouter.get("/api/v1/users", ctrl.middleware.auths.isLogin, ctrl.middleware.auths.isAdmin, ctrl.api.v1.auths.getAllUser)
apiRouter.get("/api/v1/:email/user-email", ctrl.middleware.auths.isLogin, ctrl.middleware.auths.isAdmin, ctrl.api.v1.auths.findByEmail)

apiRouter.post("/api/v1/ticket", ctrl.middleware.auths.isLogin, ctrl.middleware.auths.isAdmin, uploadTicket.single('image'), ctrl.middleware.uploadHandler, ctrl.middleware.tickets.createTicketForm, ctrl.api.v1.tickets.createTicket)
apiRouter.put("/api/v1/ticket/:id/update", ctrl.middleware.auths.isLogin, ctrl.middleware.auths.isAdmin, ctrl.middleware.tickets.getTicket, uploadTicket.single('image'), ctrl.middleware.uploadHandler, ctrl.middleware.tickets.updateTicketForm, ctrl.api.v1.tickets.updateTicket)
apiRouter.delete("/api/v1/ticket/:id/delete", ctrl.middleware.auths.isLogin, ctrl.middleware.auths.isAdmin, ctrl.middleware.tickets.getTicket, ctrl.api.v1.tickets.deleteTicket)

apiRouter.get('/api/v1/admin-transactions', ctrl.middleware.auths.isLogin, ctrl.middleware.auths.isAdmin, ctrl.api.v1.transactions.gatAllTrx);
apiRouter.get('/api/v1/transactions/:id', ctrl.middleware.auths.isLogin, ctrl.api.v1.transactions.getTrx);

//===================================== Route verifikasi =====================================
apiRouter.post("/api/v1/reset-password", ctrl.middleware.auths.forgotPass, ctrl.api.v1.auths.forgotPassword)
apiRouter.get("/api/v1/:token/verify-result-register", ctrl.middleware.auths.verifyRegister, ctrl.api.v1.auths.verifyRegister);
apiRouter.get("/api/v1/:email/verify-reset-password", ctrl.middleware.auths.verifyResetPass, ctrl.api.v1.auths.verifyForgotPass);
/**
 * TODO: Delete this, this is just a demonstration of
 *       error handler
 */

// ================ Route Testing Transaksi ==============================


// =======================================================================

apiRouter.get("/api/v1/errors", () => {
    throw new Error(
        "The Industrial Revolution and its consequences have been a disaster for the human race. (NB: Ini adalah tempat redirect verifikasi sementaranya. Nunggu bagian FE selesai dan dihosting)"
    )
})

apiRouter.use(ctrl.api.main.onLost);
apiRouter.use(ctrl.api.main.onError);

module.exports = apiRouter;