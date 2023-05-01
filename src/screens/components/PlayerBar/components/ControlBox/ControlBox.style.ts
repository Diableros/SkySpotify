import styled from 'styled-components'

export const ControlPanel = styled.div`
  display: flex;
  min-width: 260px;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
  color: ${({ theme }) => theme.color.textMain};
`

export const ControlButton = styled.button`
  color: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
  border: 50%;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: filter 0.1s;

  /* &:hover {
    filter: drop-shadow(0 0 5px #fff);
  }

  &:active {
    filter: drop-shadow(0 0 10px #fff);
  } */
`
export const ControlButtonSecondary = styled(ControlButton)`
  color: ${({ theme }) => theme.color.textSecondry};
`
