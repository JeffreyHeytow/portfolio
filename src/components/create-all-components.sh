#!/bin/bash

# Create all component files with complete code

# Copy the components we already created
for file in /mnt/user-data/outputs/{Hero,Journey,Experience,Book,Contact,SideNav,AIDisclosure}.{js,css}; do
    if [ -f "$file" ]; then
        cp "$file" .
    fi
done

echo "Components copied from outputs"
ls -la
