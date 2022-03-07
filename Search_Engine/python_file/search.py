import sys
try:
    from googlesearch import search
except ImportError:
    print("No module named 'google' found")
 
# to search
query = sys.argv[1]
for j in search(query, tld="co.in", num=10, stop=20, pause=2):
    print(j)

