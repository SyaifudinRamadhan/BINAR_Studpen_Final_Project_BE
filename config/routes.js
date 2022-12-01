const express = require('express');
const ctrl = require('../app/controllers');
const path = require('path');
const { uploadUser } = require('../app/controllers/middleware/upload');

const apiRouter = express.Router();

apiRouter.use(express.static(path.join(__dirname, '../bin/public')));
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
apiRouter.delete('/api/v1/carts/:id', ctrl.api.v1.carts.destroy);

// Route Transaction
apiRouter.get('/api/v1/transactions', ctrl.api.v1.transactions.list);
apiRouter.post('/api/v1/transactions', ctrl.api.v1.transactions.create);
apiRouter.put('/api/v1/transactions/:id', ctrl.api.v1.transactions.update);
apiRouter.delete('/api/v1/transactions/:id', ctrl.api.v1.transactions.destroy);

// Route untuk admin
apiRouter.delete('/api/v1/delete-user', ctrl.middleware.isLogin, ctrl.middleware.isAdmin, ctrl.middleware.getUser, ctrl.api.v1.deleteUser);
/**
 * TODO: Delete this, this is just a demonstration of
 *       error handler
 */

apiRouter.get('/api/v1/errors', () => {
  throw new Error('The Industrial Revolution and its consequences have been a disaster for the human race.');
});

apiRouter.use(ctrl.api.main.onLost);
apiRouter.use(ctrl.api.main.onError);

module.exports = apiRouter;
