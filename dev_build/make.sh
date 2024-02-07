#!/bin/bash

# Halt on error or undefined variables
set -eu

# Additional virtual memory required to build
ulimit -v 67108864

# Install all required packages
npm install

# Complete build
npm run build
