# Sample Geographic Information System written in ReactJS
This is a web application written in ReactJS, completed in about 20 hours (2 days, including the learning process for the libraries used). One of the speedrun challenge that I have done for the purpose of showcase the capability of GIS as a web application to the client.

<br />

Problem Statement
======
The client is currently using [Aquarius Web Portal](https://aquaticinformatics.com/products/aquarius/aquarius-webportal/), a product by [Aquarius Informatics](https://aquaticinformatics.com). However, it does not provide much flexibility for them to customize the web portal as new requirements came in. Therefore, the client would like to have a GIS with map feature that they can integrate the data from their existing database. An easy-to-use, expandable and reasonable speed when processing data is required.

The workflow and solutions provided
======
Develop a web application with a map, can add markers on the map easily and instantly insert the data of the markers added into the existing database, and also some miscellaneous features for their reference purposes.

- A map in the landing page that the user can drag around, add markers on double clicking on the location and edit the information of the selected marker.

- A page to showcase the ability to fill in an online form.

- A page to showcase the ability to transform data to informative graphs.

Requirements
======
[npm](https://www.npmjs.com/get-npm) is required, because it is an nodejs.app (ReactJS).

Notable Packages and Dependencies used
======
* Material UI React - Material UI framework for ReactJS. [Official Material UI React](https://material-ui.com)

* React Leaflet - Leaflet maps for ReactJS. [React Leaflet](https://react-leaflet.js.org)

* OpenStreetMap - The primary map layout imported to the web application. [OSM](https://www.openstreetmap.org)

* Recharts - The charting library built on React Components. [Recharts](http://recharts.org/en-US/)

Note
======
This is a sample GIS project uploaded to Heroku cloud platform, presented to the client and the client's client (lol). Put aside for now as there are more requirements to come. To deploy on Heroku cloud platform, use the create-react-app buildpack. This [webpage](https://elements.heroku.com/buildpacks/mars/create-react-app-buildpack) shows an example.


# Some official README from the Create React App that I am too lazy to get rid of
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
