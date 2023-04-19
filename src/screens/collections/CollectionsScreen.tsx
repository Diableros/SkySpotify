import { useParams } from 'react-router-dom'
import * as S from './CollectionsScreen.style'

const CollectionsScreen = () => {
  const { playlist } = useParams()

  return (
    <S.CollectionsScreen>
      Text from CollectionsScreen &quot;
      {playlist}&quot;
    </S.CollectionsScreen>
  )
}

export default CollectionsScreen
