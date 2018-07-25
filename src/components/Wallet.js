import React, { Component } from "react";
import { connect } from "react-redux";

export class Wallet extends Component {
  render() {
    const { balance } = this.props;
    return (
      <div>
        <h3 className="balance">Wallet Balance: {balance}</h3>
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
