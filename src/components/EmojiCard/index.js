// Write your code here.
import './index.css'

const EmojiCards = props => {
  const {emojiItem, cardButtonId} = props
  const {id, emojiName, emojiUrl} = emojiItem

  const onCardButton = () => {
    cardButtonId(id)
  }

  return (
    <li className="listCard">
      <button type="button" className="listCardButton" onClick={onCardButton}>
        <img className="listImage" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}
export default EmojiCards
