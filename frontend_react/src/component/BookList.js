import React, {Component} from 'react';
import { gql } from 'apollo-boost'
import {graphql} from 'react-apollo'

// query graphql
const getBooksQuery = gql`
  {
    books{
      id
      name
      genre
    }
  }
`

class BookList extends Component {
  // console.log(this.props)

  displayBooks(){
    var data = this.props.data
    if(data.loading){
      return(
        <div>Loading...</div>
      )
    } else {
      return data.books.map(book => {
        return(
          <li key={book.id}>{book.id} {book.name} {book.genre}</li>
        )
      })
    }
  }

  render(){

    return (
        <div className="App">
          <h1>Daftar Buku</h1>
          <ul>
              {this.displayBooks()}
          </ul>
        </div>
    )
  }
}

export default graphql(getBooksQuery)(BookList);
