import React, { useEffect } from 'react'
import StyledGameList from '../style/StyledGameList.style'
import { useLocation, useNavigate } from "react-router-dom";
import Game from './Game';
import Loader from './util/Loader';
import { convertMinutesToHoursAndMinutes } from "./convertMinutesToHoursAndMinutes";

type Game = {
  appid?: number,
  name: string,
  playtime_2weeks?: number,
  playtime_forever: number,
  img_icon_url?: string,
  playtime_windows_forever?: number,
  playtime_mac_forever?: number,
  playtime_linux_forever?: number,
  rtime_last_played?: number,
  playtime_disconnected?: number,
  has_community_visible_stats?: boolean
}

type BasicStats = {
  totalPlaytime: number,
  mostPlayedGame: Game,
  leastPlayedGame: Game
}


type User = {
  personaname: string,
  profileurl: string,
  avatar: string,
  profilestate: number,
  lastlogoff: number
}

const GamesList = () => {
  const [currentListOfGames, setCurrentListOfGames] = React.useState<Game[]>([])
  const [searchTerm, setSearchTerm] = React.useState<string>('')
  const [loadingBasicStats, setLoadingBasicStats] = React.useState<boolean>(false)
  const [basicStats, setBasicStats] = React.useState<BasicStats>({} as BasicStats)
  const [userInfo, setUserInfo] = React.useState<User>({} as User)
  const { state } = useLocation()
  const navigate = useNavigate()
  const gamesCount = state?.apiResponse?.game_count

  if (gamesCount === 2323) {
    setLoadingBasicStats(false)
  }

  const getBasicStats = (games: Game[]): void => {
    var totalPlaytime = 0
    var mostPlayedGame = games[0]
    var leastPlayedGame = games[0]

    games.map((game: Game) => {
      totalPlaytime += game.playtime_forever

      if (game.playtime_forever > mostPlayedGame.playtime_forever) {
        mostPlayedGame = game
      }

      if (game.playtime_forever < leastPlayedGame.playtime_forever) {
        leastPlayedGame = game
      }

      setBasicStats({
        totalPlaytime,
        mostPlayedGame,
        leastPlayedGame
      })
    })
  }

  useEffect(() => {
    if (state && state.apiResponse) {
      const { userGames, userDetails } = state?.apiResponse
      const { games } = userGames
      setCurrentListOfGames(games)
      setUserInfo(userDetails)

      getBasicStats(games)
    } else {
      navigate('/')
    }
  }, [])

  const filterGames = () => {
    const games = state?.apiResponse?.games

    if (searchTerm) {
      setCurrentListOfGames(games.filter((game: Game) => game.name.toLowerCase().includes(searchTerm.toLowerCase())))
    } else {
      setCurrentListOfGames(games)
    }
  }

  return (
    <StyledGameList>
      <div className='gamesListContainer'>
        <div className='header'>
          <img src={userInfo.avatar} />
          <div className='title'>Hello <a href={userInfo.profileurl} target='_blank'>{userInfo.personaname}</a>, you have got a total of {gamesCount} games.</div>
          <div className='basicStats'>
            {loadingBasicStats && <Loader />}
            {!loadingBasicStats && basicStats && <div>
              <div>Total Playtime: {convertMinutesToHoursAndMinutes(basicStats.totalPlaytime)}</div>
              <div>Your most played game is {basicStats?.mostPlayedGame?.name} with {convertMinutesToHoursAndMinutes(basicStats?.mostPlayedGame?.playtime_forever)}</div>
              <div>Your least played game is {basicStats?.leastPlayedGame?.name} with {convertMinutesToHoursAndMinutes(basicStats?.leastPlayedGame?.playtime_forever)}</div>
            </div>}
          </div>
          <div className='subtitle link' onClick={() => navigate('/')}>BACK TO THE SEARCH PAGE</div>
        </div>
        <div className='gamesListBody'>
          <div className='searchContainer'>
            <input value={searchTerm} type='text' className='searchInput' placeholder='SEARCH FOR A GAME' onChange={(e) => setSearchTerm(e.target.value)} />
            <button className='searchButton' onClick={() => filterGames()}>SEARCH</button>
          </div>
          <div className='gamesList'>
            {currentListOfGames.map(Game)}
          </div>
        </div>
      </div>
    </StyledGameList>
  )
}

export default GamesList