# reactTicTacToe
Playing around with React and the standard Tic Tac Toe Example.

## My source code is in
```bash 
./src/app.js # My simple half complete tic tac toe game.
```

## To creat an environment
```bash
# Pull the latest LTS version of Node
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
# Install the tools
sudo apt install -y nodejs 
sudo apt install -y npm

# Create the project
npx create-react-app my-app

# Install my source code into the newly create app directory.
cp ./src/* ./my-app/src/

# Run the project
cd my-app
npm start

```