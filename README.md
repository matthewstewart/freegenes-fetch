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
  -u, --uuid [uuid]  Fetch collection by UUID
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
      $ collections -ru 0e19f75d-4e72-499b-924a-a55420a40606  # Get recursive collection by uuid
      $ collections --uuid 0e19f75d-4e72-499b-924a-a55420a40606 --recurse # Get recursive collection by uuid
```

## Parts
For a list of options available and code examples:
```bash
parts -h
# OR
parts --help

Usage: parts [options]

Options:
  -V, --version                output the version number
  -a, --all                    Fetch all parts
  -u, --uuid [uuid]            Fetch part by UUID
  -f, --full                   Get full part record
  -c, --collection [uuid]      Get parts by collection uuid
  -t, --fasta                  Return result(s) in fasta format
  -s, --save [destinationDir]  Save result(s) to .json/.fa file.
  -h, --help                   output usage information

Examples:
  Parts:
    All:
      $ parts -a  # Get all parts
      $ parts --all  # Get all parts
      $ parts -as .  # Get all parts and save to current directory
      $ parts --all --save .  # Get all parts and save to current directory
      $ parts -at  # Get all parts in fasta
      $ parts --all --fasta  # Get all parts in fasta
      $ parts --all --fasta --save . # Get all parts in fasta and save in current directory
      $ parts -ats . # Get all parts in fasta and save in current directory
    All By Category:
      $ parts -c 0e19f75d-4e72-499b-924a-a55420a40606  # Get all parts by category uuid
      $ parts --collection 0e19f75d-4e72-499b-924a-a55420a40606  # Get all parts by category uuid
      $ parts --collection 0e19f75d-4e72-499b-924a-a55420a40606 --save .  # Get all parts by category uuid and save to current directory
      $ parts -tc 0e19f75d-4e72-499b-924a-a55420a40606  # Get all parts by category uuid in fasta
      $ parts --collection 0e19f75d-4e72-499b-924a-a55420a40606 --fasta  # Get all parts by category uuid in fasta
      $ parts --collection 0e19f75d-4e72-499b-924a-a55420a40606 --fasta --save .  # Get all parts by category uuid in fasta and save in current directory
      $ parts -ats . # Get all parts by category uuid in fasta and save in current directory
    One:
      $ parts -u 6295083d-8a28-4e9e-8b3d-9429c2544761  # Get part by uuid
      $ parts --uuid 6295083d-8a28-4e9e-8b3d-9429c2544761  # Get part by uuid
      $ parts --uuid 6295083d-8a28-4e9e-8b3d-9429c2544761 --save .  # Get part by uuid and save to current directory
      $ parts -tu 6295083d-8a28-4e9e-8b3d-9429c2544761  # Get part by uuid in fasta
      $ parts --uuid 6295083d-8a28-4e9e-8b3d-9429c2544761 --fasta  # Get part by uuid in fasta
      $ parts -fu 6295083d-8a28-4e9e-8b3d-9429c2544761  # Get full part by uuid
      $ parts -fu 6295083d-8a28-4e9e-8b3d-9429c2544761 --save . # Get full part by uuid and save to current directory
      $ parts --uuid 6295083d-8a28-4e9e-8b3d-9429c2544761 --full  # Get full part by uuid
      $ parts -ftu 6295083d-8a28-4e9e-8b3d-9429c2544761  # Get full part by uuid in fasta
      $ parts --uuid 6295083d-8a28-4e9e-8b3d-9429c2544761 --full --fasta  # Get full part by uuid in fasta
      $ parts --uuid 6295083d-8a28-4e9e-8b3d-9429c2544761 --full --fasta  --save .  # Get full part by uuid in fasta and save to current directory
```

## Plates
For a list of options available and code examples:
```bash
plates -h
# OR
plates --help

Usage: plates [options]

Options:
  -V, --version      output the version number
  -a, --all          Fetch all plates
  -u, --uuid [uuid]  Fetch plate by UUID
  -f, --full         Get full plate record
  -r, --recurse      Get full plate record recursive tree
  -h, --help         output usage information

Examples:
  Plates:
    All:
      $ plates -a  # Get all plates
      $ plates --all  # Get all plates
      $ plates -af  # Get all plates with wells
      $ plates --all --full # Get all plates with wells
    One:
      $ plates -u a364eab8-0c68-46b2-8aca-51b72d2f3cb5  # Get plate by uuid
      $ plates --uuid a364eab8-0c68-46b2-8aca-51b72d2f3cb5  # Get plate by uuid
      $ plates -fu a364eab8-0c68-46b2-8aca-51b72d2f3cb5  # Get full plate by uuid
      $ plates --uuid a364eab8-0c68-46b2-8aca-51b72d2f3cb5 --full # Get full plate by uuid
      $ plates -ru a364eab8-0c68-46b2-8aca-51b72d2f3cb5  # Get recursive plate by uuid
      $ plates --uuid a364eab8-0c68-46b2-8aca-51b72d2f3cb5 --recurse # Get recursive plate by uuid
```

## Wells
For a list of options available and code examples:
```bash
wells -h
# OR
wells --help

Usage: wells [options]

Options:
  -V, --version      output the version number
  -a, --all          Fetch all wells
  -u, --uuid [uuid]  Fetch well by UUID
  -f, --full         Get full well record
  -h, --help         output usage information

Examples:
  Wells:
    All:
      $ wells -a  # Get all wells
      $ wells --all  # Get all wells
    One:
      $ wells -u 52b1f905-ff09-4452-9ef1-a59c0afb9638  # Get well by uuid
      $ wells --uuid 52b1f905-ff09-4452-9ef1-a59c0afb9638  # Get well by uuid
      $ wells -fu 52b1f905-ff09-4452-9ef1-a59c0afb9638  # Get well with samples
      $ wells --uuid 52b1f905-ff09-4452-9ef1-a59c0afb9638 --full # Get well with samples
```

## Samples
For a list of options available and code examples:
```bash
samples -h
# OR
samples --help

Usage: samples [options]

Options:
  -V, --version      output the version number
  -a, --all          Fetch all samples
  -u, --uuid [uuid]  Fetch sample by UUID
  -f, --full         Get sample record with wells
  -h, --help         output usage information

Examples:
  Samples:
    All:
      $ samples -a  # Get all samples
      $ samples --all  # Get all samples
    One:
      $ samples -u 1c8c856d-e4fd-4755-aa3c-92f34936f800  # Get sample by uuid
      $ samples --uuid 1c8c856d-e4fd-4755-aa3c-92f34936f800  # Get sample by uuid
      $ samples -fu 1c8c856d-e4fd-4755-aa3c-92f34936f800  # Get sample with wells
      $ samples --uuid 1c8c856d-e4fd-4755-aa3c-92f34936f800 --full # Get sample with wells
```