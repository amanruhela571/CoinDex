const inquirer = require('inquirer');
// import inquirer from 'inquirer';
const colors = require('colors');
const KeyManager = require('../lib/keymanager');
const { isRequired } = require('../utils/validation');

// const { inq } = require('inquirer');
// const inquirer = new inq();

// const KeyManager = require('../lib/KeyManager');
const key = {
    async set() {
      const keyManager = new KeyManager();
      const input = await inquirer.prompt([
        {
          type: 'input',
          name: 'key',
          message: 'Enter API Key '.green + 'https://nomics.com',
          validate: isRequired
        }
      ]);
  
      const key = keyManager.setKey(input.key);
  
      if (key) {
        console.log('API Key Set'.blue);
      }
    },
    show() {
      try {
        const keyManager = new KeyManager();
        const key = keyManager.getKey();
  
        console.log('Current API Key: ', key.yellow);
  
        return key;
      } catch (err) {
        console.error(err.message.red);
      }
    },
    remove() {
      try {
        const keyManager = new KeyManager();
        keyManager.deleteKey();
  
        console.log('Key Removed'.blue);
  
        return;
      } catch (err) {
        console.error(err.message.red);
      }
    }
  };
  
  module.exports = key;