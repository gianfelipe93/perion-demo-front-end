import styled from 'styled-components'

const StyledAppWrapper = styled.div`
       .gamesListContainer {
              .header {
                     background: black;
                     text-align: center;
                     padding: 5rem 0px;
                     border-bottom: 3px solid #8bff00;

                     .title {
                            color: white;
                            font-weight: 700;
                            font-size: 2rem;
                     }

                     .subtitle {
                            color: white;
                            margin-top: 5px;
                     }
              }

              .gamesListBody {
                     .searchContainer {
                            margin: 1rem 0rem;

                            .searchInput {
                                   width: 20%;
                                   border: 0px;
                                   border-bottom: 3px solid #8bff00;
                                   font-size: 1rem;


                                   &:focus-visible {
                                          outline: none !important;
                                   }
                            }

                            .searchButton {
                                   margin-left: 10px;
                                   background: transparent;
                                   border: 3px solid black;
                                   border-radius: 14px;
                                   font-size: 1rem;
                                   padding: 5px 20px;
                                   cursor: pointer;

                                   &:hover {
                                          border: 3px solid #8bff00;
                                   }

                            }
                     }
                     .gamesList {
                            display: flex;
                            flex-wrap: wrap;
                            justify-content: space-between;
                            row-gap: 1rem;
                            column-gap: 1rem;
                            cursor: pointer;
                            

                            .gameContainer {
                                   width: 20%;

                                   &:hover {
                                          border: 3px solid #8bff00;
                                   }

                                   .game {
                                          display: flex;
                                          img {
                                                 width: 8rem;
                                                 height: 8rem;
                                          }
                                   }

                                   .gameTitle {
                                          font-size: 1rem;
                                          font-weight: 700;
                                          align-self: center;
                                          margin-left: 6px;
                                   }
                            }
                     }
              }
       }
`

export default StyledAppWrapper