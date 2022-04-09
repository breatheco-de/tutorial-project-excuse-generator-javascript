# ![alt text](https://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=breathecode,32) Webpack's Error Reporting Plugin

This webpack plugin will do a POST call to any given URL every time webpack find an error.

This plugin is fully compatible with:
- Babel.
- esLint.

## Installation

```
$ npm install bc-webpack-error-reporting-plugin --save-dev
```

## Sample Configuration

Add the following configuration into your webpack plugins

```js
//at the top of your webpack.condig.js
const WebpackErrorReporting = require("@breathecode/webpack-error-reporting-plugin");

//inside your webpack plugin configuration
  plugins: [

    new WebpackErrorReporting({
        hookURL: 'https://path/to/url/hook', //(mandatory) the plugin will POST the array of errors to this url
        username: 'alesanchezr', //(mandatory) any username to identify the developer (it will be passed on each error)
        token: 'Bearer sdSSDFwefEWFewrfewr43234FSD34r', //(optional) this will be the authorization header
        silent: true //(optional) log plugin activity on the console
    }),

  ]

```

## Sample Request with Errors Found

This is an example of the request body that can be sent to your HOOK backend API.

```json
[
	{
		"message":"Module not found ./component/homee.js",
		"file":"./src/js/index.js",
        "username": "bobdylan",
		"origin":"\n @ ./src/js/index.js 9:0-44 11:36-40\n @ multi ./src/js/index.js",
		"name":"Module not found",
		"severity":900,
		"type":"module-not-found",
		"module":"./component/homee.js",
		"slug":"webpack_error",
		"details":"ModuleNotFoundError: Module not found: Error: Can't resolve './component/homee.js' in '/workspace/webpack-reporting-plugin/_sandbox/src/js'"

	}
]
```
