import './index.css';

const MatchCard = props => {
  const { eachItem } = props;
  const { competingTeamLogo, competingTeam, matchStatus, result } = eachItem;

  // Determine the result style based on match status
  const resultStyle = matchStatus === 'Won' ? 'won' : 'lost';

  return (
    <li className="match-card-list">
      <img
        src={competingTeamLogo}
        alt={`Competing team ${competingTeam}`}
        className="match-card-img"
      />
        <p className={`result match-card-text ${resultStyle}`}>
        {matchStatus}
      </p>
      <p className="match-card-text">{competingTeam}</p>
      <p className="match-card-text match-card-result">{result}</p>
    
    </li>
  );
};

export default MatchCard;
