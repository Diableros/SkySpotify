import Icon from '../Icon'
import IconSprite from '../Icon/enum'
import * as S from './Search.style'

const Search = () => {
  return (
    <S.SearchBox>
      <Icon icon={IconSprite.Search} size="19px" inActive />
      <S.SearchInput type="search" name="search" placeholder="Поиск" />
    </S.SearchBox>
  )
}

export default Search
