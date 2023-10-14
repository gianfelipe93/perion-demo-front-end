import React from "react"
import { convertMinutesToHoursAndMinutes } from "./convertMinutesToHoursAndMinutes";

type GameType = {
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

const Game = ({ name, appid, img_icon_url, playtime_forever }: GameType) => {
  return (
    <div className='gameContainer'>
      <div className='game'>
        <div className='gameImage'>
          <img src={`http://media.steampowered.com/steamcommunity/public/images/apps/${appid}/${img_icon_url}.jpg`} className='image' />
        </div>
        <div className="infoContainer">
          <div className='gameInfo title' >{name}</div>
          <div className='gameInfo' > Playtime: {convertMinutesToHoursAndMinutes(playtime_forever)}</div>
        </div>
      </div>
    </div>
  )
}

export default Game