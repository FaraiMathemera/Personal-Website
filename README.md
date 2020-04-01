# ptemplate
[![Dependencies](https://david-dm.org/nethruster/ptemplate.svg)](https://david-dm.org/nethruster/ptemplate) [![DevDependencies](https://david-dm.org/nethruster/ptemplate/dev-status.svg)](https://david-dm.org/nethruster/ptemplate?type=dev)

A personal website inspired by nethruster.


Example screenshot
![alt text](https://github.com/nethruster/ptemplate/blob/master/src/assets/icons/meta-img.png "Home screenshot")

### Requirements
- You need to have `yarn` (**recommended**) or `npm` installed.

### Useful commands

#### NPM
- `npm install` - Install and update dependencies.
- `npm run dev` - Launch local web server with hot compiling. Ideal to work on the project easily.
- `npm run build` - Build the website in production mode to the `dist/` folder.
- `npm run build-gz` - Builds a gzip compressed version of the built app in the dist/ folder.

## Customization

Note: To apply all of these changes you must rebuild the app.

### If you're not hosting the app at the root of the server
Go to `webpack.config.js` and change the `publicPath` key inside of the `output` part of the config


### Avatar
You can replace it at `src/assets/`. If the name or the extension is different to "avatar.svg", you need to modify it in `src/config.js` and `src/assets-imports.js`.


### ReCATPCHA public key
Change it in `src/config.js`.

