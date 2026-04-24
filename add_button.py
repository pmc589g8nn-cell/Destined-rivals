with open('/Users/' + __import__('os').getenv('USER') + '/Pokemon-TCG-Tracker/index.html', 'r') as f:
    content = f.read()

new_btn = '\n  <button class="tracker-btn ah-btn" onclick="openTracker(\'ah\')">\n    <span style="color:#fff;font-size:22px;font-weight:900;letter-spacing:2px;">Ascended Heroes</span>\n  </button>'

# Find the mew-btn closing tag and insert after it
import re
result = re.sub(r'(tracker-btn mew-btn[^<]*(?:<[^<]*>)*</button>)', r'\1' + new_btn, content)

with open('/Users/' + __import__('os').getenv('USER') + '/Pokemon-TCG-Tracker/index.html', 'w') as f:
    f.write(result)

print('Done')
