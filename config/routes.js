const express = require('express');
const ctrl = require('../app/controllers');
const path = require('path');
const { uploadUser } = require("../app/controllers/middleware/upload");
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const cors = require('cors');

const swaggerDocument = YAML.load(path.join(__dirname, '../openapi.yaml'));

const apiRouter = express.Router();

apiRouter.use(cors());

apiRouter.use(express.static(path.join(__dirname, '../bin/public')));
apiRouter.use('/', swaggerUi.serve);
apiRouter.get('/', swaggerUi.setup(swaggerDocument));
/**
 * TODO: Implement your own API
 *       implementations
 */
// Route authentikasi
apiRouter.post('/api/v1/login', ctrl.middleware.login, ctrl.api.v1.login);
apiRouter.post('/api/v1/register', ctrl.middleware.register, ctrl.api.v1.register);
apiRouter.post('/api/v1/loginRegGoogle', ctrl.api.v1.loginRegGoogle);
// Route untuk umum

// Route untuk user login
apiRouter.get('/api/v1/who-am-i', ctrl.middleware.isLogin, ctrl.api.v1.whoAmI);
apiRouter.put('/api/v1/update-profile', ctrl.middleware.isLogin, uploadUser.single('image'), ctrl.middleware.uploadHandler, ctrl.middleware.updateUser, ctrl.api.v1.updateProfile);

// Route carts
apiRouter.get('/api/v1/carts', ctrl.api.v1.carts.list);
apiRouter.post('/api/v1/carts', ctrl.api.v1.carts.create);
apiRouter.delete('/api/v1/carts/:id', ctrl.api.v1.carts.deleteCart);

// Route untuk admin
apiRouter.delete("/api/v1/:id/delete-user", ctrl.middleware.isLogin, ctrl.middleware.isAdmin, ctrl.middleware.getUser, ctrl.api.v1.deleteUser)

// Route verifikasi
apiRouter.post("/api/v1/reset-password", ctrl.middleware.forgotPass, ctrl.api.v1.forgotPassword)
apiRouter.get("/api/v1/:token/verify-result-register", ctrl.middleware.verifyRegister, ctrl.api.v1.verifyRegister);
apiRouter.get("/api/v1/:email/verify-reset-password", ctrl.middleware.verifyResetPass, ctrl.api.v1.verifyForgotPass);
/**
 * TODO: Delete this, this is just a demonstration of
 *       error handler
 */

apiRouter.get("/api/v1/errors", () => {
  throw new Error(
    "The Industrial Revolution and its consequences have been a disaster for the human race. (NB: Ini adalah tempat redirect verifikasi sementaranya. Nunggu bagian FE selesai dan dihosting)"
  )
})

apiRouter.use(ctrl.api.main.onLost);
apiRouter.use(ctrl.api.main.onError);

module.exports = apiRouter;
