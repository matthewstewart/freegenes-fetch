# FreeGenes Fetch
A Node JS global module for fetching data from the FreeGenes API from the terminal.

## Install
```bash
npm i -g freegenes-fetch
```

## Collections
For a list of options available and code examples:
```bash
collections -h
# OR
collections --help

Usage: collections [options]

Options:
  -V, --version      output the version number
  -a, --all          Fetch all collections
  -u, --uuid [uuid]  Set UUID for query
  -f, --full         Get full collection record
  -r, --recurse      Get full collection record recursive tree
  -h, --help         output usage information

Examples:
  Collections:
    All:
      $ collections -a  # Get all collections
      $ collections --all  # Get all collections
    One:
      $ collections -u 0e19f75d-4e72-499b-924a-a55420a40606  # Get collection by uuid
      $ collections --uuid 0e19f75d-4e72-499b-924a-a55420a40606  # Get collection by uuid
      $ collections -fu 0e19f75d-4e72-499b-924a-a55420a40606  # Get full collection by uuid
      $ collections --uuid 0e19f75d-4e72-499b-924a-a55420a40606 --full # Get full collection by uuid
      $ collections -fu 0e19f75d-4e72-499b-924a-a55420a40606  # Get recursive collection by uuid
      $ collections --uuid 0e19f75d-4e72-499b-924a-a55420a40606 --full # Get recursive collection by uuid
```

## Parts
For a list of options available and code examples:
```bash
parts -h
# OR
parts --help

Usage: parts [options]

Options:
  -V, --version                     output the version number
  -a, --all                         Fetch all parts
  -u, --uuid [uuid]                 Fetch part by UUID
  -f, --full                        Get full part record
  -c, --collection [uuid]           Get parts by collection uuid
  -t, --fasta                       Return result(s) in fasta format
  -s, --save [destinationFilePath]  Save result(s) to .json/.fa file.
  -h, --help                        output usage information

Examples:
  Parts:
    All:
      $ parts -a  # Get all parts
      $ parts --all  # Get all parts
      $ parts -at  # Get all parts in fasta
      $ parts --all --fasta  # Get all parts in fasta
    All By Category:
      $ parts -c 0e19f75d-4e72-499b-924a-a55420a40606  # Get all parts by category uuid
      $ parts --collection 0e19f75d-4e72-499b-924a-a55420a40606  # Get all parts by category uuid
      $ parts -tc 0e19f75d-4e72-499b-924a-a55420a40606  # Get all parts by category uuid in fasta
      $ parts --collection 0e19f75d-4e72-499b-924a-a55420a40606 --fasta # Get all parts by category uuid in fasta
    One:
      $ parts -u 6295083d-8a28-4e9e-8b3d-9429c2544761  # Get part by uuid
      $ parts --uuid 6295083d-8a28-4e9e-8b3d-9429c2544761  # Get part by uuid
      $ parts -tu 6295083d-8a28-4e9e-8b3d-9429c2544761  # Get part by uuid in fasta
      $ parts --uuid 6295083d-8a28-4e9e-8b3d-9429c2544761 --fasta # Get part by uuid in fasta
      $ parts -fu 6295083d-8a28-4e9e-8b3d-9429c2544761  # Get full part by uuid
      $ parts --uuid 6295083d-8a28-4e9e-8b3d-9429c2544761 --full # Get full part by uuid
      $ parts -ftu 6295083d-8a28-4e9e-8b3d-9429c2544761  # Get full part by uuid in fasta
      $ parts --uuid 6295083d-8a28-4e9e-8b3d-9429c2544761 --full --fasta # Get full part by uuid in fasta
```
