import React, { useEffect } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Loader from './util/Loader';
import AchievementIcon from './AchievementIcon';
import StyledAchievementPopup from '../style/StyledAchievementPopup.style';
import getGameAchievements from '../api/getGameAchievements';

type Achievement = {
  apiname: string,
  achieved: number,
  unlocktime: number,
  name: string,
  description: string,
  percent: string,
}

type Props = {
  open: boolean,
  selectedGame: number,
  steamId: string,
  closePopup: () => void
}

const AchievementPopup = ({ open, selectedGame, steamId, closePopup }: Props) => {
  const [loading, setLoading] = React.useState<boolean>(true)
  const [achievements, setAchievements] = React.useState<Achievement[]>([])
  const [tempAchievements, setTempAchievements] = React.useState<Achievement[]>([])
  const [filterActive, setFilter] = React.useState<boolean>(false)
  const [error, setError] = React.useState<string>('')

  useEffect(() => {
    setError('')
    setLoading(true)
    const callback = (achievements: Achievement[]) => {
      setAchievements(achievements)
      setTempAchievements(achievements)
      setLoading(false)
    }

    getGameAchievements(selectedGame, steamId, callback).catch(err => {
      setError(err.response.data)
      setLoading(false)
    })
  }, [selectedGame])

  const filterAchievementsUnlocked = (active: boolean) => {
    const filteredAchievements = achievements.filter((achievement: Achievement) => (achievement.achieved === 0 && active) || !active)
    setTempAchievements(filteredAchievements)
    setFilter(active)
  }

  const onCloseClicked = () => {
    setAchievements([])
    setTempAchievements([])

    closePopup()
  }

  return (
    <Dialog open={open} fullWidth={true}>
      <DialogTitle style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>CHECK YOUR ACHIEVEMENTS:</div>
        <div className='closePopupButton' onClick={onCloseClicked} style={{ background: 'black', color: 'white', padding: '0.5rem', borderRadius: '30px', width: '1rem', height: '1rem', fontSize: '.7rem', textAlign: 'center', cursor: 'pointer' }}>X</div>
      </DialogTitle>

      <DialogContent>
        <StyledAchievementPopup>
          {loading && <Loader />}
          {error && <div className="error">{error}</div>}
          {!loading && !error && <div>
            <div className="filterContainer" onClick={() => filterAchievementsUnlocked(!filterActive)}>
              <div className={`checkbox ${filterActive ? 'active' : ''}`}></div>
              <div className='' >REMOVE UNLOCKED ACHIEVEMENTS</div>
            </div>
            {tempAchievements.map((achievement: Achievement) => {
              return (
                <div className='achievementContainer'>
                  <div className='title'>{achievement.name}</div>
                  <div className='header'>
                    <AchievementIcon achieved={achievement.achieved} unlocktime={achievement.unlocktime} percent={achievement.percent} />
                  </div>
                  <div className='achievementDescription'>{achievement.description}</div>
                </div>
              )
            })}
          </div>}
        </StyledAchievementPopup>
      </DialogContent>
    </Dialog>
  );
}

export default AchievementPopup