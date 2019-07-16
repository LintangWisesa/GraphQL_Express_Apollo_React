const graphql = require('graphql')
const {GraphQLObjectType, GraphQLString, GraphQLSchema} = graphql

// create schema
const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: ()=>({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        genre: {type: GraphQLString}
    })
})

// defining root query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: {id: {type: GraphQLString}},
            resolve(parent, args){
                // code to get data from database
            }
        }
    }
})

// export module
module.exports = new GraphQLSchema({
    query: RootQuery
})