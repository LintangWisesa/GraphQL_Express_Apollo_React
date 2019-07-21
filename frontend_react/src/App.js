import React, {Component} from 'react';

// components
import BookList from './component/BookList'
// import AuthorList from './component/AuthorList'

// npm install apollo-boost react-apollo graphql
// https://www.apollographql.com/docs/react/essentials/get-started/
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo';

const client = new ApolloClient({
  uri: 'http://localhost:1234/graphql'  // backend server
})

class App extends Component{
  render(){
    return (

      <ApolloProvider client={client}>
      
        <div className="App">
          <h1>Frontend</h1>
          <BookList/>
          {/* <AuthorList/> */}
        </div>
      
      </ApolloProvider>
    );
  }
}

export default App;
