# GithubFinder Browser

A simple API (TypeScript) that returns Github user's favourite language. 

## Technologies used

- Axios to make HTTP requests to github api
- Typescript
- Node js
- Express

## Getting started

To run it locally 

```
cd  into the root folder and run npm i to install dependecies
run npm start to run the server with nodemon
```

```
The server runs on port 1337

```

```
To interact with the API you can use Postman

visit http://localhost:1337/graphql and run the follwing sending a GET request to the following endpoint :

 http://localhost:1337/api/languages/:userName

```
```
 Pass your github username as param
key: userName
value: <your githb username>
```

```
The Api returns the following object:

{
    "favLang": "<Favourite Language>",
    "numbOfRepo":  <Number of rpository containing that language>
}

```
