const graphql = require('graphql')
const _ = require('lodash')
const {
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList
} = graphql

// add some books
var books = [
    {name: 'Captain Tsubasa', genre: 'Sport', id:'1', authorId:'1'},
    {name: 'Cardcaptor Sakura', genre: 'Fantasy', id:'2', authorId:'2'},
    {name: 'Doraemon', genre: 'Sci-Fi', id:'3', authorId:'3'},
    {name: 'Obake No Q Taro', genre: 'Sci-Fi', id:'4', authorId:'3'},
    {name: 'Hungry Heart: Wild Striker', genre: 'Sport', id:'5', authorId:'1'},
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
        genre: {type: GraphQLString},
        // add data with relation to another type
        author: {
            type: AuthorType,
            resolve(parent, args){
                console.log(parent)
                return _.find(authors, {id: parent.authorId})
            }
        }
    })
})

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: ()=>({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLInt},
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args){
                return _.filter(books, {authorId: parent.id})
            }
        }
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
        },
        // add root query to get all books!
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args){
                return books
            }
        },
        // add root query to get all authors!
        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parent, args){
                return authors
            }
        }
    }
})

// export module
module.exports = new GraphQLSchema({
    query: RootQuery
})