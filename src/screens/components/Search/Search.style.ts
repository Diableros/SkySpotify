import styled from 'styled-components'

export const SearchBox = styled.div`
  position: relative;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: flex-end;
  border-bottom: 1px solid ${({ theme }) => theme.color.textSecondry};
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

export const SearchClear = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 2rem;
  right: 0px;
  top: 50%;
  transform: traslate(-50%, 0);
  color: ${({ theme }) => theme.color.textSecondry};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.color.hover};
  }

  &:active {
    color: ${({ theme }) => theme.color.active};
  }
`
