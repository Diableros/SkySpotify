import * as React from 'react'
import { HTMLMediaState } from 'react-use/lib/factory/createHTMLMediaHook'
import * as S from './ProgressBar.style'

const ProgressBar = ({ time, duration }: HTMLMediaState) => {
  return (
    <S.ProgressBarBox>
      <S.ProgressBar time={time} duration={duration} />
    </S.ProgressBarBox>
  )
}

export default ProgressBar
