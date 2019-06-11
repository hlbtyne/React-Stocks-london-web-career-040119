import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    boughtStocks: []
  }

  buyStock = (stock) => {
    this.setState({ boughtStocks: [...this.state.boughtStocks, stock]})
  }

  sellStock = (stock) => {
    const newArray = [...this.state.boughtStocks].filter(soldStock => stock != soldStock)
    this.setState({ boughtStocks: newArray })
  }

  render() {
    return (
      <div>
        <SearchBar/>

          <div className="row">
            <div className="col-8">

              <StockContainer
                stocks={this.props.stocks}
                buyStock = {this.buyStock}
              />

            </div>
            <div className="col-4">

              <PortfolioContainer
                stocks={this.state.boughtStocks}
                sellStock={this.sellStock}
              />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
