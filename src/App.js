import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {

  state = {
    stocks: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
      .then(resp => resp.json())
      .then(stocks => this.setState({ stocks }))
  }

  render() {
    return (
      <div>
        <Header/>
        <MainContainer
          stocks={this.state.stocks}  
        />
      </div>
    );
  }
}

export default App;
