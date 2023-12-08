// Write your code here.

import './index.css'

const NavBar = props => {
  const {score, won, topScore} = props

  return (
    <nav className="navBar">
      <div className="navItem1">
        <img
          className="navImage"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="navGame">Emoji Game</h1>
      </div>
      {won ? (
        ''
      ) : (
        <div className="navItem1">
          <p className="score">Score: {score}</p>
          <p className="topScore">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}
export default NavBar
