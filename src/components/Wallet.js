import React, { Component } from "react";
import { connect } from "react-redux";
import { deposit, withdraw } from "../actions/balanceActions";

export class Wallet extends Component {
  state = {
    balance: undefined
  };

  updateBalance = event => {
    this.setState({ balance: parseInt(event.target.value) });
  };

  clickDepositButton = () => {
    this.props.deposit(this.state.balance);
  };

  clickWithdrawButton = () => {
    this.props.withdraw(this.state.balance);
  };

  render() {
    const { balance } = this.props;
    return (
      <div>
        <h3 className="balance">Wallet Balance: {balance}</h3>
        <br />
        <input onChange={this.updateBalance} className="input-wallet" />
        <button className="btn-deposit" onClick={this.clickDepositButton}>
          Deposit
        </button>

        <button className="btn-withdraw" onClick={this.clickWithdrawButton}>
          Withdraw
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { balance: state.balance };
};

export default connect(
  mapStateToProps,
  { deposit, withdraw }
)(Wallet);
