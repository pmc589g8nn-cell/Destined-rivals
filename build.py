import os, shutil

repo = os.path.expanduser('~/Pokemon-TCG-Tracker')
output = os.path.join(repo, 'index.html')
source = os.path.expanduser('~/Downloads/pokemon-tcg-tracker.html')

if not os.path.exists(source):
    print("ERROR: pokemon-tcg-tracker.html not found in Downloads folder")
    exit(1)

shutil.copy(source, output)
print("Copied new file to repo")

os.chdir(repo)
os.system('git add index.html')
os.system('git commit -m "update tracker"')
os.system('git push')
print("Done! GitHub will update in about 60 seconds.")
