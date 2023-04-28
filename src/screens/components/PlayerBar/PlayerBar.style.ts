import styled from 'styled-components'

type PlayerBarPropsType = {
  isShow: boolean
}

export const PlayerBarBox = styled.div<PlayerBarPropsType>`
  position: fixed;
  color: ${({ theme }) => theme.textMain}
  left: 0;
  bottom: -73px;
  width: 100%;
  height: 73px;
  display: flex;
  flex-direction: column;
  transition: bottom 0.2s ease-in-out;
  ${({ isShow }) => (isShow ? `bottom: 0px;` : null)}
`

export const PlayerBar = styled.div`
  display: flex;
  color: inherit;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(28, 28, 28, 80%);
`
export const CurrentTrackStateWrapper = styled.div`
  position: fixed;
  top: 100px;
  right: 50px;
  color: #555;
`

export const CurrentTrackState = styled.pre``
