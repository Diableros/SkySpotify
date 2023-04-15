import { useSearchParams } from 'react-router-dom'
import * as S from './CollectionsScreen.style'

const CollectionsScreen = () => {
  const [searchParams] = useSearchParams()

  return (
    <S.CollectionsScreen>
      Text from CollectionsScreen &quot;
      {searchParams && searchParams.get('play_list')}&quot;
    </S.CollectionsScreen>
  )
}

export default CollectionsScreen
