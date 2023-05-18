import * as S from '../Tracklist.style'
import Icon from '@/screens/components/Icon'
import IconSprite from '@/screens/components/Icon/enum'

const TableHeaderRow = () => {
  return (
    <S.Header>
      <S.Col1>Трек</S.Col1>
      <S.Col2>Исполнитель</S.Col2>
      <S.Col3>Альбом</S.Col3>
      <S.Col4>
        <Icon icon={IconSprite.Watch} color="inherit" size="18px" inactive />
      </S.Col4>
    </S.Header>
  )
}

export default TableHeaderRow
