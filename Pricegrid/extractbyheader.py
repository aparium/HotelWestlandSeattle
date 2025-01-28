from bs4 import BeautifulSoup
import csv

# Load the HTML content from the file
with open('text-extract.html', 'r', encoding='utf-8') as file:
    html_content = file.read()

# Parse the HTML content
soup = BeautifulSoup(html_content, 'html.parser')

# Define the headers you want to extract
headers = [
    "ROOM STANDARD 1BED",
    "ROOM STANDARD 2BEDS",
    "ROOM UPGRADE",
    "ROOM VIEW",
    "SUITE STANDARD",
    "SUITE UPGRADE",
    "SUITE VIEW",
    "SUITE BEST"
]

# Create a dictionary to hold the results
results = {header: [] for header in headers}

# Find the table headers
table_headers = soup.find_all('th', title=True)

# Create a mapping of header titles to their respective indices
header_mapping = {header.get_text(strip=True): header for header in table_headers}

# Find all relevant room type containers
room_type_rows = soup.find_all('tr')[1:]  # Skip the header row

# Iterate through each row and extract data
for row in room_type_rows:
    cells = row.find_all('td')
    for i, cell in enumerate(cells):
        room_type_name = cell.get_text(strip=True)
        if i < len(table_headers):  # Ensure we don't go out of bounds
            header_title = table_headers[i].get('title')
            if header_title in results:
                results[header_title].append(room_type_name)

# Write the results to a CSV file
with open('extracted_data.csv', 'w', newline='', encoding='utf-8') as csvfile:
    csv_writer = csv.writer(csvfile)
    csv_writer.writerow(['Header Name', 'Extracted Data'])  # Write header row

    for header, values in results.items():
        for value in values:
            csv_writer.writerow([header, value])  # Write each header and its corresponding value

print("Data extraction complete. Check 'extracted_data.csv' for results.")
