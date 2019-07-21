const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/10_graphQLnonNull')
const cors = require('cors')

const app = express()

// allow cross origin request
app.use(cors()) 
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
now to add an author/book, data cannot be blank, insert on Graphiql :

mutation {
  addBook(){
    name
  }
}

it will give an error, because we dont insert name, genre & authorId!

mutation {
  addBook(name:"X", genre:"Y", authorId: 1){
    name
    genre
  }
}

then press the play button
to check the data has been added or not, insert

{
  authors{
    name
  }
}

*/