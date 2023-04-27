import styled from 'styled-components'

type HeaderButtonType = {
  isActive: boolean
}

const activeStyle = `
  border-color: var(--active-color);
  color: var(--active-color);
`

const activeHoverStyle = `
  border-color: var(--active-color);
  color: var(--active-color);
`

const hoverStyle = `
  border-color: var(--hover-color);
  color: var(--hover-color);
`

export const HeaderButton = styled.button<HeaderButtonType>`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 19px;
  /* border: 1px solid #fff; */
  border: 1px solid ${({ theme }) => theme.color};
  text-align: center;
  padding: 7px 22px 10px;

  ${({ isActive }) => (isActive ? activeStyle : '')}

  &:hover {
    ${({ isActive }) => (isActive ? activeHoverStyle : hoverStyle)}
  }

  &:active {
    border-color: var(--active-color);
    color: var(--active-color);
  }
`
export const HeaderButtonBox = styled.div`
  position: relative;
`

export const HeaderButtonSelect = styled.div`
  position: absolute;

  width: 248px;
  height: 305px;

  top: 50px;
  left: 0;

  border-radius: 12px;
  padding: 34px;

  background-color: var(--search-select-bg-color);
`
export const HeaderButtonSelectItemsBox = styled.ul`
  height: 100%;
  position: relative;
  display: flex;
  gap: 28px;

  flex-direction: column;
  overflow-y: auto;

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
  cursor: pointer;

  &:hover {
    color: var(--hover-color);
    text-decoration: underline;
  }

  &:active {
    color: var(--active-color);
  }
`
