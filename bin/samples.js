#!/usr/bin/env node
const package = require('../package.json');
const fgf = require('../lib/freegenes-fetch');
const program = require('commander');

program
.version(package.version)
.option('-a, --all', 'Fetch all samples')
.option('-u, --uuid [uuid]', 'Fetch sample by UUID')
.option('-f, --full', 'Get sample record with wells');

program.on('--help', function(){
  console.log('\nExamples:')
  console.log('  Samples:');
  console.log('    All:');
  console.log('      $ samples -a  # Get all samples');
  console.log('      $ samples --all  # Get all samples'); 
  console.log('    One:');
  console.log('      $ samples -u 1c8c856d-e4fd-4755-aa3c-92f34936f800  # Get sample by uuid');
  console.log('      $ samples --uuid 1c8c856d-e4fd-4755-aa3c-92f34936f800  # Get sample by uuid');
  console.log('      $ samples -fu 1c8c856d-e4fd-4755-aa3c-92f34936f800  # Get sample with wells');
  console.log('      $ samples --uuid 1c8c856d-e4fd-4755-aa3c-92f34936f800 --full # Get sample with wells');  
});

program.parse(process.argv);

if (program.all) {
  // show all
  fgf.getSamples()
  .then(res => {
    console.log(res);
  })
  .catch(error => {
    console.error(error);
  });
} else if (program.uuid && program.full) {
  // show one full
  fgf.getFullSample(program.uuid)
  .then(res => {
    console.log(res);
  })
  .catch(error => {
    console.error(error);
  });
} else if (program.uuid && !program.full) {
  // show one
  fgf.getSample(program.uuid)
  .then(res => {
    console.log(res);
  })
  .catch(error => {
    console.error(error);
  });
}