import React from 'react'
import tickIcon from '../media/tick.svg'
import lockedIcon from '../media/locked.svg'
import moment from 'moment'

type AchievementIconType = {
  achieved: number,
  unlocktime: number,
  percent: string
}

function convertTimestampToDate(timestamp: number) {
  return moment.unix(timestamp).format('DD/MM/YYYY')
}

const AchievementIcon = ({ achieved, unlocktime, percent }: AchievementIconType) => {

  if (achieved) {
    return (
      <div className='iconContainer'>
        <img src={tickIcon} className='icon' />
        <div className='smallText'>Unlocked at {convertTimestampToDate(unlocktime)}</div>
        <div className='smallText'>  - {percent}% of people unlock this achievement.</div>
      </div>
    )
  }


  return (
    <div className='iconContainer'>
      <img src={lockedIcon} className='icon' />
      <div className='smallText'> - {percent}% of people unlock this achievement.</div>
    </div>
  )
}

export default AchievementIcon