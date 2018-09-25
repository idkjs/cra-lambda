import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";
const client = new ApolloClient({
  uri: "/.netlify/functions/graphql"
});

// Replace the previous LambdaDemo with the code below:
const LambdaDemo = () => (
  <ApolloProvider client={client}>
    <Query
      query={gql`
        {
          hello
          dogPhotoUrl
        }
      `}
    >
      {({ data }) => (
        <div>
          A greeting from the server: {data.hello}
          <br />
          <img src={data.dogPhotoUrl} />
        </div>
      )}
    </Query>
  </ApolloProvider>
);
// class LambdaDemo extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {loading: false, msg: null};
//   }

//   handleClick = (e) => {
//     e.preventDefault();

//     this.setState({loading: true});
//     fetch('/.netlify/functions/hello')
//       .then(response => response.json())
//       .then(json => this.setState({loading: false, msg: json.msg}));
//   }

//   render() {
//     const {loading, msg} = this.state;

//     return <p>
//       <button onClick={this.handleClick}>{loading ? 'Loading...' : 'Call Lambda'}</button><br/>
//       <span>{msg}</span>
//     </p>
//   }
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <LambdaDemo />
      </div>
    );
  }
}

export default App;
