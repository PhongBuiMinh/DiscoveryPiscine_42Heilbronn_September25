#!/bin/bash

# DEFAULT="\e[0m"
# RED="\e[1;31m"
# GREEN="\e[1;32m"

argv=("$@")
i=0

if [ ${#argv[@]} -eq 0 ]; then
    echo "No arguments supplied."
    exit 1
fi

while [ $i -lt ${#argv[@]} ]; do
    mkdir "ex${argv[$i]}"
    echo "Generating ex${argv[$i]}..."
    # rm -rf "ex${argv[$i]}"
    ((i++))
done

exit 0

# dd if=/dev/zero of=build1.sh bs=1 count=42 - overwrite file with zero bytes
# chown owner:group file
