#!/usr/bin/python
#-*- coding:utf-8 -*-
import os
import sys

pwdkey = "./key/ullee.pem"
server = "ec2-3-35-207-154.ap-northeast-2.compute.amazonaws.com"
account = "ubuntu"

if __name__ == '__main__':

    print "Server Connection [ssh]"
    cmd = "ssh -i \"%s\" %s@%s" % (pwdkey, account, server)
    try:
        os.system(cmd)
    except Exception as e:
        print str(e)
