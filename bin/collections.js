#!/usr/bin/env node
const package = require('../package.json');
const fgf = require('../lib/freegenes-fetch');
const program = require('commander');

program
.version(package.version)
.option('-a, --all', 'Fetch all collections')
.option('-u, --uuid [uuid]', 'Set UUID for query')
.option('-f, --full', 'Get full collection record')
.option('-r, --recurse', 'Get full collection record recursive tree');

program.on('--help', function(){
  console.log('\nCollections Example:  $ collections -a');
  console.log('Collection Example:  $ collections -u 0e19f75d-4e72-499b-924a-a55420a40606');
  console.log('Full Collection Example:  $ collections -fu 0e19f75d-4e72-499b-924a-a55420a40606');
  console.log('Recursive Collection Example:  $ collections -ru 0e19f75d-4e72-499b-924a-a55420a40606\n');
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