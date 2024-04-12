import {Component} from 'react'
import { BallTriangle } from 'react-loader-spinner';
import TeamCard from '../teamcard'
import './index.css'

class Home extends Component {
  state = {
    teamsList: [],
    isLoading: true,
  }

  componentDidMount = () => {
    this.getTeamList()
  }

  getTeamList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data

    const formateData = teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))

    this.setState({
      teamsList: formateData,
      isLoading: false,
    })
  }

  render() {
    const {teamsList, isLoading} = this.state
    return (
      <div className="home-bg-container">
        {isLoading ? (
          <div data-testid="loader">
            <BallTriangle color="#somecolor" height={80} width={80} />
           
          </div>
        ) : (
          <>
            <div className="heading-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
                alt="ipl logo"
                className="main-logo"
              />
              <h1 className="main-heading">IPL Dashboard</h1>
            </div>

            <ul className="teams-ul-container">
              {teamsList.map(eachItem => (
                <TeamCard key={eachItem.id} eachItem={eachItem} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default Home