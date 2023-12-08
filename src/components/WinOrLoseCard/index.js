// Write your code here.
import './index.css'

const WinorLossCard = props => {
  const {userWorL, totalScore, imageUrl, ...others} = props
  const {altattribute, playAgain, statement} = others
  const onPlayAgain = () => {
    playAgain()
  }
  const finalScore = totalScore.toString()
  return (
    <div className="winOrlossBg">
      <div className="winOrlossDetails">
        <h1 className="wOrlheading">{userWorL}</h1>
        <p className="wOrlheading">{statement}</p>
        <p className="bestScore">{finalScore}/12</p>
        <button type="button" className="playAgainButt" onClick={onPlayAgain}>
          Play Again
        </button>
      </div>
      <img className="wOrlimage" src={imageUrl} alt={altattribute} />
    </div>
  )
}
export default WinorLossCard
