const { Command } = require('commander');
const program = new Command();
const key = require('../commands/key.js')

program
  .command('set')
  .description('Set API Key -- Get at https://nomics.com')
  .action(key.set);

program
  .command('show')
  .description('Show API Key')
  .action(key.show);

program
  .command('remove')
  .description('Remove API Key')
  .action(key.remove);

program.parse(process.argv);

// If no args, output help
if (!process.argv[2]) {
  program.outputHelp();
}