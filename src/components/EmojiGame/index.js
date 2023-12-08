/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCards from '../EmojiCard'
import WinorLossCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    clickedEmojisList: '',
    score: 0,
    isLoggedOut: false,
    won: false,
    topScore: 0,
  }

  cardButtonId = id => {
    const {emojisList} = this.props

    const {clickedEmojisList} = this.state
    const isEmojiPresent = clickedEmojisList.includes(id)
    const clickedEmojisLength = clickedEmojisList.length

    if (isEmojiPresent) {
      this.setState({score: clickedEmojisLength, isLoggedOut: true})
    } else {
      if (emojisList.length - 1 === clickedEmojisLength) {
        this.setState({score: emojisList.length, won: true})
      }
      this.setState({score: clickedEmojisLength})
      this.setState(previousState => ({
        clickedEmojisList: [...previousState.clickedEmojisList, id],
      }))
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    const filteredemojisList = emojisList.sort(() => Math.random() - 0.5)
    return filteredemojisList
  }

  renderAuthButton = () => {
    const emojisList = this.shuffledEmojisList()
    const {isLoggedOut, score, won} = this.state

    if (isLoggedOut === true) {
      return (
        <div className="wOrlcard">
          {won ? (
            <WinorLossCard
              userWorL="You Won"
              totalScore={score}
              altattribute="win or lose"
              statement="Best Score"
              imageUrl="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
              playAgain={this.onplayAgain}
            />
          ) : (
            <WinorLossCard
              userWorL="You Lose"
              totalScore={score}
              altattribute="win or lose"
              statement="Score"
              playAgain={this.onplayAgain}
              imageUrl="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
            />
          )}
        </div>
      )
    }
    return (
      <div className="card">
        <ul className="unorderedList">
          {emojisList.map(eachItem => (
            <EmojiCards
              emojiItem={eachItem}
              key={eachItem.id}
              cardButtonId={this.cardButtonId}
            />
          ))}
        </ul>
      </div>
    )
  }

  onplayAgain = () => {
    const {score, topScore} = this.state
    if (score > topScore) {
      this.setState({topScore: score})
    }
    this.setState({
      clickedEmojisList: '',
      score: 0,
      isLoggedOut: false,
      won: false,
    })
    this.renderAuthButton()
  }

  render() {
    const {score, won, topScore} = this.state
    return (
      <div className="bgContainer">
        <NavBar score={score} won={won} topScore={topScore} />
        {this.renderAuthButton()}
      </div>
    )
  }
}
export default EmojiGame
