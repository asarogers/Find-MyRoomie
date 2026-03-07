#!/bin/bash
# Deploy built output to Hostinger via rsync
OUT_DIR="/mnt/c/Users/cyber/repo/FindMyRoomy/Find-MyRoomie/out/"
rsync -avz --delete -e 'ssh -p 65002' "$OUT_DIR" u555286648@82.197.83.3:~/domains/findmyroomy.com/public_html/
