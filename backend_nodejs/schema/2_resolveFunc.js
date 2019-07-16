const graphql = require('graphql')
const _ = require('lodash')
const {GraphQLObjectType, GraphQLString, GraphQLSchema} = graphql

// dummy data (ceritanya database)
var books = [
    {name: 'Captain Tsubasa', genre: 'Fantasy', id:'1'},
    {name: 'Cardcaptor Sakura', genre: 'Fantasy', id:'2'},
    {name: 'Doraemon', genre: 'Sci-Fi', id:'3'},
]

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
                return _.find(books, {id: args.id})
            }
        }
    }
})

// export module
module.exports = new GraphQLSchema({
    query: RootQuery
})