# Uber Project Documentation

Welcome to the Uber project's documentation. This file contains all the required documentation for the backend API endpoints.

---

## Accept Documentation

Click the **Accept** button below if you've read and agree to the contents of the API documentation.

<form action="#" method="post">
  <input type="submit" value="Accept">
</form>

---

## Backend API Endpoints

### /users/register Endpoint

#### Description

This endpoint allows a new user to register. It creates a user by saving the provided data into the database and returns an authentication token on successful registration.

#### HTTP Method

`POST`

#### Endpoint URL

`/users/register`

#### Request Body

The request body must be in JSON format and include the following fields:

- **fullname** (object): Contains the user's name details.
  - **firstname** (string, required): Must be at least 3 characters long.
  - **lastname** (string, optional): If provided, must be at least 3 characters long.
- **email** (string, required): Must be a valid email address and at least 5 characters long.
- **password** (string, required): Must be at least 6 characters long.

**Example Request:**

`````json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securePass123"
}

...existing content...

## Backend API Endpoints

### /users/register Endpoint

<!-- ...existing register documentation... -->

### /users/login Endpoint

#### Description
This endpoint allows an existing user to login. It validates the provided credentials and returns an authentication token along with the user object upon successful authentication.

#### HTTP Method
`POST`

#### Endpoint URL
`/users/login`

#### Request Body
The request body must be in JSON format and include the following fields:

- **email** (string, required): Must be a valid email address.
- **password** (string, required): Must be at least 6 characters long.

**Example Request:**
````json
{
  "email": "john.doe@example.com",
  "password": "securePass123"
}
`````
...existing content...

### /users/profile Endpoint

#### Description
This endpoint retrieves the profile of the authenticated user.

#### HTTP Method
`GET`

#### Endpoint URL
`/users/profile`

#### Headers
- **Authorization:** Bearer token via cookie or Authorization header.

#### Success Response
- **Status:** 200 OK  
- **Response Body:**
````json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  // ...other user fields...
}

### /users/logout Endpoint

#### Description
This endpoint logs out the authenticated user by clearing the authentication token cookie and blacklisting the token to prevent further use.

#### HTTP Method
`GET`

#### Endpoint URL
`/users/logout`

#### Headers
- **Authorization:** Bearer token provided via cookie or the Authorization header.

#### Success Response
- **Status:** 200 OK  
- **Response Body:**
````json
{
  "message": "Logged out"
}
