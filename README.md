# reactTicTacToe
Playing around with React and the standard Tic Tac Toe Example.
---
## Todo Items
- Need practice dyanmically adding cards.
- Create a backend (called the API?)
    - [Fredrik Oseberg](https://www.youtube.com/watch?v=ACI8EDbaXzo)
        - Kind of building from scratch a frontend-backend.
        - He's using 
            - Node for API
                - Seems to be using [Express]() for the piping.
            - A Python Server for serving up the front end
                - I haven't see react yet.
        - Part of a larger [Playlist](https://www.youtube.com/playlist?list=PL_kr51suci7XVVw4SJLZ0QQBAsL2K8Opy) that might be good.
    - [Smoljames Video](https://www.youtube.com/watch?v=5TxF9PQaq4U)
        - Creats a simple server
    - [codedamn.com](https://codedamn.com/news/reactjs/how-to-connect-react-with-node-js)
        - Great article creating
            - Node/React FrontEnd on port 3000.
                - Uses useEffect from React 
                - Uses fetch() built in JS API
            - Node/Express BackEnd on port 8000.
                - Uses Express commands
    - What is useEffect
        - [useEffect](https://react.dev/reference/react/useEffect#fetching-data-with-effects) on the react pages.
    - Review Express
- Round off the corners on my cards!!!
- Read more about formatting.
    - https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Introduction
- Find some better widgets with some animations!
    - Continue looking through react supported HTMl Components
        - https://react.dev/reference/react-dom/components
    
## Reminders
- Front End
    - Node.js with React Framework with
        - Axios for making HTTP request to the backend.
    - May need to start looking at Next.js or Vite.js as create-react-app is no longer supported.
- Back End
    - Node.js with 
        - Express for receiving and routing HTTPs.
        - CORS is nice for allowing access across ports.
        - Nodemon is nice for auto restarting the server when you change code.

## My source code is \
```bash 
# Front End
.my-app/src/app.js # My simple half complete tic tac toe game.
.my-app/src/app.css # My simple CSS file

# Back End API Server
./server
```

## To creat the dev environment
```bash
# Pull the latest LTS version of Node
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
# Install the tools
sudo apt install -y nodejs 
sudo apt install -y npm
```
## Creat the Front End

```bash
# Pull the repo
git clone <this repo>
cd my-app
# Remove all my files for the moment.
# We'll put them back in a moment.
rm -r *

# Create the project
npx create-react-app my-app
npm install axios

# Install my source code into the newly create app directory.
# There is proably a better way to do this...
git restore *

# Run the project
cd my-app
npm start

```
---
## Server Side setup
Express.js on Node.js
```bash
# Create a new directory
mkdir serverSide
cd serverside
# Create the Server
npm init -y
# Install the express.js framework
npm install express
npm install cors # Allows cross origin resrource sharing
npm install nodemon --save-dev # Monitors code for changes and reloads them.
```
```bash
touch package.json
#add the below scripts
```
```json 
"scripts":{
    "start": "node server.js",
    "dev": "nodemon" "server.js"
    }
```
Reinstalling the my code
```bash
# My code is
server/server.js
# This doesn't conflict at with any of the install for now.
```
```bash
# Run the dev server. Nodemon will auto restart the server if you make code changes. Kind of nice.
npm run dev 
#Or just run a server
npm run start
```

# Thinking about the Data model
Display is Child (Y) by Parent (X).

methods
- Create a new CardClass
    - Release
    - Feature
    - Study
    - Question
    - NUDDs
    - Issues
- Create a new CardInstance
    - Generate new UID
    - Pass Type
- Create a new workflow

CardClasses can contain
- List of Parent
- List of Children
- UID
- TItle
- Discription
- Release
- widget: Converation
- widget: workflow
- Widget: History
