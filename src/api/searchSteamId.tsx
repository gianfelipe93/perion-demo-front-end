import axios from "axios"

const API_BASE_URL = 'http://localhost:4000/api'

const searchSteamId = async (steamId: string) => {
  try {
    const apiResponse = await axios.get(`${API_BASE_URL}/user/${steamId}`)
    return apiResponse.data
  } catch (error: any) {
    console.log(`Error getting SteamId: ${error}`)
    console.log(error)
    return { error: error.response.data }
  }
}

export default searchSteamId