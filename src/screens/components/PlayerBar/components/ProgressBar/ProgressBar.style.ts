import { HTMLMediaState } from 'react-use/lib/factory/createHTMLMediaHook'
import styled from 'styled-components'

type ProgressBarType = {
  time: HTMLMediaState['time']
  duration: HTMLMediaState['duration']
}

export const ProgressBarBox = styled.div`
  position: relative;
  height: 3px;
  width: 100%;
  background-color: var(--middle-dark);
`
export const ProgressBar = styled.div<ProgressBarType>`
  position: absolute;
  background-color: var(--color-progress-bar);
  top: 0;
  left: 0;
  height: 100%;
  width: ${({ time, duration }) => (time / duration) * 100}%;
`
