# Mwenbwa

Mwenbwa is a WebApp that consist in an online IDLE Game, based in Liège. We developed this app as part of the web development training at [BeCode - Liège](https://becode.org/learn/junior-web-developer/).

-       [Frontend](https://github.com/Maxime-Bott/mwenbwa_mern)

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

#### **Add an user**

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

<!-- #### **Update an user**

**`PUT /api/users/:id`**

##### **Request**

A json object for the user to update with any of `username`, `email`, `password`, `phone`, `role`.

```
{
  "phone": "+xx xxx xx xx xx",
  "role": "teacher"
}
```

##### **Response `200`**

A json object for the updated user with `msg`.

```
{
  "msg": "User updated successfully"
}
``` -->

<!-- #### For users with role of type `admin`: Get a list of all the users -->

<!-- TODO: m leaderboard -gamelog and trees endpoints documentation  -->

#### **Update a classroom**

**`PUT /api/classrooms/:id`**

##### **Request**

A json object for the classroom to update with any of `title`, `description`, `teachers_usernames`, `students_usernames` and `msgs`.

```
{
  "title": "Class 9",
  "description": "My new description"
}
```

##### **Response `200`**

A json object for the updated classroom with `msg`.

```
{
 "msg": "Classroom updated successfully"
}
```

#### **Delete a classroom**

**`DELETE /api/classrooms/:id`**

##### **Response `200`**

A json object for the deleted meeting with `msg`.

```
{
  "msg": "Classroom deleted successfully"
}
```

#### **For users with role `admin`: Get a list of all the classrooms**

**`GET /api/classrooms/`**

##### **Response `200`**

A json object with and an array of `classrooms`.

```
{
  "classrooms": [
          {
          "id": "5f9ed5ce47c42738d03d178d",
          "title": "Class 8",
          "description": "My class 8",
        },
        {
          "id": "5f9ed5ce47c4558d03d178d",
          "title": "Class 10",
          "description": "My new description",

        },
        {
          "id": "5f9ed5ce47c42738d03d178d",
          "title": "Class 9",
          "description": "My new description"
        }
      ]
}

```

#### **For users with role `admin`: Get details of a classroom**

**`GET /api/classrooms/:id`**

##### **Response `200`**

A json object with the details of the classroom with `title`, `description`, `teachers_ids`, `students_ids` and`messages`.

```
{
  "classroom":
    {
      "title": "Class 8",
      "description": "My class 8",
      "teachers_ids": ["teacher1", "teacher2"],
      "students_ids": ["fisherAi", "BoydH", "jaoBel"],
      "messages": [
        {
          title: "first msg",
          description: "This is the fist msg for this class",
          author_username: "teacher1"
        }
      ],
    }
}
```
