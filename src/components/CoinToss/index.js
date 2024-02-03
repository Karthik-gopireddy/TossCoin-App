import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    initialToss: 0,
    total: 0,
    Heads: 0,
    Tails: 0,
    image: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onTossCoin = () => {
    const {initialToss, total, Heads, Tails, image} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    console.log(tossResult)
    if (tossResult === 0) {
      this.setState({initialToss: tossResult})
      this.setState(prevState => ({Heads: prevState.Heads + 1}))
      this.setState(prevState => ({total: prevState.total + 1}))
      this.setState({
        image: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
    } else {
      this.setState(prevState => ({Tails: prevState.Tails + 1}))
      this.setState(prevState => ({total: prevState.total + 1}))
      this.setState({
        image: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
    }
  }

  render() {
    const {initialToss, Tails, Heads, total, image} = this.state

    return (
      <div className="background-container">
        <div className="content-container">
          <h1 className="h1">Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img className="image" src={image} alt="toss result" />
          <button type="submit" className="button" onClick={this.onTossCoin}>
            Toss Coin
          </button>
          <div className="results">
            <p>Total: {total}</p>
            <p>Heads: {Heads}</p>
            <p>Tails: {Tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
