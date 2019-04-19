#!/usr/bin/env node
const package = require('../package.json');
const fgf = require('../lib/freegenes-fetch');
const jf = require('../lib/json-fasta');
const program = require('commander');

program
.version(package.version)
.option('-a, --all', 'Fetch all parts')
.option('-u, --uuid [uuid]', 'Fetch part by UUID')
.option('-f, --full', 'Get full part record')
.option('-c, --collection [uuid]', 'Get parts by collection uuid')
.option('-t, --fasta', 'Return result(s) in fasta format');

program.on('--help', function(){
  console.log('\nExamples:')
  console.log('Parts:  $ parts -a');
  console.log('Parts Fasta:  $ parts -a --fasta');
  console.log('Part:  $ parts -u 6295083d-8a28-4e9e-8b3d-9429c2544761');
  console.log('Part Fasta:  $ parts -u 6295083d-8a28-4e9e-8b3d-9429c2544761 --fasta');
  console.log('Full Part:  $ parts -u 6295083d-8a28-4e9e-8b3d-9429c2544761 --full');
  console.log('Full Part Fasta:  $ parts -u 6295083d-8a28-4e9e-8b3d-9429c2544761 --full --fasta');
  console.log('Parts By Category:  $ parts -c 0e19f75d-4e72-499b-924a-a55420a40606');
  console.log('Parts By Category Fasta:  $ parts -c 0e19f75d-4e72-499b-924a-a55420a40606 --fasta');
});

program.parse(process.argv);

if (program.all) {
  // show all
  fgf.getParts()
  .then(res => {
    if (program.fasta) {
      console.log(jf.jsonArrToFasta(res, 'gene_id', null, 'synthesized_sequence'));
    } else { 
      console.log(res);
    }  
  })
  .catch(error => {
    console.error(error);
  });
} else if (program.uuid) {
  if (program.full) {
    // show one full
    fgf.getFullPart(program.uuid)
    .then(res => {
      if (program.fasta) {
        console.log(jf.jsonObjToFasta(res.gene_id, null, res.synthesized_sequence));
      } else { 
        console.log(res);
      }
    })
    .catch(error => {
      console.error(error);
    });
  } else if (!program.full) {
    // show one 
    fgf.getPart(program.uuid)
    .then(res => {
      if (program.fasta) {
        console.log(jf.jsonObjToFasta(res.gene_id, null, res.synthesized_sequence));
      } else { 
        console.log(res);
      }
    })
    .catch(error => {
      console.error(error);
    });
  }  
} else if (program.collection) {
  fgf.getCollectionParts(program.collection)
  .then(res => {
    if (program.fasta) {
      console.log(jf.jsonArrToFasta(res, 'gene_id', null, 'synthesized_sequence'));
    } else { 
      console.log(res);
    }  
  })
  .catch(error => {
    console.error(error);
  });
}