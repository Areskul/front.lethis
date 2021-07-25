#!/usr/bin/sh
yarn build
scp -r dist/* linode:Static/Clients/lethis.com
