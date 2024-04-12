import './index.css'

const MatchCard = props => {
  const {eachItem} = props

  const {competingTeamLogo, competingTeam, matchStatus, result} = eachItem

  const resultStyle = matchStatus === 'Won' ? 'won' : 'lost'

  return (
    <li className="match-cart-list">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-cart-img"
      />
      <p className="match-cart-text">{competingTeam}</p>
      <p className="match-cart-text match-cart-result">{result}</p>
      <p className={`result match-cart-text ${resultStyle}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard