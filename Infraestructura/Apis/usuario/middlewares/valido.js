const CriptoJs = require('crypto-js');


const Encrypt = (data)=> {

    var ciphertext = CriptoJs.AES.encrypt(data, process.env.AUTH_AES_SECRET_KEY ).toString()
    return ciphertext;

}

const Decrypt = (data)=>{
    var bytes = CriptoJs.AES.decrypt(data, process.env.AUTH_AES_SECRET_KEY);
    var originalText = bytes.toString(CriptoJs.enc.Utf8);
    return originalText;
}

module.exports ={
    Encrypt,
    Decrypt
}

    
