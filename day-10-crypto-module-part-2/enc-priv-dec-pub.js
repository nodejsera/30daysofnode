/** 
    Example of Asymmetric encryption
    Encrypting using private key and decrypting using public key
    File Name : enc-priv-dec-pub.js
    Author : @nodejsera
 **/
//Including the required modules
var crypto = require('crypto');
var fs = require('fs');

//Reading the Private Key
privK = {
    key: fs.readFileSync('priv.key').toString(),
    passphrase: 'nodejsera'
}
//Passing the text to be encrypted using private key
var buf = Buffer.from('rishabh', 'utf8');

//Encrypting the text
secretData = crypto.privateEncrypt(privK, buf);
//printing the encrypted text
console.log(secretData.toString('utf8'));
//reading the Public key
pubK = fs.readFileSync('pub.key').toString();
//decrypting the text using public key
origData = crypto.publicDecrypt(pubK, secretData)
//Printing the original content
console.log(origData.toString());