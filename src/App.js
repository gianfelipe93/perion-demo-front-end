import StyledAppWrapper from './style/StyledApp.style';
import background from './media/background.mp4';
import TextField from '@mui/material/TextField';

function App() {
  return (
    <StyledAppWrapper>
      <div className="appContainer">
        <div className='background'>
          <video className="video" autoPlay muted playsinline loop>
            <source src={background} type="video/mp4" />
          </video>
        </div>
        <div className='body'>
          <div className='bodyHeader'>
            <div className='title'>Welcome</div>
            <div className='subtitle'>Please enter your steam ID below to get some cool stats!</div>
          </div>
          <div className='steamIdInput'>
            <TextField id="outlined-basic" label="STEAM ID" variant="outlined" />
            <button className='searchButton'>SEARCH</button>
          </div>
        </div>
      </div>
    </StyledAppWrapper>
  );
}

export default App;
