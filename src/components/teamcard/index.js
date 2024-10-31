import { Link } from 'react-router-dom';
import './index.css';

const TeamCard = props => {
  const { eachItem } = props;
  const { id, name, teamImageUrl } = eachItem;

  return (
    <Link to={`/team-matches/${id}`} className="link-container">
      <li className="team-li-container">
        <img src={teamImageUrl} alt={`${name} logo`} className="team-logo" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  );
};

export default TeamCard;
