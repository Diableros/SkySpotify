import styled, { css } from 'styled-components'
import { scrollBarStyles } from '@/global_style/globalStyles'

type HeaderButtonType = {
  isActive: boolean
}

type ButtonBadgeType = {
  number?: number
}

const activeStyle = css`
  border-color: ${({ theme }) => theme.color.active};
  color: ${({ theme }) => theme.color.active};
`

const activeHoverStyle = css`
  border-color: ${({ theme }) => theme.color.active};
  color: ${({ theme }) => theme.color.active};
`

const hoverStyle = css`
  border-color: ${({ theme }) => theme.color.hover};
  color: ${({ theme }) => theme.color.hover};
`

export const HeaderButtonBox = styled.div`
  position: relative;
`

export const HeaderButton = styled.button<HeaderButtonType>`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 19px;
  /* border: 1px solid #fff; */
  border: 1px solid ${({ theme }) => theme.color.textMain};
  text-align: center;
  padding: 7px 22px 10px;

  ${({ isActive }) => (isActive ? activeStyle : '')}

  &:hover {
    ${({ isActive }) => (isActive ? activeHoverStyle : hoverStyle)}
  }

  &:active {
    border-color: ${({ theme }) => theme.color.active};
    color: ${({ theme }) => theme.color.active};
  }
`

export const HeaderButtonSelect = styled.div`
  position: absolute;

  width: 248px;
  height: 305px;

  top: 50px;
  left: 0;

  border-radius: 12px;
  padding: 34px;

  background-color: ${({ theme }) => theme.color.bgDropList};
`
export const HeaderButtonSelectItemsBox = styled.ul`
  height: 100%;
  width: 100%;
  display: flex;
  gap: 28px;

  flex-direction: column;
  overflow-y: auto;

  ${scrollBarStyles}
`

export const HeaderButtonSelectItem = styled.li`
  font-size: 20px;
  line-height: 24px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.color.hover};
    /* text-decoration: underline; */
  }

  &:active {
    color: ${({ theme }) => theme.color.active};
  }
`

export const ButtonBadge = styled.div<ButtonBadgeType>`
  ${({ number }) => (!number ? `display: none;` : '')}
  position: absolute;
  width: 26px;
  height: 26px;
  background-color: ${({ theme }) => theme.color.active};
  border-radius: 50%;
  right: -8px;
  top: -10px;

  &:hover {
    cursor: pointer;
  }

  &::before {
    position: absolute;
    content: '${({ number }) => number || ''}';
    color: ${({ theme }) => theme.color.textMain};
    font-size: 14px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:hover + div {
    visibility: visible;
    cursor: pointer;
  }
`

export const ButtonSearchCancel = styled.div`
  position: absolute;
  visibility: hidden;
  width: 10px;
  height: 10px;
  top: -5px;
  right: 3px;
  color: ${({ theme }) => theme.color.hover};
  pointer-events: none;

  &:hover {
    visibility: visible;
    color: ${({ theme }) => theme.color.hover};
  }
`
