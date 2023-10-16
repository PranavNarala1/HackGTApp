import requests
from bs4 import BeautifulSoup
def scraper(dining_hall,meal, date):
    
    y = ""
    if dining_hall == "brittain":
      y += "This is what the Brittain Dining Hall is serving for "+ meal + ": "
    elif dining_hall == "north-ave-dining-hall":
      y += "This is what the North Avenue Dining Hall is serving for "+ meal + ": "
    elif dining_hall == "west-village":
      y += "This is what the West Village Dining Hall is serving for "+ meal + ": "
    
    url = "https://techdining.api.nutrislice.com/menu/carbcounts/"+ dining_hall +"/" + meal +"/2023-"+ date
    html = requests.get(url).content

    soup = BeautifulSoup(html)
    table = soup.select_one("table.carbs-table")
    
    temp = set()
    a = table.find_all("tr")[1:]
    for i in range(len(a)):
        if (i == len(a) - 1):
          y += ((a[i].find_all("td")[0].find_all("p")[0].text.strip()) + ". ")
        else:
          y += ((a[i].find_all("td")[0].find_all("p")[0].text.strip()) + " ")
    
    
    return y

def prompty(date, userinput):
  ans = ""
  for hall in ["brittain","north-ave-dining-hall","west-village"]:
    for ml in ["breakfast","lunch","dinner"]:
      ans += scraper(hall,ml,date)
    ans += "\n "

  return "The user wants to know where to eat today for breakfast, lunch, and dinner. Here are Georgia Tech's menus for today, separated by the specific dining halls Brittain, North Avenue, and West Village: " + ans + " Based on the user's following dietary restrcitions: " + userinput + ". Which dining hall should the user go to for breakfast, lunch, and dinner today. Provide why the user should go to this dining hall and how your recommendations fit the user's diet. Please also provide a 2-3 items from the recommended dining hall as examples. Please provide a pargraph description."