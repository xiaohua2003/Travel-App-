- Travel App

This is the capstone project from front-end web developer nanodegree. This travel app will look for the Boarding city, Destination City, Departing Date, and showing the weather of destination city.

- APIs Used

a. Pixabay API: display an image of the location entered
b. GeoNames API: get coordinates
c. WeatherBit API: get weather data

- To install and open the app in the local host

  - npm install
  - npm run build-dev
  - npm run build-prod
  - npm run start
* App Screenshot
![Travel app](https://user-images.githubusercontent.com/72715756/120115792-a24eaf00-c142-11eb-83ce-2c291d0a6a8f.png)

- Project Architecture

* Root:

  - `package.json`
  - `package-lock.json`
  - `readme.md`
  - `webpack.dev.js`
  - `webpack.prod.js` -`.babelrc`
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

* A remove trip function was added, so the users are able to remove the trip. Specifically, when the user click the " remove " button, the "plan_form" will be reset (the "from" input text, "to" input text and "desitination date" input will become empty). Also, the "trip_information" section will become invisiable.
