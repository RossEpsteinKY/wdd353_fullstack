const axios = require("axios");
require('dotenv').config();

const getLogin = async (data)=>{
    return await axios.post(process.env.service_url, data);
}

const testing = async (data)=>{
    return await axios.post(process.env.service_url, data);
}

module.exports = {
    getLogin,
    testing,
}
