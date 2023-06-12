# reactTicTacToe
Playing around with React and the standard Tic Tac Toe Example.
---
## Todo Items
- Need practice dyanmically adding cards.
- Create a backend (call the API?)
    - [Video](https://www.youtube.com/watch?v=ACI8EDbaXzo)
        - He's using 
            - Node for API
                - Seems to be using [Express]() for the piping.
            - A Python Server for serving up the front end using React.
        - Part of a larger [Playlist](https://www.youtube.com/playlist?list=PL_kr51suci7XVVw4SJLZ0QQBAsL2K8Opy) that might be good.
    - [Smoljames Video](https://www.youtube.com/watch?v=5TxF9PQaq4U)
        - Creats a simple server

    - Review Express
- Round off the corners on my cards!!!
- Read more about formatting.
    - https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Introduction
- Find some better widgets with some animations!
    - Continue looking through react supported HTMl Components
        - https://react.dev/reference/react-dom/components
    

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