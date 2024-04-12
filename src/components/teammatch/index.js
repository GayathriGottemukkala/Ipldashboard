import {Component} from 'react'
import {BallTriangle} from 'react-loader-spinner'
import LatestMatch from '../latestmatch'
import MatchCard from '../matchcard'
import './index.css'

class TeamMatches extends Component {
  state = {
    eachMatchDetails: {},
    isLoading: true,
  }

  componentDidMount = () => {
    this.getEachMatchDetails()
  }

  getEachMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const formateData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }

    const {teamBannerUrl, latestMatchDetails, recentMatches} = formateData

    const formateLatestMatchDetails = {
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnings: latestMatchDetails.first_innings,
      id: latestMatchDetails.id,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      matchStatus: latestMatchDetails.match_status,
      result: latestMatchDetails.result,
      secondInnings: latestMatchDetails.second_innings,
      umpires: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
    }

    const formateRecentMatches = recentMatches.map(eachItem => ({
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      date: eachItem.data,
      firstInnings: eachItem.first_innings,
      id: eachItem.id,
      manOfTheMatch: eachItem.man_of_the_match,
      matchStatus: eachItem.match_status,
      result: eachItem.result,
      secondInnings: eachItem.second_innings,
      umpires: eachItem.umpires,
      venue: eachItem.venue,
    }))

    const newFormateData = {
      teamBannerUrl,
      formateLatestMatchDetails,
      formateRecentMatches,
    }

    this.setState({
      eachMatchDetails: newFormateData,
      isLoading: false,
    })
  }

  getRouteClassName = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'KXP':
        return 'kxp'
      case 'CSK':
        return 'csk'
      case 'RR':
        return 'rr'
      case 'MI':
        return 'mi'
      case 'SH':
        return 'srh'
      case 'DC':
        return 'dc'
      default:
        return ''
    }
  }

  render() {
    const {eachMatchDetails, isLoading} = this.state

    const bgColour = this.getRouteClassName()

    const {
      teamBannerUrl,
      formateLatestMatchDetails,
      formateRecentMatches,
    } = eachMatchDetails

    return (
      <div className={`team-match-container ${bgColour}`}>
        {isLoading ? (
          <div data-testid="loader">
            <BallTriangle color="#somecolor" height={80} width={80} />
          
          </div>
        ) : (
          <>
            <img
              src={teamBannerUrl}
              alt="team banner"
              className="team-match-url"
            />
            <div className="latest-match-container">
              <h1 className="latest-heading">Latest Matches</h1>
              <LatestMatch latestMatchDetails={formateLatestMatchDetails} />
              <ul className="ul-match-cart">
                {formateRecentMatches.map(eachItem => (
                  <MatchCard key={eachItem.id} eachItem={eachItem} />
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches