#!/usr/bin/sh
if yarn build ; then
    echo "build succeeded"
    if scp -r dist/* linode-arch:Static/front.lethis.com; then
        echo "sended dist folder via ssh"
    fi
else
    echo "build failed"
    echo "doing nothing"
fi
