import styled from 'styled-components'
import { ButtonType } from './constants'

type HeaderButtonType = {
  isActive: boolean
}

type HeaderButtonSelectType = {
  variant: ButtonType
}

const activeStyle = `
  border-color: var(--active-color);
  color: var(--active-color);
`

export const HeaderButton = styled.button<HeaderButtonType>`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 19px;
  border: 1px solid #fff;
  text-align: center;
  padding: 7px 22px 10px;

  ${({ isActive }) => (isActive ? activeStyle : '')}

  &:hover {
    border-color: var(--hover-color);
    color: var(--hover-color);
  }

  &:active {
    border-color: var(--active-color);
    color: var(--active-color);
  }
`
export const HeaderButtonBox = styled.div`
  position: relative;
`

export const HeaderButtonSelect = styled.ul<HeaderButtonSelectType>`
  position: absolute;

  width: 248px;
  height: 305px;

  top: 50px;
  left: 0;

  border-radius: 12px;
  padding: 34px;

  display: flex;
  gap: 28px;

  flex-direction: column;

  background-color: var(--search-select-bg-color);

  &::-webkit-scrollbar {
    width: 4px;
    background: var(--scrollbar-bg-color);
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb {
    width: 4px;
    border-radius: 2px;
    background: #ffffff;
  }
`

export const HeaderButtonSelectItem = styled.li`
  font-size: 20px;
  line-height: 24px;
`
