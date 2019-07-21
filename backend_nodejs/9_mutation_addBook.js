const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/9_mutation2')

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
to use mutation (to add an author/book), insert on Graphiql :

mutation {
  addAuthor(name:"X", age:12){
    name
    age
  }
}

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