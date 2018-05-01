# redux-simple-starter
Simple React+Redux client with JWT authentication

### Prerequisits
You will need to have a JWT authentication api server running that returns the correct payload in order to authenticate the redux client. 

#### JWT Authentication API Server
**Node:** [jwt-auth-node](https://github.com/acolpitts/jwt-auth-node)  
**Rails:** [jwt-auth-rails](https://github.com/acolpitts/jwt-auth-rails)

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