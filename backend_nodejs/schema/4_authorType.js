const graphql = require('graphql')
const _ = require('lodash')
const {
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
} = graphql

// dummy data (ceritanya database)
var books = [
    {name: 'Captain Tsubasa', genre: 'Fantasy', id:'1'},
    {name: 'Cardcaptor Sakura', genre: 'Fantasy', id:'2'},
    {name: 'Doraemon', genre: 'Sci-Fi', id:'3'},
]

var authors = [
    {name: 'Yoichi Takahashi', age:78, id:'1'},
    {name: 'CLAMP', age:88, id:'2'},
    {name: 'Fujiko F. Fujio', age:98, id:'3'},
]

// create schema
const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: ()=>({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        genre: {type: GraphQLString}
    })
})

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: ()=>({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLInt}
    })
})

// defining root query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                // code to get data from database
                return _.find(books, {id: args.id})
            }
        },
        author: {
            type: AuthorType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                return _.find(authors, {id: args.id})
            }
        }
    }
})

// export module
module.exports = new GraphQLSchema({
    query: RootQuery
})