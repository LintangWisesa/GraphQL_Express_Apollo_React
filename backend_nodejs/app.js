const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/2_resolveFunc')

const app = express()
app.use('/graphql', graphqlHTTP({
    // create graphql schema => create /schema/schema.js!
    schema: schema  // or just type: schema if similar
}))

app.listen(1234, ()=>{
    console.log('Listening for request on port 1234')
})