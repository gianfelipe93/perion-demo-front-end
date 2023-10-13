import styled from 'styled-components'

const StyledAppWrapper = styled.div`
    height: 100%;

   .appContainer {
        height: 100%;

        .background {
          height: 100%;

          .video {
            height: 100%;
            width: 100%;
            object-fit: cover;
          }
        }
        
        .body {
          position: absolute;
          text-align: center;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);

          .bodyHeader {
            .title {
              font-weight: bold;
              font-size: 3rem;
              color: white;
            }
            .subtitle {
              color: white;
            }
          }

          .steamIdInput {
            margin-top: 2rem;
            display:flex;
            column-gap: 10px;
            align-items: center;

            .MuiInputBase-input {
              background: white;
              border-radius: 35px;
              width: 20rem;
            }

            .Mui-focused {
            .MuiOutlinedInput-notchedOutline {
              border-radius: 35px;
              border-width: 3px;
              border-color: #8bff00;
            }
          }            

              .MuiInputLabel-shrink {
                background: #8bff00;
                padding: 0px 5px;
                border-radius: 10px;
                font-weight: 600;
              }

            .searchButton {
              border-radius: 40px;
              width: 6rem;
              height: 3rem;
              cursor: pointer;

              &:hover {
                border: 3px solid #8bff00;
                font-weight: 600;
              }
            }
          }
        }
   }
`

export default StyledAppWrapper