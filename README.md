* Travel App

This is the capstone project from front-end web developer nanodegree. This travel app will look for the Boarding city, Destination City, Departing Date, and showing the weather of destination city. 

* APIs Used

a. Pixabay API: display an image of the location entered
b. GeoNames API: get coordinates 
c. WeatherBit API: get weather data

* Project Architecture

- Root:
  - `package.json`
  - `package-lock.json`
  - `readme.md`
  - `webpack.dev.js`
  - `webpack.prod.js`
  -`.babelrc`
  - src folder
    - server folder
      - `server.js`  
    - client folder
      - `index.js`
      - views folder
        - image
          - `travel1.png`
          - `travel2.svg`
        - `index.html`
      - js folder
        - `app.js` 
        - `handleSubmit.js` 
      - styles folder
        - `style.scss` 
        - `footer.scss` 
        - `header.scss` 
        

* Install

    npm run build-dev
    npm run build-prod
    npm run start
