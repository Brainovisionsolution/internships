import pypdf
import glob
import sys

files = glob.glob('*.pdf')
for file in files:
    if 'AIGA' in file:
        reader = pypdf.PdfReader(file)
        for page in reader.pages:
            print(page.extract_text().encode('utf-8').decode('cp1252', 'ignore'))
        sys.exit(0)
print('File not found')
