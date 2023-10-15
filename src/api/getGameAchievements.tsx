import axios from 'axios'

const { REACT_APP_API_BASE_URL } = process.env

const getGameAchievements = async (gameId: number, steamId: string, callback: any) => {
  if (gameId && steamId) {
    const apiResponse = await axios.get(`${REACT_APP_API_BASE_URL}/user/${steamId}/games/${gameId}/achievements`)
    callback(apiResponse.data)
  }
}

export default getGameAchievements
