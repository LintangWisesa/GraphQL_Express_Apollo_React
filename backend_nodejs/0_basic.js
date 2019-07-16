const express = require('express')
const graphqlHTTP = require('express-graphql')
// $ npm i graphql express-graphql

const app = express()
app.use('/graphql', graphqlHTTP({

}))

app.listen(1234, ()=>{
    console.log('Listening for request on port 1234')
})

// try to open localhost:1234/graphql on your browser! 