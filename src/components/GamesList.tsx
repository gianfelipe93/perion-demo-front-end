import React, { useEffect } from 'react'
import StyledGameList from '../style/StyledGameList.style'
import { useLocation, useNavigate } from "react-router-dom";

type Game = {
  appid?: number,
  name: string,
  playtime_2weeks?: number,
  playtime_forever?: number,
  img_icon_url?: string,
  playtime_windows_forever?: number,
  playtime_mac_forever?: number,
  playtime_linux_forever?: number,
  rtime_last_played?: number,
  playtime_disconnected?: number,
  has_community_visible_stats?: boolean
}

const GamesList = () => {
  const [fullListOfGames, setFullListOfGames] = React.useState<Game[]>([])
  const [currentListOfGames, setCurrentListOfGames] = React.useState<Game[]>([])
  const [searchTerm, setSearchTerm] = React.useState<string>('')
  const { state } = useLocation()
  const navigate = useNavigate()
  const gamesCount = state?.apiResponse?.game_count


  useEffect(() => {
    if (state && state.apiResponse) {
      const games = state?.apiResponse?.games
      setCurrentListOfGames(games)
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
          <div className='title'>You have got a total of {gamesCount} games.</div>
          <div className='subtitle'>Click on your games to see some cool stats!</div>
        </div>
        <div className='gamesListBody'>
          <div className='searchContainer'>
            <input value={searchTerm} type='text' className='searchInput' placeholder='SEARCH FOR A GAME' onChange={(e) => setSearchTerm(e.target.value)} />
            <button className='searchButton' onClick={() => filterGames()}>SEARCH</button>
          </div>
          <div className='gamesList'>
            {currentListOfGames.map((game: any) => {
              return (
                <div className='gameContainer'>
                  <div className='game'>
                    <div className='gameImage'>
                      <img src={`http://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_icon_url}.jpg`} className='image' />
                    </div>
                    <div className='gameTitle' >{game.name}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </StyledGameList>
  )
}

export default GamesList