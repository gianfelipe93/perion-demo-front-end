import axios from "axios"

const { REACT_APP_API_BASE_URL } = process.env

const searchSteamId = async (steamId: string) => {
  try {
    const apiResponse = await axios.get(`${REACT_APP_API_BASE_URL}/user/${steamId}`)
    return apiResponse.data
  } catch (error: any) {
    console.log(`Error getting SteamId: ${error}`)
    console.log(error)
    return { error: error.response.data }
  }
}

export default searchSteamId