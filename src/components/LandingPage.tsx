import React, { useEffect } from 'react';
import StyledAppWrapper from '../style/StyledApp.style.js';
import background from '../media/background.mp4';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Loader from './util/Loader';
import searchSteamId from '../api/searchSteamId';
import readPreviousSearches from '../util/readPreviousSearches';
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const [steamId, setSteamId] = React.useState<string | null>('');
  const [error, setError] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [previousSearches, setPreviousSearches] = React.useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const previousSearches = readPreviousSearches()
    setPreviousSearches(previousSearches)
  }, [])

  const onSearchClicked = async () => {
    if (!isLoading && steamId) {
      setIsLoading(true)
      setError('')

      const apiResponse = await searchSteamId(steamId)

      setIsLoading(false)
      if (apiResponse.error) {
        setError(apiResponse.error)
      } else {
        const previousSearches = readPreviousSearches()

        const searchAlreadyExists = previousSearches.find((search: any) => search.label === steamId)

        if (!searchAlreadyExists) {
          previousSearches.push({ label: steamId })
          setPreviousSearches(previousSearches)
          localStorage.setItem("previousSearches", JSON.stringify(previousSearches));

        }
        navigate(`user/${steamId}`, { state: { apiResponse } });
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
            <div className='title' onClick={() => localStorage.removeItem("previousSearches")}>Welcome</div>
            <div className='subtitle'>Please enter your steam ID below to get some cool stats!</div>
          </div>
          <div className='steamIdInputContainer'>
            <Autocomplete
              freeSolo
              id="combo-box-demo"
              options={previousSearches}
              onChange={(_event: any, newValue: any) => {
                setSteamId(newValue.label);
              }}
              disableClearable={true}
              sx={{ width: 300 }}
              renderInput={(params: any) => <TextField {...params} id="outlined-basic" label="STEAM ID" variant="outlined" value={steamId} onChange={(e: any) => setSteamId(e.target.value)} />}
            />

            <button className='searchButton' onClick={onSearchClicked}>SEARCH</button>
          </div>
          {isLoading && <Loader />}
          {!isLoading && error && <div className='error'>{error}</div>}
        </div>
      </div>
    </StyledAppWrapper >
  );
}