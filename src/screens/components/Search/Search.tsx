import Icon from '../Icon'
import GetIcon from '../Icon/enum'
import * as S from './Search.style'

const Search = () => {
  return (
    <S.SearchBox>
      <Icon icon={GetIcon.Search} size={19} active={false} />
      <S.SearchInput type="search" name="search" placeholder="Поиск" />
    </S.SearchBox>
  )
}

export default Search
