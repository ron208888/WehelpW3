from urllib import response
import urllib.request as request
import json
import csv

from numpy import place
src="https://padax.github.io/taipei-day-trip-resources/taipei-attractions-assignment.json"
with request.urlopen(src) as response:
    data=json.load(response)
    
place=data["result"]["results"]




with open('data.csv','w',encoding='utf-8',newline='') as csvfile:
    writer=csv.writer(csvfile,delimiter=",")
    
    for placeName in place:
    
        date=placeName["xpostDate"]
        postYear=date.split("/")
        
        
        if int(postYear[0]) < 2015:
            continue
            
        address=placeName["address"]

        placeFile=placeName["file"]
        placeImg=placeFile.split("https")
        writer.writerow([placeName["xpostDate"],placeName["stitle"],address[5:8],placeName["longitude"],placeName["latitude"],"https"+placeImg[1]])




 

    
    
    
   