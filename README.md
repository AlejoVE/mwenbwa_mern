# Mwenbwa
Mwenbwa is a  WebApp that consist in an online IDLE Game, based in Liège. We developed this app as part of the web development training at [BeCode - Liège](https://becode.org/learn/junior-web-developer/).

- 	[Backend documentation](https://github.com/Maxime-Bott/mwenbwa_mern/tree/main/src/server)

## Features:

**A player can**:

- Buy a tree.
- Lock a tree.
- Leave comments on trees.
- See tree's owners history.
- See Gamelog.
- See Leaderboard.
- Set theme color.

***Every fifteen minutes in real life***, each player will receive an amount of leaves equals to the total of each of his trees.

***Every hour in real life***, each player loose half his leaves.
    

## Formulas:
- ***Calculate value of a tree***:  is the product of his diameter by his height, rounded to top. Example:  ```a tree of 9m of diameter and 17.3m of size will have a value of (9 × 17.3 = 155.7 ≈ 156) 156 leaves.```

- ***Bonues leaves***:``` [total leaves of players] / [amount of players]```
.
- ***Calculate price of tree if owned***: ```[value of the targetted tree] + ([value of all the targetted player's trees in 100m radius] × ([amount of trees in 100m radius] / [amount of tree of targetted player in 100m radius])) + [value of all the other players trees in 100m radius] - [value of all your tree in 100m radius]```
- ***To lock a tree***: ```[value of the tree] × 10 + ([value of all the trees in 100m radius] × [amount of players in 100m radius]) - ([value of all player's trees in 100m radius] / [amount of players in 100m radius])```

## Screenshots:
![Register form](https://user-images.githubusercontent.com/59319966/119865783-528e9e80-bf1c-11eb-9b53-377bb24cae6c.png "Register form")
![homepage](https://user-images.githubusercontent.com/59319966/119865774-4dc9ea80-bf1c-11eb-9ff5-7b344db9112e.png "homepage")
![homepage](https://user-images.githubusercontent.com/59319966/119865777-502c4480-bf1c-11eb-9057-c3255c48cc2c.png "homepage")
![Gamelog](https://user-images.githubusercontent.com/59319966/119865739-4571af80-bf1c-11eb-8dc7-1b09e77c1204.png "Gamelog")
![Leaderboard](https://user-images.githubusercontent.com/59319966/119865763-4b679080-bf1c-11eb-89e6-cebfe1a11aa2.png "Leaderboard")

## Technologies:
- HTML5
- CSS
- React
- Bootstrap
- NodeJS
- Express
- JWT
- Leaflet
- Redux
- MongoDB
- Heroku
- Docker
- Webpack

## Developers
- Maxime - [@Maxime-Bott](https://github.com/Maxime-Bott)
- Alejandro - [@AlejoVE](https://github.com/AlejoVE)
- Adriano - [@Ooverz](https://github.com/Ooverz)

## License
MIT licensed.