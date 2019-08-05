import React, {Component} from 'react';
import { gql } from 'apollo-boost'
import {graphql} from 'react-apollo'

// query graphql
const getAuthorsQuery = gql`
  {
    authors {
      id
      name
    }
  }
`

class AddBook extends Component {

    displayAuthors(){
        var data = this.props.data
        if (data.loading){
            return (
                <option disabled>Loading...</option>
            )
        } else {
            return data.authors.map(author => {
                return (
                    <option key={author.id} value={author.id}>{author.name}</option>
                )
            })
        }
    }

    render(){

        return (
            <div className="App">
                <form id='add-book'>

                    <div className='field'>
                        <label>Book name:</label>
                        <input type='text'/>
                    </div>
                    
                    <div className='field'>
                        <label>Book genre:</label>
                        <input type='text'/>
                    </div>

                    <div className='field'>
                        <label>Author:</label>
                        <select>
                            <option>Select author</option>
                            {this.displayAuthors()}
                        </select>
                    </div>

                    <button>Add</button>

                </form>
            </div>
        )
    }
}

export default graphql(getAuthorsQuery)(AddBook);