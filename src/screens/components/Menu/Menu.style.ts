import styled from 'styled-components'

type SliderType = {
  isMenuShow: boolean
}

export const Burger = styled.div`
  display: block;
  position: absolute;
  width: 20px;
  height: 10px;
  top: 100px;
  left: 36px;
  cursor: pointer;
  z-index: 5;

  &:hover::before,
  &:hover::after,
  &:hover span {
    background-color: ${({ theme }) => theme.color.hover};
  }

  &:active::after,
  &:active::before,
  &:active span {
    background-color: ${({ theme }) => theme.color.active};
  }

  &::before,
  &::after {
    left: 0;
    position: absolute;
    content: '';
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.color.textMain};
    z-index: 5;
  }

  &::before {
    top: 0px;
  }

  &::after {
    bottom: -1px;
  }

  span {
    position: absolute;
    left: 0;
    top: 5px;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.color.textMain};
    z-index: 5;
  }
`

export const Slider = styled.div<SliderType>`
  position: relative;
  width: 244px;
  height: 100%;
  background-color: ${({ theme }) => theme.color.bgMenu};
  display: flex;
  flex-direction: column;
  padding: 152px 36px;
  gap: 32px;
  transition: left 0.3s ease-in-out;
  ${({ isMenuShow }) => (isMenuShow ? `left: 0;` : `left: -100%;`)}

  & > * {
    &:hover {
      color: ${({ theme }) => theme.color.hover};
      transition: color 0.15s;
    }
    &:active {
      color: ${({ theme }) => theme.color.active};
    }
  }
`

export default Burger
