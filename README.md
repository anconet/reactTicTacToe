# reactTicTacToe
Playing around with React and the standard Tic Tac Toe Example.

## My source code is \
```bash 
./src/app.js # My simple half complete tic tac toe game.
./src/app.css # My simple CSS file
```

## To creat an environment
```bash
# Pull the latest LTS version of Node
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
# Install the tools
sudo apt install -y nodejs 
sudo apt install -y npm

# Pull the repo
git clone <this repo>
cd my-app
# Remove all my files for the moment.
# We'll put them back in a moment.
rm -r *

# Create the project
npx create-react-app my-app

# Install my source code into the newly create app directory.
# There is proably a better way to do this...
git restore *

# Run the project
cd my-app
npm start

```