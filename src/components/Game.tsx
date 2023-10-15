import React from "react"
import moment from 'moment'
import { convertMinutesToHoursAndMinutes } from "../util/convertMinutesToHoursAndMinutes";

type GameType = {
  appid: number,
  name: string,
  playtime_2weeks?: number,
  playtime_forever?: number,
  img_icon_url?: string,
  playtime_windows_forever?: number,
  playtime_mac_forever?: number,
  playtime_linux_forever?: number,
  rtime_last_played?: number,
  playtime_disconnected?: number,
  has_community_visible_stats: boolean
  onGameClicked: (selectedGame: number) => void,
}

const Game = ({ has_community_visible_stats = false, name, appid, img_icon_url, playtime_forever, onGameClicked, rtime_last_played }: GameType) => {
  const statsText = has_community_visible_stats ? 'This game has achievements available. Click here to see them.' : 'This game does not have achievements available.'
  return (
    <div className={`gameContainer ${has_community_visible_stats ? '' : 'noBorder'}`} onClick={() => has_community_visible_stats ? onGameClicked(appid) : () => ({})}>
      <div className='game'>
        <div className='gameImage'>
          <img src={`http://media.steampowered.com/steamcommunity/public/images/apps/${appid}/${img_icon_url}.jpg`} className='image' />
        </div>
        <div className="infoContainer">
          <div className='gameInfo title' >{name}</div>
          <div className='gameInfo' > Playtime: {convertMinutesToHoursAndMinutes(playtime_forever)}</div>
          {rtime_last_played && <div className='gameInfo' > Last time played: {moment.unix(rtime_last_played).format('DD/MM/YYYY')}</div>}
          <div className={`gameInfo stats ${has_community_visible_stats ? '' : 'noStats'}`}>{statsText}</div>
        </div>
      </div>
    </div>
  )
}

export default Game