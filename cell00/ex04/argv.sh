#!/bin/bash

max_argv=3
argv=("$@")
i=0

if [ ${#argv[@]} -eq 0 ]; then
    echo "No arguments supplied"
    exit 1
fi

while [ $i -lt ${#argv[@]} ] && [ $i -lt $max_argv ]; do
    echo "${argv[$i]}"
    ((i++))
done

exit 0

# argv=$@  - single string
# argv=("$@")  - separate element in an array
# $1 - n command-line arg
# $@ - all command-line args
# @ - all args of array
# ${#argv[@]} - n
# =<> - string comparison
# -flags - numeric comparison