import * as React from 'react'
import * as S from './VolumeRange.style'
import './range.scss'
import { ControlsType } from '@/types'
import IconSprite from '@/screens/components/Icon/enum'
import Icon from '@/screens/components/Icon'

const INITIAL_VOLUME_LEVEL = 50
const PERCENT = 100

const VolumeRange = ({
  volume,
  mute: setMute,
  unmute: setUnmute,
}: ControlsType) => {
  const [isMute, setIsMute] = React.useState<boolean>(false)

  const handlerVolumeChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    const range = e.target
    const rangeValue = Number(range.value) / PERCENT
    volume(rangeValue)

    if (rangeValue === 0) {
      setIsMute(true)
    } else {
      setIsMute(false)
    }
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(() => volume(INITIAL_VOLUME_LEVEL / PERCENT), [])

  const handleSetMute = () => {
    setIsMute(true)
    setMute()
  }

  const handleSetUnMute = () => {
    setIsMute(false)
    setUnmute()
  }

  return (
    <S.VolumeBox>
      {!isMute ? (
        <Icon icon={IconSprite.Volume} onClick={handleSetMute} size={20} />
      ) : (
        <Icon icon={IconSprite.Mute} onClick={handleSetUnMute} size={20} />
      )}
      <S.Slider
        type="range"
        min="0"
        max="100"
        name="range"
        step="5"
        onChange={handlerVolumeChange}
        defaultValue={INITIAL_VOLUME_LEVEL}
      />
    </S.VolumeBox>
  )
}

export default VolumeRange
