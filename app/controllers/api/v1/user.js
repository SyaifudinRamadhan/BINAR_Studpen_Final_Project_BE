const { login, register, loginRegGoogle, forgotPassword, verifyForgotPass, verifyRegister, updateUser, deleteUser } = require('../../../service/user');

module.exports = {
  login(req, res) {
    login(req)
      .then((data) => {
        if (data.error) {
          res.status(data.error).json({ errors: [data.msg] });
        } else {
          res.status(200).json(data);
        }
      })
      .catch((err) => {
        res.status(400).json({ errors: [err] });
      });
  },
  register(req, res) {
    register(req)
      .then((data) => {
        if (data.error) {
          res.status(data.error).json({ errors: [data.msg] });
        } else {
          res.status(200).json(data);
        }
      })
      .catch((err) => {
        res.status(400).json({ errors: [err] });
      });
  },
  loginRegGoogle(req, res) {
    loginRegGoogle(req)
      .then((data) => {
        if (data.error) {
          res.status(data.error).json({ errors: [data.msg] });
        } else {
          res.status(200).json(data);
        }
      })
      .catch((err) => {
        res.status(400).json({ errors: [err] });
      });
  },
  updateProfile(req, res) {
    updateUser(req, (isAdmin = false))
      .then((data) => {
        if (data.error) {
          res.status(data.error).json({ errors: [data.msg] });
        } else {
          res.status(200).json(data);
        }
      })
      .catch((err) => {
        res.status(400).json({ errors: [err] });
      });
  },
  deleteUser(req, res) {
    deleteUser(req)
      .then((data) => {
        if (data.error) {
          res.status(data.error).json({ errors: [data.msg] });
        } else {
          res.status(200).json(data);
        }
      })
      .catch((err) => {
        res.status(400).json({ errors: [err] });
      });
  },
  whoAmI(req, res) {
    res.status(200).json({ user: req.user });
  },
};
