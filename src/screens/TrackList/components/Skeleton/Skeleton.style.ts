import styled, { keyframes } from 'styled-components'

type TrackListTextCellPropsType = {
  flex: number
}

const bgColor1 = 'rgba(123, 123, 123, 10%)'
const bgColor2 = 'rgba(123, 123, 123, 35%)'

const borderRadius = '5px'

const bgGradient = `
  background-image: linear-gradient(130deg, ${bgColor1} 30%, ${bgColor2} 50%, ${bgColor1} 70%);
  background-size: 600px;
`

const animation = keyframes`
  0% {
    background-position: -300px;
   }
  100% { 
    background-position: 300px;
   }
`

export const TrackListRow = styled.div`
  width: 100%;
  height: 68px;
  display: flex;
  gap: 1rem;
  flex: none;
  align-items: center;
  padding: 0 1rem 0 0.5rem;
`

export const TrackListAvatarCell = styled.div`
  height: 52px;
  width: 52px;
  border-radius: ${borderRadius};
  ${bgGradient}
  animation: ${animation} 2s infinite linear;
`
export const TrackListTextCell = styled.div<TrackListTextCellPropsType>`
  height: 1.5rem;
  flex: ${({ flex }) => flex};
  border-radius: ${borderRadius};
  ${bgGradient}
  animation: ${animation} 2s infinite linear;
`
