# Introduction
The project is to create a UI and a backend service for displaying data from journeys made with city bikes which operated by HSL bike render system in the Helsinki Capital area.
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
4. Unit Testing: 
    <p> Jest </p>
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

<img width="1436" alt="Screenshot 2023-01-28 at 17 31 15" src="https://user-images.githubusercontent.com/75282610/215275071-cce81db2-75c2-4100-99b0-0c48115b1edc.png">

2. Fetching Journey Table:

<img width="1432" alt="Screenshot 2023-01-28 at 17 31 47" src="https://user-images.githubusercontent.com/75282610/215275102-c507ff80-cec8-400d-9552-a89a772fd0da.png">

3. Fetching amount of row: 

<img width="1423" alt="Screenshot 2023-01-28 at 17 32 23" src="https://user-images.githubusercontent.com/75282610/215275127-bb286c30-476b-417b-be12-0703be5538df.png">

4. Station Table:

<img width="1418" alt="Screenshot 2023-01-28 at 17 32 52" src="https://user-images.githubusercontent.com/75282610/215275154-ebee6000-5022-4179-889a-b68d3bef6476.png">

5. Render Station Location:

<img width="1076" alt="Screenshot 2023-01-28 at 17 34 23" src="https://user-images.githubusercontent.com/75282610/215275233-4c8f6604-f9ab-471a-979e-c6e119bd57d1.png">

6. Render and analysis Station Data:

<img width="1076" alt="Screenshot 2023-01-28 at 17 34 23" src="https://user-images.githubusercontent.com/75282610/215275270-f8bde418-3229-4837-830d-248316d20c67.png">

7. Filter/Sorting Data: 

![Screenshot 2023-01-28 at 17 35 53](https://user-images.githubusercontent.com/75282610/215275325-37ba50f5-824b-4206-9306-016b3280f038.png)

8. Language Selection:

![Screenshot 2023-01-28 at 17 36 23](https://user-images.githubusercontent.com/75282610/215275360-aa11daa5-f04f-4583-b548-0adfa25edcd0.png)

# Testing:

The tests have been written using the Jest testing framework. The tests cover the following scenarios:

1. `averageStartFromStation`

. It should return "No Data" if there are no journeys starting from the specified station.
. It should return the correct average even if journeys have different covered distances.

2. `averageEndAtStation`

. It should return the average distance covered by journeys ending at a given station.
. It should return "No Data" if no journeys end at the given station.

3. `checkValidateData`

. Departure and return times must be parseable DateTime strings.
. The arrival time must not happen before the departure time.
. Departure station ID, return station ID, and trip duration must be positive integers.

# Warning: 

1. Please consider when select fletching all data, it may web server broken.
2. In case webserver broken, please wait 15s-30s before go to website again. 

