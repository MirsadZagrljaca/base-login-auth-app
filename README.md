<h1>Welcome to <b>Base Login Auth App</b></h1>
Short description:<br/>
Base login system<br/><b>Enjoy!</b><br/>
<br/>
Technologies used:<ul>
    <li>React</li>
    <li>Nodejs</li>
    <li>MongoDB</li>
</ul>

To run it you should:<br/>

<ul>
    <li>git clone https://github.com/MirsadZagrljaca/membership-app</li>
    <li>open backend</li>
    <li>npm install</li>
    <li>npm start</li>
    <li>open browser and go to http://localhost:5000/</li>
    <li>open frontend</li>
    <li>npm install</li>
    <li>npm start</li>
    <li>open browser and go to http://localhost:3000/</li>
</ul>

<br/>

Dependencies:<br/>

<ul>
    <li>Backend</li>
    <ul>
    <li>dependencies</li>
        <ul>
            <li>body-parser v1.19.0</li>
            <li>compression v1.7.4</li>
            <li>cookie-parser v1.4.5</li>
            <li>cors v2.8.5</li>
            <li>crypto v1.0.1</li>
            <li>express v4.17.1</li>
            <li>express-jwt v6.1.0</li>
            <li>helmet v4.6.0</li>
            <li>jsonwebtoken v8.5.1</li>
            <li>lodash v4.17.21</li>
            <li>mongoose v5.10.0</li>
        </ul>
    <li>devDependencies</li>
        <ul>
            <li>babel-core v6.26.3</li>
            <li>babel-loader v7.1.5</li>
            <li>babel-preset-env v1.7.0</li>
            <li>babel-preset-stage-2 v6.24.1</li>
            <li>nodemon v2.0.13</li>
            <li>webpack v5.55.1</li>
            <li>webpack-cli v4.8.0</li>
            <li>webpack-node-externals v3.0.0</li>
        </ul>
    </ul>
    <li>Frontend</li>
    <ul>
    <li>dependencies</li>
    <ul>
        <li>material-ui/core v4.12.3</li>
        <li>material-ui/icons v4.11.2</li>
        <li>material-ui/styles v4.11.4</li>
        <li>axios v0.23.0</li>
        <li>prop-types v15.7.2</li>
        <li>react v17.0.2</li>
        <li>react-idle-timer v4.6.4</li>
        <li>react-dom v17.0.2</li>
        <li>react-hot-loader v4.13.0</li>
        <li>react-router v5.2.1</li>
        <li>react-router-dom v5.3.0</li>
    </ul>
    </ul>
</ul>

<ul>
  <li>backend</li>
  <ul>  
    <li>dist</li>
      <ul>  
        <li>Main.js - weback created file to run with nodemon</li>
      </ul>
    <li>src</li>
      <ul>
        <li>config</li>
          <ul>
            <li>config.js -- stors info about ports and urls</li>
          </ul>
        <li>controllers</li>
          <ul>
            <li>auth.controllers.js -- controler for authorised routes</li>
            <li>user.controllers.js -- controler for users routes</li>
          </ul>
          <li>helpers</li>
            <ul>
              <li>dbErrorHandler.js -- error handling from db side</li>
            </ul>
          <li>models</li>
            <ul>
              <li>user.model.js -- user model for entries to db</li>
            </ul>
          <li>routs</li>
            <ul>
              <li>auth-routes.js -- routing for authorised routs</li>
              <li>user-routes.js -- routing for users</li>
            </ul>
            <li>express.js -- express file</li>
            <li>server.js -- main file on backend</li>
      </ul>
      <li>.babelrc -- babel file</li>
      <li>nodemon.json -- nodemon file</li>
      <li>package-lock.json -- node file for dependecy versions</li>
      <li>package.json -- main node file</li>
      <li>template.js -- template for sending to browser</li>
      <li>webpack.config.js -- wepack file</li>
  </ul>
  <li>fontend</li>
    <ul>
      <li>public</li>
        <ul>
          <li>favicon.ico -- icon</li>
          <li>index.html -- main html file</li>
        </ul>
      <li>src</li>
      <ul>
        <li>assets</li>
        <ul>
          <li>images</li>
            <ul>
                <li>homeImage.jpeg</li>
            </ul>
        </ul>
      </ul>
      <li>auth</li>
        <ul>
          <li>api-auth.js -- APIs for authorised user</li>
          <li>api-helpers.js -- helpers for authorised user</li>
          <li>PrivateRoutes.js -- private routes</li>
        </ul>
      <li>core</li>
        <ul>
          <li>Home.js -- home page</li>
        </ul>
      <li>user</li>
        <ul>
          <li>api-user.js -- APIs for user actions</li>
          <li>Final.js -- final page</li>
          <li>Register.js -- register account page</li>
          <li>Signin.js -- sign in to your account page</li>
        </ul>
        <li>App.js -- main app component</li>
        <li>config.js -- holds links and ports from backend</li>
        <li>index.css -- main styling file</li>
        <li>index.js -- main app file</li>
        <li>MainRouter.js -- main routing file</li>
        <li>theme.js -- styling theme</li>
      <li>package-lock.json -- node file for dependecy versions</li>
      <li>package.json -- main node file</li>
    </ul>
</ul>