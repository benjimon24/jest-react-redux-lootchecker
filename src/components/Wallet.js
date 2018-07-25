import React, { Component } from "react";
import { connect } from "react-redux";

export class Wallet extends Component {
  state = {
    balance: undefined
  };

  updateBalance = event => {
    this.setState({ balance: parseInt(event.target.value) });
  };

  render() {
    const { balance } = this.props;
    return (
      <div>
        <h3 className="balance">Wallet Balance: {balance}</h3>
        <br />
        <input onChange={this.updateBalance} className="input-wallet" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { balance: state.balance };
};

export default connect(
  mapStateToProps,
  null
)(Wallet);
