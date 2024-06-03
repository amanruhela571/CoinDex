#!/usr/bin/env node

// const program = require('commander');
const pkg = require('../package.json');

const { Command } = require('commander');
const program = new Command();

program
  .version(pkg.version)
  .command('key', 'Manage API Key -- https://nomics.com')
  .command('check', 'Check Coin Price Info')
  .parse(process.argv);




// console.log("hello from bin coindex.js");

