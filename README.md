# Concord

This project was made with Electron, React and Typescript. Our purpose is to change the UI to a more pleasant and functional one. Also we want to turn all beta features public for users (optional feature).

<hr>

## Downloading

```
git clone https://github.com/Vordlex/Concord
cd Concord
npm install
```
## Setup
Create a file named `.env` in concord folder
.env content
```
REACT_APP_DISCORD_TOKEN="{YOUR DISCORD TOKEN HERE}"
```

**How can I get my discord token ?**

1. On browser or discord-ptb, press `ctrl + shift + i`
2. Go to the network tab
<img src=https://cdn.discordapp.com/attachments/1046239786106638417/1048675106999763064/image.png >

A big part of the requests has a header named Authorization, this is your discord token

<img src=https://cdn.discordapp.com/attachments/1046239786106638417/1048676324908220526/image.png >

after this, you can execute the scripts

## Scripts ( yarn / npm )

#### `yarn electron dev`
#### `npm run electron:dev`

Runs the Electron app in the development mode.

The Electron app will reload if you make edits in the `electron` directory.<br>

#### `yarn electron:build`
#### `npm run electron:build`

Builds the Electron app package for production to the `dist` folder.

<hr>

## Many thanks to the following articles!

- [⚡️ From React to an Electron app ready for production](https://medium.com/@kitze/%EF%B8%8F-from-react-to-an-electron-app-ready-for-production-a0468ecb1da3)
- [How to build an Electron app using Create React App and Electron Builder](https://www.codementor.io/randyfindley/how-to-build-an-electron-app-using-create-react-app-and-electron-builder-ss1k0sfer)
- [Application entry file reset to default (react-cra detected and config changed incorrectly)](https://github.com/electron-userland/electron-builder/issues/2030)
- [Serving the Same Build from Different Paths](https://create-react-app.dev/docs/deployment#serving-the-same-build-from-different-paths)

## And the sample used to make this project

- [yhirose / react-typescript-electron-sample-with-create-react-app-and-electron-builder](https://github.com/yhirose/react-typescript-electron-sample-with-create-react-app-and-electron-builder)
