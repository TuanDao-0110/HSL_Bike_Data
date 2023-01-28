# Introduction

This is the pre-assignment for Solita Dev Academy Finland 2023. The project is to create a UI and a backend service for displaying data from journeys made with city bikes in the Helsinki Capital area.
# Deployment: 

https://bike-app-2pf8.onrender.com/


# Data
For the exercise, three datasets of journey data were downloaded. The data is owned by City Bike Finland.

1. https://dev.hsl.fi/citybikes/od-trips-2021/2021-05.csv
2. https://dev.hsl.fi/citybikes/od-trips-2021/2021-06.csv
3. https://dev.hsl.fi/citybikes/od-trips-2021/2021-07.csv

Additionally, a dataset with information about Helsinki Region Transport’s (HSL) city bicycle stations was also downloaded.

Dataset: https://opendata.arcgis.com/datasets/726277c507ef4914b0aec3cbcfcbfafc_0.csv

License and information: https://www.avoindata.fi/data/en/dataset/hsl-n-kaupunkipyoraasemat/resource/a23eef3a-cc40-4608-8aa2-c730d17e8902

# Technical details

The backend service is built using Node.js, Express, and TypeScript. The data is stored in a MongoDB database, and the server is containerized using Docker. The frontend is built using React and Material UI.

# Features

The following features have been implemented:

. Data import: Data is imported from the CSV files to a MongoDB database. Data validation is performed before importing. Journeys that lasted for less than ten seconds and covered distances shorter than 10 meters are not imported.

. Journey list view: A list of journeys is displayed. Each journey shows the departure and return stations


# Running: 
1. Go folder
```
cd Bike_APP 
```

2. Install npm package in Bike_App folder
```
npm install
```

3. Install npm package in client

```
cd client vs npm install
```
4. Install npm package in server
```
cd server vs npm install
```
5. Run both client and server at Bike_App
```
npm run dev
```
# Teachnology: 

1. Front end
    <p>Vite React TS</p>
    <p>Store: Redux Tool Kit (RTK) </p>
    <p>Map Render: Google Map API</p>
    <p>UI: Tailwindcss, Material UI </p>
2. Back end:
    <p>Express TS</p>
3. DataBase:
    <p>Mongo DB</p>

# User Story for Bike_App: 
1. [x] Create front end fetching station and journey data from backend. 
2. [x] Render each station location with map render.
3. [x] Show top 5 departure and arrival stations, average leaving and arrive distance.
4. [x] Languages set up include: English, Finnish, Swedish. 
5. [x] Limmit fetching journey data from back end. 
6. [x] Sorting/Filter on journey's and station's table.
7. [ ] Posting new journey/station data. 
8. [x] Create Backend Get journey/station data
9. [x] Post new station data 
10. [ ] Post new journey data


# Web Interface: 

1. Font Page:
