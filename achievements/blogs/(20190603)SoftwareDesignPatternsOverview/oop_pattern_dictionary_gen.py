def parse_html():
    try: 
        from BeautifulSoup import BeautifulSoup
    except ImportError:
        from bs4 import BeautifulSoup

    filename = 'temp.html'
    html = open(filename, "r").read()
    parsed_html = BeautifulSoup(html, "lxml")

    links = parsed_html.find_all("a")

    for link in links:
        print(str(link.text) + " Pattern," + ",https://en.wikipedia.org" + str(link.get("href")) + ",Wikipedia")


def generate_html_from_dictionary():
    import pandas as pd
    df = pd.read_csv('oop_pattern_dictionary.csv')
    for index, row in df.iterrows():
        html = '<li>'
        html += '<a target="_blank" href="' + row[2] + '">' + row[0] + '</a>'
        html += ''
        if (not pd.isnull(row[1])):
            html += '&nbsp;<code>' + row[1] + '</code>'
        html += '</li>'

        print(html)


  



if __name__ == '__main__':
    generate_html_from_dictionary()



