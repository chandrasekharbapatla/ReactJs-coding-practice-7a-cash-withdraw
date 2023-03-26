// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  withdrawButton = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props
    return (
      <div className="bg-container">
        <div className="app-container">
          <div className="name-container">
            <p className="name-icon">s</p>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="balance-text">Your Balance</p>
            <div className="balance-rupees">
              <p className="balance">{balance}</p>
              <p className="rupees">In Rupees</p>
            </div>
          </div>

          <div className="withdraw-container">
            <p className="heading">Withdraw</p>
            <p className="withdraw-rupees">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="withdraws-amounts">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                denominationsDetails={eachDenomination}
                key={eachDenomination.id}
                withdrawButton={this.withdrawButton}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
