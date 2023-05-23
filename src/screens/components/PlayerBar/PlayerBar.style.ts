import styled, { keyframes } from 'styled-components'

const slider = keyframes`
  0% {
    bottom: -73px;
  }
  100% {
    bottom: 0px;
  }
`

export const PlayerBarBox = styled.div`
  position: fixed;
  color: ${({ theme }) => theme.color.textMain};
  left: 0;
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: column;
  animation: ${slider} 0.5s linear;
  bottom: 0;
`

export const PlayerBar = styled.div`
  display: flex;
  color: inherit;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.bgMain};
`

export const CurrentTrackStateWrapper = styled.div`
  position: fixed;
  top: 100px;
  right: 50px;
  color: #555;
`

export const CurrentTrackState = styled.pre``
