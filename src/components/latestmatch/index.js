import './index.css';

const LatestMatch = props => {
  const { latestMatchDetails } = props;

  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatchDetails;

  return (
    <div className="latest-match-details-container">
      <div className="sm-width latest-match-details-container">
        <div className="latest-first-container">
       
          <p className="latest-data-heading">{competingTeam}</p>
          <p className="latest-data-heading latest-date">{date}</p>
          <p className="latest-data-heading latest-text">{venue}</p>
          <p className="latest-data-heading latest-text">{result}</p>
          
        </div>
        <div className="img-container latest-first-container latest-second-container">
          <img
            src={competingTeamLogo}
            alt={`Latest match between ${competingTeam}`}
            className="latest-logo"
          />
        </div>
      
      <hr className="hr-line" />
      <div className="latest-first-container latest-third-container">
        <MatchDetail label="First Innings" detail={firstInnings} />
        <MatchDetail label="Second Innings" detail={secondInnings} />
        <MatchDetail label="Man Of The Match" detail={manOfTheMatch} />
        <MatchDetail label="Umpires" detail={umpires} />
      </div>
      </div>
    </div>
  );
};

const MatchDetail = ({ label, detail }) => (
  <>
    <p className="latest-data-heading latest-text latest-text-right">
      {label}
    </p>
    <p className="latest-data-heading latest-text latest-text-right">
      {detail}
    </p>
  </>
);

export default LatestMatch;
