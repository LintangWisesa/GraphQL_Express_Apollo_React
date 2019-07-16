const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/3_graphQLid')

const app = express()
app.use('/graphql', graphqlHTTP({
    // create graphql schema => create /schema/schema.js!
    schema: schema,  // or just type: schema if similar
    graphiql: true   // graphiql tool on browser
}))

app.listen(1234, ()=>{
    console.log('Listening for request on port 1234')
})

// =========================================
/*
open localhost:1234/graphql on browser!
insert on Graphiql :

{
    book(id:1){       // can be string or int!
        name
        genre
        id
    }
}

then press the play button
*/