// Write your code here

import './index.css'

const DenominationItem = props => {
  const {denominationsDetails, withdrawButton} = props
  const {value} = denominationsDetails

  const clickOnWithdraw = () => {
    withdrawButton(value)
  }
  return (
    <li className="denomination-item">
      <button className="button" type="button" onClick={clickOnWithdraw}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
