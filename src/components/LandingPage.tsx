import React from 'react';
import StyledAppWrapper from '../style/StyledApp.style.js';
import background from '../media/background.mp4';
import TextField from '@mui/material/TextField';
import Loader from './util/Loader';
import searchSteamId from '../api/searchSteamId';

export default function LandingPage() {
  const [steamId, setSteamId] = React.useState<string>('');
  const [error, setError] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const onSearchClicked = async () => {
    if (!isLoading && steamId) {
      setIsLoading(true)
      setError('')

      const apiResponse = await searchSteamId(steamId)

      setIsLoading(false)
      if (apiResponse.error) {
        setError(apiResponse.error)
      } else {
        console.log(apiResponse)
      }
    }
  }

  return (
    <StyledAppWrapper>
      <div className="appContainer">
        <div className='background'>
          <video className="video" autoPlay muted loop>
            <source src={background} type="video/mp4" />
          </video>
        </div>
        <div className='body'>
          <div className='bodyHeader'>
            <div className='title'>Welcome</div>
            <div className='subtitle'>Please enter your steam ID below to get some cool stats!</div>
          </div>
          <div className='steamIdInput'>
            <TextField id="outlined-basic" label="STEAM ID" variant="outlined" value={steamId} onChange={(e: any) => setSteamId(e.target.value)} />
            <button className='searchButton' onClick={onSearchClicked}>SEARCH</button>
          </div>
          {isLoading && <Loader />}
          {!isLoading && error && <div className='error'>{error}</div>}
        </div>
      </div>
    </StyledAppWrapper>
  );
}