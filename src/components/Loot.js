import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBitcoin } from "../actions/bitcoinActions";

export class Loot extends Component {
  componentDidMount() {
    this.props.fetchBitcoin();
  }

  computeBitcoinValue() {
    const { bitcoin } = this.props;
    if (Object.keys(bitcoin).length === 0) return "";

    return this.props.balance / parseInt(bitcoin.bpi.USD.rate.replace(",", ""), 10);
  }

  render() {
    return <h3>Bitcoin Balance: {this.computeBitcoinValue()}</h3>;
  }
}

const mapStateToProps = state => {
  return { balance: state.balance, bitcoin: state.bitcoin };
};

export default connect(
  mapStateToProps,
  { fetchBitcoin }
)(Loot);
