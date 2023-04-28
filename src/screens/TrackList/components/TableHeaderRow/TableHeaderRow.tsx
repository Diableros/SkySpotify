import * as S from '../../TrackList.style'
import Icon from '@/screens/components/Icon'
import GetIcon from '@/screens/components/Icon/enum'

const TableHeaderRow = () => {
  return (
    <S.Header>
      <S.Col1>Трек</S.Col1>
      <S.Col2>Исполнитель</S.Col2>
      <S.Col3>Альбом</S.Col3>
      <S.Col4>
        <Icon icon={GetIcon.Watch} color="inherit" size={18} active={false} />
      </S.Col4>
    </S.Header>
  )
}

export default TableHeaderRow
