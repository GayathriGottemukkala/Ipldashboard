import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BallTriangle } from 'react-loader-spinner';
import LatestMatch from '../latestmatch';
import MatchCard from '../matchcard';
import './index.css';

const TeamMatches = () => {
  const { id } = useParams(); // Use the useParams hook to access the route parameters
  const [eachMatchDetails, setEachMatchDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getEachMatchDetails = async () => {
      const response = await fetch(`https://apis.ccbp.in/ipl/${id}`);
      const data = await response.json();

      const formattedData = {
        teamBannerUrl: data.team_banner_url,
        latestMatchDetails: {
          competingTeam: data.latest_match_details.competing_team,
          competingTeamLogo: data.latest_match_details.competing_team_logo,
          date: data.latest_match_details.date,
          firstInnings: data.latest_match_details.first_innings,
          id: data.latest_match_details.id,
          manOfTheMatch: data.latest_match_details.man_of_the_match,
          matchStatus: data.latest_match_details.match_status,
          result: data.latest_match_details.result,
          secondInnings: data.latest_match_details.second_innings,
          umpires: data.latest_match_details.umpires,
          venue: data.latest_match_details.venue,
        },
        recentMatches: data.recent_matches.map(eachItem => ({
          competingTeam: eachItem.competing_team,
          competingTeamLogo: eachItem.competing_team_logo,
          date: eachItem.date,
          firstInnings: eachItem.first_innings,
          id: eachItem.id,
          manOfTheMatch: eachItem.man_of_the_match,
          matchStatus: eachItem.match_status,
          result: eachItem.result,
          secondInnings: eachItem.second_innings,
          umpires: eachItem.umpires,
          venue: eachItem.venue,
        })),
      };

      setEachMatchDetails(formattedData);
      setIsLoading(false);
    };

    getEachMatchDetails();
  }, [id]);

  const getRouteClassName = () => {
    const teamClassNames = {
      RCB: 'rcb',
      KKR: 'kkr',
      KXP: 'kxp',
      CSK: 'csk',
      RR: 'rr',
      MI: 'mi',
      SH: 'srh',
      DC: 'dc',
    };

    return teamClassNames[id] || '';
  };

  const bgColour = getRouteClassName();

  return (
    <div className={`team-match-container ${bgColour}`}>
      {isLoading ? (
        <div data-testid="loader">
          <BallTriangle color="#somecolor" height={80} width={80} />
        </div>
      ) : (
        <>
          <img src={eachMatchDetails.teamBannerUrl} alt="Team banner" className="team-match-url" />
          <div className="latest-match-container">
            <h1 className="latest-heading">Latest Matches</h1>
            <LatestMatch latestMatchDetails={eachMatchDetails.latestMatchDetails} />
            <ul className="ul-match-cart">
              {eachMatchDetails.recentMatches.map(eachItem => (
                <MatchCard key={eachItem.id} eachItem={eachItem} />
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default TeamMatches;
