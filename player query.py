import requests
username = 'Traveeseemo'

last_seen = requests.get('https://api.2b2t.dev/seen?username='+username)
stats =  requests.get('https://api.2b2t.dev/stats?username='+username)

print("stats" + stats.text)
print("last seen" + last_seen.text)

status = requests.get('https://api.2b2t.dev/status?uuid='+"57a8c66a-aa6a-49ea-9d29-d2a9d3f882bc")

print(status.text)

stats =  requests.get('https://api.2b2t.dev/stats/stats?username=all')x