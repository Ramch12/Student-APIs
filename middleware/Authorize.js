const jwt = require('jsonwebtoken');
require('dotenv').config({ path: '../config/.env' });

exports.Userautherize = async function (req, res, next) {
     const token = req.header('x-auth-token');
     if (!token) return res.status(400).send(" Access denied.No token provided");
     try {
          const decoded = await jwt.verify(token, process.env.privatekey);
          req.user = decoded;
          next()
     }
     catch (err) {
          res.status(400).send("Invalid Token");
     }
}
