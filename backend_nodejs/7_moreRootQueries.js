const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/7_rootQueries')

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

// show all books data
{
  books{
    name
    genre
  }
}

// show all books data + its author
{
  books{
    name
    genre
    author{
      name
      age
    }
  }
}

// show all authors + his books
{
	authors{
    name
    age
    books {
      name
    }
  }
}

then press the play button
*/