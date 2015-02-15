import urllib2
import json
import sys

base_url = 'http://127.0.0.1:3000'
header = {'Content-Type': 'application/json'}

name = str(sys.argv[1])

address = base_url + '/concepts/' + name
req = urllib2.Request(address, None, header)
req.get_method = lambda: 'DELETE'
response = urllib2.urlopen(req)
response.close()
