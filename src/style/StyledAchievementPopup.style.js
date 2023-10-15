import styled from 'styled-components'

const StyledAchievementPopup = styled.div`     
    .loaderContainer {
        text-align: center;
    }
        .icon {
              width: 1rem;
        }

        .error {
          text-align: center;
          color: red;
        }
        .filterContainer {
          display: flex;
          align-items: center;
          cursor: pointer;
          border-bottom: 3px solid black;
          padding-bottom: 1rem;

          .checkbox {
            width: 1rem;
            height: 1rem;
            border: 1px solid black;
            margin-right: 5px;
            border-radius: 15px;
          }

          .active {
            background: #8bff00;
            border: 1px solid #8bff00;
          }
        }

        .achievementContainer {
          margin-top: 1rem;
          border-bottom: 3px solid black;

          &:hover {
            background: gray;
            color: white;
          }
          .title {
              font-size: 1.2rem;
              font-weight: 600; 
            }
          .header {
            display: flex;

            img {
              margin-right: 5px;
            }            
          }

          .achievementDescription {
            margin-top: 10px;
          }
        }

        .iconContainer {
          display: flex;

          .smallText {
            font-size: .8rem;
          }
        }
`

export default StyledAchievementPopup