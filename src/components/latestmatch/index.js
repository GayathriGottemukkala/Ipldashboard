import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props

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
  } = latestMatchDetails

  console.log(latestMatchDetails)

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
            alt={`latest match ${competingTeam}`}
            className="latest-logo"
          />
        </div>
      </div>
      <hr className="hr-line" />
      <div className="latest-first-container latest-third-container">
        <p className="latest-data-heading latest-text latest-text-right">
          First Innings
        </p>
        <p className="latest-data-heading latest-text latest-text-right">
          {firstInnings}
        </p>
        <p className="latest-data-heading latest-text latest-text-right">
          Second Innings
        </p>
        <p className="latest-data-heading latest-text latest-text-right">
          {secondInnings}
        </p>
        <p className="latest-data-heading latest-text latest-text-right">
          Man Of The Match
        </p>
        <p className="latest-data-heading latest-text latest-text-right">
          {manOfTheMatch}
        </p>
        <p className="latest-data-heading latest-text latest-text-right">
          Umpires
        </p>
        <p className="latest-data-heading latest-text latest-text-right">
          {umpires}
        </p>
      </div>
    </div>
  )
}

export default LatestMatch