# Mwenbwa

Mwenbwa is a WebApp that consist in an online IDLE Game, based in Liège. We developed this app as part of the web development training at [BeCode - Liège](https://becode.org/learn/junior-web-developer/).

-   [Front end](https://github.com/Maxime-Bott/mwenbwa_mern)

# **Backend architecture**

## **Database design**

![Database structure](https://user-images.githubusercontent.com/59319966/119871247-8cfb3a00-bf22-11eb-9609-c1c5c3e08fd6.png "Database structure")

### **Create and/or configure environement variables**

-   Create a .env file at the root of your project folder
-   Replace all variables noted with $ below, and save it to the .env file

```
PORT=$port_number
DB_USER=$your_user
DB_PASS=$your_password
DB_CONNECT=mongodb://localhost:27017/$db_name
JWTSECRET_SEED=$long_random_characters
REACT_APP_API_URL=$http://localhost:12345/
```

### **API endpoints**

---

**URL** https://mwenbwa-jepsens-4-27.herokuapp.com/

---

#### **Register an user**

**`POST /api/users//signup`**

##### **Request**

A json object for the user to register with **`userName`**, **`email`** and **`password`**.

```
{
  "userName": "alejo",
  "email": "alejo@example.com",
  "password": "really-strong-password",
}
```

##### **Response `201`**

A json object for the registered user with `token`, `userName` and `uid`.

```
{
  {
  "userName": "alejo",
  "uid": "60ae0d16c3d2f719c4624e65"
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1CJlbWFpbCI6ImphY2tAZXc2VybmFtZSI6ImphY2siLhhbXBsZS5jb20iLCJpYXQiOjE1OTg2MTc2MTksImV4cCI6MTYwMTIwOTYxOX0.s85ti_rzBVHJ6Gt1MY7seYfdcjB6sR939p2CexA40gI"
}
}
```

#### **Log in**

**`POST /api/users/login`**

##### **Request**

A json object for the account to login with either **`userName`** and **`password`** .

```
{
  "userName": "larizaak",
  "password": "password"
}
```
##### \***\*Response `200`\*\***

A json object for the logged in account with `userName`, `token`, `uid`, `leaves`, `trees` and `color`.

```
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1CJlbWFpbCI6ImphY2tAZXc2VybmFtZSI6ImphY2siLhhbXBsZS5jb20iLCJpYXQiOjE1OTg2MTc2MTksImV4cCI6MTYwMTIwOTYxOX0.s85ti_rzBVHJ6Gt1MY7seYfdcjB6sR939p2CexA40gI",
  "userName": "alejo",
  "uid": "60ae0d16c3d2f719c4624e65",
  "leaves": 420,
  "trees": 5,
  "color": "blue"

}
```
#### **Leaderboard**

**`GET /api/users/leaderboard`**

##### \***\*Response `200`\*\***

A json object with an array of  10  `users`, each one with `_id`, `userName` and `treesCount`.

```
{  
  "users": [
    {
      "_id": "60af497de73f460004738a7e",
      "userName": "_-nick-_",
      "treesCount": 249
    },
    {
      "_id": "60ae0d16c3d2f719c4624e65",
      "userName": "maxime",
      "treesCount": 147
    },
    {
      "_id": "60af4b5ee73f460004738aaa",
      "userName": "nana",
      "treesCount": 115
    },
    {
      "_id": "60af46bbe73f460004738a47",
      "userName": "jimmy",
      "treesCount": 107
    },
    {
      "_id": "60ae6ddaa3e9450004e1cfb7",
      "userName": "alejo",
      "treesCount": 56
    },
    {
      "_id": "60ae8f84d282ea00043dfce7",
      "userName": "fickdich",
      "treesCount": 53
    },
    {
      "_id": "60af4765e73f460004738a5f",
      "userName": "josue",
      "treesCount": 36
    },
    {
      "_id": "60ae9223d282ea00043dfd08",
      "userName": "charlotte",
      "treesCount": 21
    },
    {
      "_id": "60ae7e7a3daf6700049e6f7d",
      "userName": "roxell",
      "treesCount": 18
    },
    {
      "_id": "60af4935e73f460004738a75",
      "userName": "tanya",
      "treesCount": 12
    }
  ]
}
```

#### **Gamelog**

**`GET /api/users/gamelog`**

##### \***\*Response `200`\*\***

A json object with an array of  10  `actions`, each one with `_id` and `actions`.

```
{
  "actions": [
    {
      "_id": "60b0c1d6c691652c6d26049a",
      "actions": "maxime is connected 😎"
    },
    {
      "_id": "60b0c19284f4da0004e45bcf",
      "actions": "maxime bought a tree 🤑"
    },
    {
      "_id": "60b0c18084f4da0004e45bce",
      "actions": "maxime bought a tree 🤑"
    },
    {
      "_id": "60b0c17c84f4da0004e45bcd",
      "actions": "maxime bought a tree 🤑"
    },
    {
      "_id": "60b0c17b84f4da0004e45bcc",
      "actions": "maxime bought a tree 🤑"
    },
    {
      "_id": "60b0c17884f4da0004e45bcb",
      "actions": "maxime bought a tree 🤑"
    },
    {
      "_id": "60b0c17584f4da0004e45bca",
      "actions": "maxime bought a tree 🤑"
    },
    {
      "_id": "60b0c17384f4da0004e45bc9",
      "actions": "maxime bought a tree 🤑"
    },
    {
      "_id": "60b0c17184f4da0004e45bc8",
      "actions": "maxime bought a tree 🤑"
    },
    {
      "_id": "60b0c16e84f4da0004e45bc7",
      "actions": "maxime bought a tree 🤑"
    }
  ]
}
```
#### **Get a tree**

**`GET /api/trees/:id`**

##### **Response `200`**

A json object with the details of `tree`, with `history`, `comments`, `_id`,`hauteur_totale`, `nom_complet`, `diametre_cime`, `link`, `value`, `owner`, `name`, 
`locked`, `price`,`lat`, `lon` and `treesInRadius`.

```
{
  "tree": {
    "history": [
      {
        "userName": "alejo",
        "date": "2021-05-28T13:19:32.063Z"
      }
    ],
    "comments": [],
    "_id": "60ae0c88efd0a43ef0b09aa2",
    "hauteur_totale": 7.5,
    "nom_complet": "Sophora japonica",
    "diametre_cime": 4,
    "link": "https://en.wikipedia.org/wiki/Sophora_japonica",
    "value": 30,
    "owner": {
      "_id": "60ae6ddaa3e9450004e1cfb7",
      "userName": "alejo"
    },
    "name": "Ciredsil",
    "locked": false,
    "price": 30,
    "lat": 50.62235,
    "lon": 5.584901
  },
  "treesInRadius": [...trees in 100m radius]
}

```


#### **Buy a tree**

**`PUT /api/trees/buy/:id`**

A json object with  `price`.

```
{
  "price": 32,
}
```

##### **Response `200`**

A json object with `message`, `ok` and the details of the `tree`.

```
{
  "message": "You have a new tree",
  "ok": true,
  "tree": {
    "history": [
      {
        "userName": "alejo",
        "date": "2021-05-28T13:19:32.063Z"
      }
    ],
    "comments": [],
    "_id": "60ae0c88efd0a43ef0b09aa2",
    "hauteur_totale": 7.5,
    "nom_complet": "Sophora japonica",
    "diametre_cime": 4,
    "link": "https://en.wikipedia.org/wiki/Sophora_japonica",
    "value": 30,
    "owner": "60ae6ddaa3e9450004e1cfb7",
    "name": "Ciredsil",
    "locked": false,
    "price": 30,
    "lat": 50.62235,
    "lon": 5.584901
  }
}
```
#### **Lock a tree**

**`PUT /api/trees/lock/:id`**

A json object with  `price`.

```
{
  "price": 323,
}
```
##### **Response `200`**

A json object with `msg`, `ok` and the details of the `tree`.

```
{
  "msg": "The tree is locked.",
  "ok": true,
  "tree": {
    "history": [
      {
        "userName": "alejo",
        "date": "2021-05-28T13:19:32.063Z"
      }
    ],
    "comments": [],
    "_id": "60ae0c88efd0a43ef0b09aa2",
    "hauteur_totale": 7.5,
    "nom_complet": "Sophora japonica",
    "diametre_cime": 4,
    "link": "https://en.wikipedia.org/wiki/Sophora_japonica",
    "value": 30,
    "owner": "60ae6ddaa3e9450004e1cfb7",
    "name": "Ciredsil",
    "locked": true,
    "price": 30,
    "lat": 50.62235,
    "lon": 5.584901
  }
}
```

#### **Add comment to tree**

**`POST /api/trees/:id/comments`**

A json object with `message`.

```
{
  "message": "this is my comment"
}
```

##### **Response `200`**

A json object with `message` and `ok`.

```
{
  "message": "Comment added.",
  "ok" true
}

```

