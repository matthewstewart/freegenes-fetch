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
.option('-t, --fasta', 'Return result(s) in fasta format')
.option('-s, --save [destinationDir]', 'Save result(s) to .json/.fa file.');

program.on('--help', function(){
  console.log('\nExamples:')
  console.log('  Parts:');
  console.log('    All:');
  console.log('      $ parts -a  # Get all parts');
  console.log('      $ parts --all  # Get all parts');
  console.log('      $ parts -as .  # Get all parts and save to current directory');
  console.log('      $ parts --all --save .  # Get all parts and save to current directory');
  console.log('      $ parts -at  # Get all parts in fasta');
  console.log('      $ parts --all --fasta  # Get all parts in fasta');
  console.log('      $ parts --all --fasta --save . # Get all parts in fasta and save in current directory');
  console.log('      $ parts -ats . # Get all parts in fasta and save in current directory');
  console.log('    All By Category:');
  console.log('      $ parts -c 0e19f75d-4e72-499b-924a-a55420a40606  # Get all parts by category uuid');
  console.log('      $ parts --collection 0e19f75d-4e72-499b-924a-a55420a40606  # Get all parts by category uuid');
  console.log('      $ parts --collection 0e19f75d-4e72-499b-924a-a55420a40606 --save .  # Get all parts by category uuid and save to current directory');
  console.log('      $ parts -tc 0e19f75d-4e72-499b-924a-a55420a40606  # Get all parts by category uuid in fasta');
  console.log('      $ parts --collection 0e19f75d-4e72-499b-924a-a55420a40606 --fasta  # Get all parts by category uuid in fasta');
  console.log('      $ parts --collection 0e19f75d-4e72-499b-924a-a55420a40606 --fasta --save .  # Get all parts by category uuid in fasta and save in current directory');
  console.log('      $ parts -ats . # Get all parts by category uuid in fasta and save in current directory');
  console.log('    One:');
  console.log('      $ parts -u 6295083d-8a28-4e9e-8b3d-9429c2544761  # Get part by uuid');
  console.log('      $ parts --uuid 6295083d-8a28-4e9e-8b3d-9429c2544761  # Get part by uuid');
  console.log('      $ parts --uuid 6295083d-8a28-4e9e-8b3d-9429c2544761 --save .  # Get part by uuid and save to current directory');
  console.log('      $ parts -tu 6295083d-8a28-4e9e-8b3d-9429c2544761  # Get part by uuid in fasta');
  console.log('      $ parts --uuid 6295083d-8a28-4e9e-8b3d-9429c2544761 --fasta  # Get part by uuid in fasta');
  console.log('      $ parts -fu 6295083d-8a28-4e9e-8b3d-9429c2544761  # Get full part by uuid');
  console.log('      $ parts -fu 6295083d-8a28-4e9e-8b3d-9429c2544761 --save . # Get full part by uuid and save to current directory');
  console.log('      $ parts --uuid 6295083d-8a28-4e9e-8b3d-9429c2544761 --full  # Get full part by uuid');
  console.log('      $ parts -ftu 6295083d-8a28-4e9e-8b3d-9429c2544761  # Get full part by uuid in fasta');
  console.log('      $ parts --uuid 6295083d-8a28-4e9e-8b3d-9429c2544761 --full --fasta  # Get full part by uuid in fasta');
  console.log('      $ parts --uuid 6295083d-8a28-4e9e-8b3d-9429c2544761 --full --fasta  --save .  # Get full part by uuid in fasta and save to current directory');
});

program.parse(process.argv);

if (program.all) {
  // show all
  fgf.getParts()
  .then(res => {
    if (program.fasta) {
      if (program.save) {
        // save fasta
        let filename = `parts.fa`;
        let destFilePath = `${program.save}/${filename}`;
        jf.saveFasta(destFilePath, jf.jsonArrToFasta(res, 'gene_id', null, 'synthesized_sequence'));
        console.log(`saved ${destFilePath}`);
      } else {  
        //print fasta
        console.log(jf.jsonArrToFasta(res, 'gene_id', null, 'synthesized_sequence'));
      }  
    } else { 
      if (program.save) {
        // save json
        let filename = `parts.json`;
        let destFilePath = `${program.save}/${filename}`; 
        jf.saveJSON(destFilePath, res);
        console.log(`saved ${destFilePath}`);       
      } else {
        // print json
        console.log(res);
      }  
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
        if (program.save) {
          // save fasta
          let filename = `${res['gene_id']}.fa`;
          let destFilePath = `${program.save}/${filename}`;
          jf.saveFasta(destFilePath, jf.jsonObjToFasta(res.gene_id, null, res.synthesized_sequence));
          console.log(`saved ${destFilePath}`);          
        } else {
          // print fasta  
          console.log(jf.jsonObjToFasta(res.gene_id, null, res.synthesized_sequence));
        }  
      } else { 
        if (program.save) {
          // save json
          let filename = `${res['gene_id']}.json`;
          let destFilePath = `${program.save}/${filename}`; 
          jf.saveJSON(destFilePath, res);
          console.log(`saved ${destFilePath}`); 
        } else {  
          // print json
          console.log(res);
        }  
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
        if (program.save) {
          // save fasta
          let filename = `${res['gene_id']}.fa`;
          let destFilePath = `${program.save}/${filename}`;
          jf.saveFasta(destFilePath, jf.jsonObjToFasta(res.gene_id, null, res.synthesized_sequence));
          console.log(`saved ${destFilePath}`);          
        } else {
          // print fasta  
          console.log(jf.jsonObjToFasta(res.gene_id, null, res.synthesized_sequence));
        }  
      } else { 
        if (program.save) {
          // save json
          let filename = `${res['gene_id']}.json`;
          let destFilePath = `${program.save}/${filename}`; 
          jf.saveJSON(destFilePath, res);
          console.log(`saved ${destFilePath}`); 
        } else {  
          // print json
          console.log(res);
        }  
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
      if (program.save) {
        // save fasta
        let filename = `parts.fa`;
        let destFilePath = `${program.save}/${filename}`;
        jf.saveFasta(destFilePath, jf.jsonArrToFasta(res, 'gene_id', null, 'synthesized_sequence'));
        console.log(`saved ${destFilePath}`);
      } else {  
        //print fasta
        console.log(jf.jsonArrToFasta(res, 'gene_id', null, 'synthesized_sequence'));
      }  
    } else { 
      if (program.save) {
        // save json
        let filename = `parts.json`;
        let destFilePath = `${program.save}/${filename}`; 
        jf.saveJSON(destFilePath, res);
        console.log(`saved ${destFilePath}`);       
      } else {
        // print json
        console.log(res);
      }  
    }   
  })
  .catch(error => {
    console.error(error);
  });
}