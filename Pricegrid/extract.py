from bs4 import BeautifulSoup

# Load the HTML content from the file
with open('text-extract.html', 'r', encoding='utf-8') as file:
    html_content = file.read()

# Parse the HTML content
soup = BeautifulSoup(html_content, 'html.parser')

# Find all relevant divs
results = []
for div in soup.find_all('div', attrs={'data-ebd-id': True}):
    # Extract the ID
    id_value = div['data-ebd-id']
    # Extract the text from the <p> tag
    text_value = div.find('p').get_text(strip=True)
    results.append((id_value, text_value))

# Print the results
for id_value, text_value in results:
    print(f"{id_value}, {text_value}")