const jwt = require('jsonwebtoken');

const CreateToken = (data) => {
    const payload = {exp: Math.floor(Date.now() / 1000) + (24*60*60), data:data};
    return jwt.sign(payload, 'SecretKey123456789');
    // const payload = {exp: Math.floor(Date.now() / 1000 + 24*60*60), data: data};
    // return jwt.sign(payload, 'Secretkey123456789');
}

module.exports = CreateToken;