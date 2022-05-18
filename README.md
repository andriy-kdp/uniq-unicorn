# Requirements

- `node 16.15+`
- `npm 8.5.5+`

# Install node & NPM

### Install node via NVM (recommended):

- Linux/MacOS - [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm)
- Windows - https://github.com/coreybutler/nvm-windows

##### After nvm installation, restart your terminal, and (for all systems):

- `nvm install 16.15`
- `nvm use 16.15`
- check the versions of installed packages: `node -v; npm -v`

### Or download package for your system:

- download latest LTS version of node [https://nodejs.org/en/download/](nodhttps://nodejs.org/en/download)

## Starting project

Open terminal/poweshell inside a project root and install the dependencies: `npm i`  
After installation you can use nexc commands:

- `npm start` - start project with ENV=production
- `npm run dev` - start project with ENV=development
- `npm run build` - to bulld static project
