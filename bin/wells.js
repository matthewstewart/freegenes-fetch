#!/usr/bin/env node
const package = require('../package.json');
const fgf = require('../lib/freegenes-fetch');
const program = require('commander');

program
.version(package.version)
.option('-a, --all', 'Fetch all wells')
.option('-u, --uuid [uuid]', 'Fetch well by UUID')
.option('-f, --full', 'Get full well record');

program.on('--help', function(){
  console.log('\nExamples:')
  console.log('  Wells:');
  console.log('    All:');
  console.log('      $ wells -a  # Get all wells');
  console.log('      $ wells --all  # Get all wells');
  console.log('      $ wells -af  # Get all wells with samples');
  console.log('      $ wells --all --full # Get all wells with samples');  
  console.log('    One:');
  console.log('      $ wells -u 52b1f905-ff09-4452-9ef1-a59c0afb9638  # Get well by uuid');
  console.log('      $ wells --uuid 52b1f905-ff09-4452-9ef1-a59c0afb9638  # Get well by uuid');
});

program.parse(process.argv);

if (program.all) {
  // show all
  fgf.getWells()
  .then(res => {
    console.log(res);
  })
  .catch(error => {
    console.error(error);
  });
} else if (program.uuid && program.full) {
  // show one full
  fgf.getFullWell(program.uuid)
  .then(res => {
    console.log(res);
  })
  .catch(error => {
    console.error(error);
  });
} else if (program.uuid && !program.full) {
  // show one
  fgf.getWell(program.uuid)
  .then(res => {
    console.log(res);
  })
  .catch(error => {
    console.error(error);
  });
}