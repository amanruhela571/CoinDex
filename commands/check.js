const KeyManager = require('../lib/keymanager');
const CryptoAPI = require('../lib/cryptoapi');

// const check = {
//     async price(cmd){
//         try{
//             KeyManager = new KeyManager();
//             const key = KeyManager.getKey();

//             const api = new cryptoapi(key);

//             const priceoutputdata = await api.getpricedata(cmd.coin, cmd.cur);

//             console.log(priceoutputdata);
//         }
//         catch(err){
//             console.error(err.message.red);
//         }

//     }
// };

const check = {
    async price(cmd) {
      try {
        keyManager = new KeyManager();
        const key = keyManager.getKey();
  
        const api = new CryptoAPI(key);
  
         await api.getPriceData(cmd.coin, cmd.cur);
  
        
      } catch (err) {
        console.error(err.message.red);
      }
    }
  };
  
  module.exports = check;