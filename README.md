# reactant
🌟 ReactJS Application

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

---------------------------------------------------------------------------------------

### Deploy on Heroku

Login into the heroku account using heroku cli
run command `heroku login` and enter your credentials.

After login we need to create a new app on heroku
`heroku create reactant-tutorial --buildpack https://github.com/mars/create-react-app-buildpack.git`

Run above command and give your app a name where I gave `reactant-tutorial`.

We are using a [buildpack](https://github.com/mars/create-react-app-buildpack) which will allow us to run the application same as we do in our local.

After creating an app we need to set an environment variable as we did in the local inside our start script in `package.json` file
use following command to set an environment variable in heroku account
`heroku config:set REACT_APP_GRAPHQL_ENDPOINT=https://api.graph.cool/relay/v1/cju19xslr20rp0186qmasd3mt`.

After that we are going to commit and push the changes on heroku.
We will be pushing the changes into `heroku` instead of `origin`.

Use following command to deploy the changes into heroku master branch - `git push heroku master` make sure you have committed the local changes before pusing it to heroku.



#TODO
Watch 4.5 again once you get reply from GraphCool team 