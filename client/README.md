# PhisioHack Website

The website is structured over three pages:

- Main landing search page
- List results page
- Professional profile page

# Code structure

## Frontend

This client was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The client can be started by running

`npm install` (only necessary the first time)

### `npm start`

from within the `/client` folder. This will run the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

NOTE: Inside the `/src` folder, you should create a `.env` file, containing the key for the Google API authentication (
used for the Map component). Should be something like:

`REACT_APP_MAPS_API_KEY=MyGoogleApiKey123`

The website is built as a single page react app. This means that when navigating through the pages, the content switch
and the address update are handled by the page scripts. 

The project is structured in the following way:

- App.js: contains the general page structure and logic to switch between pages based on the web address
- pages folder: contains the various scripts that perform the queries and display the content related to a single page
- components folder: contains reusable components suc as the Map component
- style folder: styling sheets
- utils folder: contains geolocator script used for translation of street addresses to geographical coordinates and
  vice-versa

## Backend

The server can be started by running

`npm install` (only necessary the first time)

### `npm start`

from within the `/server` folder. You can then find a list of available calls by visiting

`http://localhost:3001/api-docs/`

in `server/utils/requests.rest`, you can find a list of example requests.

NOTE: Inside the config folder, you should create a `.env` file, containing the key for the MongoDB atlas
authentication. Something like:

`MONGODB=mongodb+srv://root:<password>@<clustername>.yaspg.mongodb.net/<database>?retryWrites=true&w=majority`

