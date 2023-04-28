import styled from 'styled-components'

export const SearchBox = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: flex-end;
  border-bottom: 1px solid ${({ theme }) => theme.textSecondry};
  padding: 14px;
  gap: 1rem;
  flex: none;
  color: inherit;
  transition: opacity 0.15s;
`

export const SearchInput = styled.input`
  width: 100%;
  appearance: none;

  &::-webkit-search-cancel-button {
    display: none;
  }

  &::placeholder {
    color: inherit;
    transition: opacity 0.15s;
  }

  &:focus::placeholder {
    opacity: 0.2;
  }
`
