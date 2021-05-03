# mwenbwa

> A web-based game of conquests… and trees :deciduous_tree:

* * *

- Type of challenge: **learning Node - MongoDB / consolidating React**
- Repository : **`mwenbwa`**
- Duration : **4 weeks**
- Deadline : **31/05/2021 17:00**
- Deployment method : **Free to choose**
- Team : **Duo** or **Trio**
- Project submission : email to client

## Introduction

In order to make Liège people aware of the environment of their town, the City of Liège contact your team of developpers to create a game based on trees...

Based on [external data](https://data.gov.be/en/node/48556), you will create a WebApp consisting of a REST-like API (back-end) and a React SPA (front-end). This WebApp will consist be an online [IDLE Game](https://en.wikipedia.org/wiki/Incremental_game), based in Liège.

## Mwenbwa - game rules

In a map of Liège, there will be trees. Each tree as a _value_ (which is the product of his _diameter_ by his _height_, *rounded to top*). 

> This value will use the "leaf" as unit. For instance, a tree of 9m of diameter and 17.3m of size will have a value of (`9 × 17.3 = 155.7 ≈ 156`) **156 leaves**.

When a player enter the game, he needs to create an account, will choose a color, and will receive three random, *free* trees (and some bonus leaves, following the formula: `[total leaves of players] / [amount of players]`).  
Every fifteen minutes **in real life**, each player will receive an amount of leaves equals to the total of each of his trees.  
Every hour **in real life**, each player loose half his leaves.

> 👉 It can be useful to change these values during the development. Be sure they are easy to change and adapt.

Whenever he wants, a player can _buy_ a tree. 

- If the tree is *free*, the _value_ of the tree is its price. When a player buy a *free tree*, a [random name](https://www.npmjs.com/package/fantasy-name-generator) is affected to that tree.
- If the tree belongs to another player, the price is computed with the following formula: `[value of the targetted tree] + ([value of all the targetted player's trees in 100m radius] × ([amount of trees in 100m radius] / [amount of tree of targetted player in 100m radius])) + [value of all the other players trees in 100m radius] - [value of all your tree in 100m radius]`.

Whenever he wants, a player can *lock* a tree by paying the following formula: `[value of the tree] × 10 + ([value of all the trees in 100m radius] × [amount of players in 100m radius]) - ([value of all player's trees in 100m radius] / [amount of players in 100m radius])`. A *locked tree* can't be buy by another player.

At anytime, a player can check the *leaderboard*, to see each player score, amount of trees, etc.  
At anytime, a player can consult the *gamelog*, which record all actions in the game.

When clicking on a tree, a player can see its value, name, owner, history of buys, and a link to the relative wikipedia article for this tree's species (if applicable). Any player can also leave a comment on a tree.

## Implementation

There's a lot of things to do in this project. Besides some constraints listed bellow, you're free to use anything you want for this project.

### Data

You can find the data of the trees in the JSON file stored in the `data` folder. These data came from the [Belgium OpenData Initiative website](https://data.gov.be).

You will need to convert and store the data into a MongoDB database. Be sure to design your schema regarding the rules of the game.

### Interactive map

Of course, you'll need to use an interactive map to show all the trees. 

> 👉 **OpenStreetMap** is actually the best choice, you will have to use it with **Leaflet**.

### Mockup & Design

We didn't made any mockup nor design for this project, the first task of your group will be their conception.

However, you can ask to your coach to show you an example. 

### Technical Stack

You actually have a **technical stack** to follow.

#### Back-end

A `REST-like API` using:

- **Node.JS**
- **MongoDB**

#### Front-end

A `Single Page App` using:

- **React**
- **Leaflet**

#### Toolchain / Dev Env

The project is divided in two distinct parts: back-end and front-end. We prepared a starter with a premade dev environment that can be used again for other following projects. 

##### Environment

The project is provided with a `docker-compose.yml` and its documentation in markdown: [`docker-readme.md`](./docker-readme.md).
The whole project's code will be written in `src`. The compiling tools are configurated to push the compilated files in the `bin` folder.

> ⚠️ **WARNING:** Never **ever** put your modifications to the project in the bin's files ! He will be replaced by a new bin folder at your next compilation!

##### Back-end

Back-end part will be compiled with [BabelJS](https://babeljs.io). The back-end's code is located in  `src/server`.

We prepared for you a little snippet of functionnal code that configure your server **express**, an API route : `GET /hello` and the middleware *middleware* **static** to display de client's files.

You are free to use this snippet or rewrite it. 
 
###### Compilation

There is two compilation's options :

- `npm run build:server` (compile your code)
- `npm run work:server` (compile then observe your files and recompile if you make any modifications)
> ☝️ **NOTE:** Do not forget to run your docker-compose before building the back-end part.

##### Front-end

For the front-end part your code will be compiled/packaged with [Webpack](https://webpack.js.org/). The code is written in `src/client`.

> ☝️ **NOTE:** Webpack is a powerfull tool that can be complex to learn. We suggest you to take some time to learn this tool during your "pâturages" and maybe provide your collegues a workshop about it.

Like the back-end part, we prepared a little snippet of code displaying a React component with the text "*Hello, World*".
 
###### Compilation

To compile the front-end code there is two options:

- `npm run build:client` (compile your code)
- `npm run work:client` (compile then observe your files to recompile them in case of any modifications)

##### Prettier & ESLint

The project is configured to use  [Prettier](https://prettier.io) & [ESLint](https://eslint.org).

###### Compilation

To check your files with ESLint and Prettier you can also run this command:  `npm run lint`.

###### Hooks git

The project is also configured with a *hook* de **precommit** for git: when you will try to commit your files, ESLint and Prettier will be executed and, in case of error, the commit will be canceled to let you correct your mistakes. This way you will have the certitude of commiting files exempt of potential problems. 

#### Deployment

We are expecting a **functionnal** and *deployed* project.
One of the solutions is to use [**Heroku**](https://www.heroku.com). To host your Database, Heroku is working with [**mLab**](https://mlab.com).

### Client-oriented
 
Every Thursday afternoon, the client is expecting an e-mail which explains the evolution of the project. 
You can write @ nico@becode.org and nick@becode.org, we will forward to Raymond Bush, a civil servant of the City of Liège. 

* * *

## Have fun and wood work


![trees](https://media.giphy.com/media/RJD7cICGxN5nsIBLCo/giphy.gif)