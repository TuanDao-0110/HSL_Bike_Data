# Introduction

This is the pre-assignment for Solita Dev Academy Finland 2023. The project is to create a UI and a backend service for displaying data from journeys made with city bikes in the Helsinki Capital area.

# Data
For the exercise, three datasets of journey data were downloaded. The data is owned by City Bike Finland.

. https://dev.hsl.fi/citybikes/od-trips-2021/2021-05.csv
. https://dev.hsl.fi/citybikes/od-trips-2021/2021-06.csv
. https://dev.hsl.fi/citybikes/od-trips-2021/2021-07.csv

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

2. Running

```
npm run dev
```

