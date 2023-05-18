import * as React from 'react'
import Icon from '../Icon'
import IconSprite from '../Icon/enum'
import * as S from './Search.style'
import { useAppDispatch } from '@/store/hooks/reduxHooks'
import { setSearchByText } from '@/store/searchSlice'

const Search = () => {
  const dispatch = useAppDispatch()
  const [searchString, setSearchString] = React.useState<string>('')

  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement
    setSearchString(target.value)
  }

  const handleEnterKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      dispatch(setSearchByText({ textSearch: searchString }))
    }
  }

  return (
    <S.SearchBox>
      <Icon icon={IconSprite.Search} size="19px" inactive />
      <S.SearchInput
        type="search"
        name="search"
        placeholder="Поиск"
        onInput={handleInput}
        onKeyDown={handleEnterKeyDown}
      />
    </S.SearchBox>
  )
}

export default Search
