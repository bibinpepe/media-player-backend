//import json-server library in index.js

const jsonserver = require('json-server')

// create Server using json server library

const mediaplayerserver = jsonserver.create()

// create path to db.json file

const router = jsonserver.router('db.json')

//middlewares to convert js to json

const middlewarer = jsonserver.defaults()

//connect/use middleware and router

mediaplayerserver.use(middlewarer)
mediaplayerserver.use(router)

// setup port for server (json server will also run on port3000)

const port = 5000 || process.env.PORT

// to listern for resolving requests

mediaplayerserver.listen(port,()=>{
    console.log(`mediaplayerserver started at ${port} and fetch request`);
})
