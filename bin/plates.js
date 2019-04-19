#!/usr/bin/env node
const package = require('../package.json');
const fgf = require('../lib/freegenes-fetch');
const program = require('commander');

program
.version(package.version)
.option('-a, --all', 'Fetch all plates')
.option('-u, --uuid [uuid]', 'Fetch plate by UUID')
.option('-f, --full', 'Get full plate record')
.option('-r, --recurse', 'Get full plate record recursive tree');

program.on('--help', function(){
  console.log('\nExamples:')
  console.log('  Plates:');
  console.log('    All:');
  console.log('      $ plates -a  # Get all plates');
  console.log('      $ plates --all  # Get all plates');
  console.log('      $ plates -af  # Get all plates with wells');
  console.log('      $ plates --all --full # Get all plates with wells');  
  console.log('    One:');
  console.log('      $ plates -u a364eab8-0c68-46b2-8aca-51b72d2f3cb5  # Get plate by uuid');
  console.log('      $ plates --uuid a364eab8-0c68-46b2-8aca-51b72d2f3cb5  # Get plate by uuid');
  console.log('      $ plates -fu a364eab8-0c68-46b2-8aca-51b72d2f3cb5  # Get full plate by uuid');
  console.log('      $ plates --uuid a364eab8-0c68-46b2-8aca-51b72d2f3cb5 --full # Get full plate by uuid');
  console.log('      $ plates -ru a364eab8-0c68-46b2-8aca-51b72d2f3cb5  # Get recursive plate by uuid');
  console.log('      $ plates --uuid a364eab8-0c68-46b2-8aca-51b72d2f3cb5 --recurse # Get recursive plate by uuid');
});

program.parse(process.argv);

if (program.all) {
  if (program.full) {
    // show all with wells
    fgf.getFullPlates()
    .then(res => {
      console.log(res);
    })
    .catch(error => {
      console.error(error);
    });
  } else {
    // show all
    fgf.getPlates()
    .then(res => {
      console.log(res);
    })
    .catch(error => {
      console.error(error);
    });    
  }
} else if (program.uuid && program.full) {
  // show one full
  fgf.getFullPlate(program.uuid)
  .then(res => {
    console.log(res);
  })
  .catch(error => {
    console.error(error);
  });
} else if (program.uuid && program.recurse) {
  // show one recursive
  fgf.getRecursivePlate(program.uuid)
  .then(res => {
    console.log(res);
  })
  .catch(error => {
    console.error(error);
  });
} else if (program.uuid && !program.full && !program.recurse) {
  // show one
  fgf.getPlate(program.uuid)
  .then(res => {
    console.log(res);
  })
  .catch(error => {
    console.error(error);
  });
}