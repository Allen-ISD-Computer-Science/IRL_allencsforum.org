#!/bin/bash

# Halt on errors or undefined environment variables
set -eu

# Activate local python environment
source .venv/bin/activate

# Run main
HOST=$VAPOR_LOCAL_HOST PORT=$VAPOR_LOCAL_PORT python3 main.py
