
const colors = require('colors');


const cc = require('cryptocompare')
cc.setApiKey('<your-api-key>')

// api key : 767542343b551054deb15107d95996eaf5d4dc1e590fe183009e4079539fbaf1

class CryptoAPI {

  
    getPriceData(coinOption, curOption) {
      try {

        cc.priceMulti(coinOption,curOption)
        .then(prices => {
        console.log(prices)
        
      }

        
      )
        .catch(console.error)
        
        // for (let key in cryptoPrices) {
        //     if (cryptoPrices.hasOwnProperty(key)) {
        //       console.log(`${key} price in USD: ${cryptoPrices[key].USD}`);
        //     }
        //   }


      } catch (err) {
        handleAPIError(err);
      }
    }
  }
  
  function handleAPIError(err) {
    if (err.response?.status === 401) {
      throw new Error('Your API key is invalid - Go to https://nomics.com');
    } else if (err.response?.status === 404) {
      throw new Error('Your API is not responding');
    } else {
      throw new Error('Something is not working');
    }
  }
  
  module.exports = CryptoAPI;

// class cryptoapi {
//     constructor(apiKey) {
//       this.apiKey = apiKey;
//         // this.baseUrl = 'https://rest.coinapi.io/v1/exchangerate/BTC/USD';
//         // this.baseUrl = 'https://api.nomics.com/v1/currencies/ticker';
//         // this.baseUrl = 'https://min-api.cryptocompare.com/data/price';
//         this.baseUrl = 'https://min-api.cryptocompare.com/data/pricemultifull';

//         // fsym=BTC&tsyms=USD,JPY,EUR

//     }
//     async getpricedata(coinoption,curoption){
//         try{
//             // const res = await axios.get(`${this.baseUrl}?fsym=${coinoption}&tsyms=${curoption}&api_key=${this.apikey} `);

//             let output = '';    
//             console.log(`${coinoption}`);
//             res.data.forEach(coin => {
//                 // output +=  `coin: price: ${coin.price.green} `;
//                 // output +=  `coin: ${coin.sybmol.yellow} (${coin.name}) | price: ${coin.price.green} | Rank: ${coin.rank.blue}`
//             })
//         }
//         catch(err){
//             console.error(err);
//         }
//     }
// }

// module.exports = cryptoapi;