# redux-simple-starter
Simple React+Redux client with JWT authentication

### Prerequisits
You will need to have a JWT authentication server running in order to authenticate the redux client. 

#### JWT Authentication API 
Node: [jwt-auth-node](https://github.com/acolpitts/jwt-auth-node)

### Getting Started

##### Backend
```
> mkdir project-name
> cd project-name
> git clone https://github.com/acolpitts/jwt-auth-node.git server
> cd server
> npm install
> npm run start
```

##### Frontend
```
> cd project-name
> git clone https://github.com/acolpitts/redux-simple-starter.git client
> cd client
> npm install
> npm run dev
```