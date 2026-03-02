import urllib.request
import xml.etree.ElementTree as ET

def fetch_and_parse(url):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as response:
        xml_data = response.read()

    root = ET.fromstring(xml_data)

    # RSS format: channel > item
    items = root.findall('./channel/item')

    print("# Latest Indian News\n")

    for item in items[:15]: # Top 15 stories
        title = item.findtext('title')
        link = item.findtext('link')
        pub_date = item.findtext('pubDate')
        description = item.findtext('description')

        print(f"## [{title}]({link})")
        if pub_date:
            print(f"**Published:** {pub_date}\n")
        if description:
            # Simple cleanup for basic HTML tags in descriptions if any
            clean_desc = description.replace('<br/>', '\n').replace('</a>', '').replace('<b>', '**').replace('</b>', '**')
            # Remove any a hrefs
            import re
            clean_desc = re.sub(r'<a href=.*?>', '', clean_desc)
            clean_desc = re.sub(r'<img.*?>', '', clean_desc)
            print(f"{clean_desc}\n")

        print("---\n")

if __name__ == "__main__":
    fetch_and_parse('https://timesofindia.indiatimes.com/rssfeedstopstories.cms')
