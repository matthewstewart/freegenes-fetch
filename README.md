# FreeGenes Fetch
A Node JS global module for fetching data from the FreeGenes API from the terminal.

## Install
```bash
npm i -g freegenes-fetch
```

## Use

### Collections
For a list of options available and code examples:
```bash
collections -h
# OR
collections --help
```

#### All Collections
Use the `-a` or `--all` flag to indicate that you would like all records:
```bash
collections -a
# OR
collections --all
```

#### Collection
Use the `-u` or `--uuid` flag to indicate the `uuid` of the collection you would like to fetch:
```bash
collections -u <uuid>
# OR
collections --uuid <uuid>
```

#### Full Collection
Use the `-f` or `--full` flag to fetch the full collection record including parts:
```bash
collections -fu <uuid>
# OR
collections -u <uuid> --full
```

#### Recursive Collection
Use the `-r` or `--recurse` flag to fetch the full collection record including parts:
```bash
collections -ru <uuid>
# OR
collections -u <uuid> --recurse
```

### Parts
For a list of options available and code examples:
```bash
parts -h
# OR
parts --help
```

#### All Parts
Use the `-a` or `--all` flag to indicate that you would like all records:
```bash
parts -a
# OR
parts --all
# OR Return Fasta
parts -af
```

#### Part
Use the `-u` or `--uuid` flag to indicate the `uuid` of the part you would like to fetch:
```bash
parts -u <uuid>
# OR
parts --uuid <uuid>
# OR Return Fasta
parts --uuid <uuid> --fasta
```

#### Full Part
Use the `-f` or `--full` flag to fetch the full part record including samples:
```bash
parts -fu <uuid>
# OR
parts -u <uuid> --full
# OR Return Fasta
parts -u <uuid> --full --fasta
```

#### Full Part
Use the `-c` or `--collection` flag to fetch the all parts by collection `uuid`:
```bash
parts -c <uuid>
# OR
parts --collection <uuid>
# OR Return Fasta
parts --collection <uuid> --fasta
```