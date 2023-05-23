import * as React from 'react'
import Icon from '../Icon'
import IconSprite from '../Icon/enum'
import * as S from './Search.style'
import { useAppDispatch } from '@/store/hooks/reduxHooks'
import { setSearchByText } from '@/store/searchSlice'

const Search = () => {
  const inputRef = React.useRef<HTMLInputElement | null>(null)
  const dispatch = useAppDispatch()
  const [searchString, setSearchString] = React.useState<string>('')

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement
    setSearchString(target.value.trim())
  }

  const handleEnterKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const target = event.target as HTMLInputElement
      setSearchString(target.value.trim())
    }
  }

  React.useEffect(() => {
    if (inputRef.current) inputRef.current.value = searchString
    dispatch(setSearchByText({ textSearch: searchString }))
  }, [searchString, setSearchString, dispatch])

  return (
    <S.SearchBox>
      <Icon icon={IconSprite.Search} size="19px" inactive />
      <S.SearchInput
        ref={inputRef}
        type="search"
        name="search"
        placeholder="Поиск"
        onChange={handleChange}
        onKeyDown={handleEnterKeyDown}
      />
      <S.SearchClear onClick={() => setSearchString('')}>
        <Icon icon={IconSprite.Cross} size="16px" />
      </S.SearchClear>
    </S.SearchBox>
  )
}

export default Search
