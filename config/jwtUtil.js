const jwt = require("jsonwebtoken");

function generateToken(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" }); // Expira em 1 hora, ajuste conforme necessário
}


module.exports =  generateToken ;
