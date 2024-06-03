const { Command } = require('commander');
const program = new Command();

const check = require('../commands/check');
program
  .command('price')
  .description('Check price of coins')
  .option(
    '--coin <type>',
    'Add specific coin types in CSV format',
    'BTC,ETH,XRP'
  )
  .option('--cur <currency>', 'Change the currency', 'USD')
  .action(cmd => check.price(cmd));

program.parse(process.argv);

// If no args, output help
if (!process.argv[2]) {
  program.outputHelp();
}