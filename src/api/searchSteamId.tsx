import axios from "axios"

const API_BASE_URL = 'http://localhost:4000/api'

const searchSteamId = async (steamId: string) => {
  try {
    const apiResponse = await axios.get(`${API_BASE_URL}/user/games/${steamId}`)
    return apiResponse.data
  } catch (error) {
    console.log(`Error getting SteamId: ${error}`)
    return { error: `Oh no! An error occurred while getting your steam information` }
  }
}

export default searchSteamId