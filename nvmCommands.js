// check version
node -v || node --version

// list locally installed versions of node
nvm ls

// list remove available versions of node
nvm ls-remote

// install specific version of node
nvm install 18.16.1

// set default version of node
nvm alias default 18.16.1

// switch version of node
nvm use 20.5.1

// install latest LTS version of node (Long Term Support)
nvm install --lts

// install latest stable version of node
nvm install stable

//////////// For Basic use //////////// 

// check version
node -v || node --version

// list installed versions of node (via nvm)
nvm ls

// To list available remote versions on Windows 10 you can type
nvm list available

// install a specific version of node
nvm install 6.9.2

// switch version of node
nvm use 6.9.1