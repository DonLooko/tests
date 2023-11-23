Folder is used for local development environment only.

##How to connect in your project:
1. Copy env folder to your project
2. Add `ENV_DIRECTORY_PATH` to your `devServer` options in `webpack.config.js`
```
const { ENV_DIRECTORY_PATH } = require('./env');

devServer: {
  static: [
    {
      directory: ENV_DIRECTORY_PATH,
    },
  ],
},
```
3. Connect script in your `index.ejs` template
```
<script type="text/javascript" src="/local-env.js"></script>
```
4. After this you can use `localEnv` as global window variable
```
console.log('userId', window.localEnv.MY_USER_ID_VARIABLE);
```

## How to define personal env file
Copy `default` folder and rename it to `personal`.
Your personal folder will overwrite default folder with `local-env.js` and will be ignored by git.
So you can change env variables in `personal/local-env.js` folder without committing and conflicts with other team members.
