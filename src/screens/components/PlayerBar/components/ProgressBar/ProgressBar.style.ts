import { HTMLMediaState } from 'react-use/lib/factory/createHTMLMediaHook'
import styled from 'styled-components'

type ProgressBarType = {
  time: HTMLMediaState['time']
  duration: HTMLMediaState['duration']
}

export const ProgressBarBox = styled.div`
  position: absolute;
  left: 0;
  top: -5px;
  height: 5px;
  width: 100%;
  background-color: ${({ theme }) => theme.color.bgMain};

  transition: height 0.1s ease-in-out, top 0.1s ease-in-out;

  &:hover {
    height: 10px;
    background-color: ${({ theme }) => theme.color.bgDropList};
    top: -10px;
    cursor: pointer;
  }

  &:hover div {
    box-shadow: 0 0 10px 0px ${({ theme }) => theme.color.active};
  }
`
export const ProgressBar = styled.div<ProgressBarType>`
  position: absolute;
  background-color: ${({ theme }) => theme.color.active};
  top: 0;
  left: 0;
  height: 100%;
  width: ${({ time, duration }) => (time / duration) * 100}%;
`
