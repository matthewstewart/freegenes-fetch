#!/usr/bin/env node
const package = require('../package.json');
const fgf = require('../lib/freegenes-fetch');
const program = require('commander');

program
.version(package.version)
.option('-a, --all', 'Fetch all collections')
.option('-u, --uuid [uuid]', 'Fetch collection by UUID')
.option('-f, --full', 'Get full collection record')
.option('-r, --recurse', 'Get full collection record recursive tree');

program.on('--help', function(){
  console.log('\nExamples:')
  console.log('  Collections:');
  console.log('    All:');
  console.log('      $ collections -a  # Get all collections');
  console.log('      $ collections --all  # Get all collections');
  console.log('    One:');
  console.log('      $ collections -u 0e19f75d-4e72-499b-924a-a55420a40606  # Get collection by uuid');
  console.log('      $ collections --uuid 0e19f75d-4e72-499b-924a-a55420a40606  # Get collection by uuid');
  console.log('      $ collections -fu 0e19f75d-4e72-499b-924a-a55420a40606  # Get full collection by uuid');
  console.log('      $ collections --uuid 0e19f75d-4e72-499b-924a-a55420a40606 --full # Get full collection by uuid');
  console.log('      $ collections -ru 0e19f75d-4e72-499b-924a-a55420a40606  # Get recursive collection by uuid');
  console.log('      $ collections --uuid 0e19f75d-4e72-499b-924a-a55420a40606 --recurse # Get recursive collection by uuid');
});

program.parse(process.argv);

if (program.all) {
  // show all
  fgf.getCollections()
  .then(res => {
    console.log(res);
  })
  .catch(error => {
    console.error(error);
  });
} else if (program.uuid && program.full) {
  // show one full
  fgf.getFullCollection(program.uuid)
  .then(res => {
    console.log(res);
  })
  .catch(error => {
    console.error(error);
  });
} else if (program.uuid && program.recurse) {
  // show one recursive
  fgf.getRecursiveCollection(program.uuid)
  .then(res => {
    console.log(res);
  })
  .catch(error => {
    console.error(error);
  });
} else if (program.uuid && !program.full && !program.recurse) {
  // show one
  fgf.getCollection(program.uuid)
  .then(res => {
    console.log(res);
  })
  .catch(error => {
    console.error(error);
  });
}