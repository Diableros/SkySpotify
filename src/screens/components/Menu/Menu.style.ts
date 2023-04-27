import styled from 'styled-components'

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
    background-color: ${({ theme }) => theme.hover};
  }

  &:active::after,
  &:active::before,
  &:active span {
    background-color: ${({ theme }) => theme.active};
  }

  &::before,
  &::after {
    left: 0;
    position: absolute;
    content: '';
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.textMain};
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
    background-color: ${({ theme }) => theme.textMain};
    z-index: 5;
  }
`

export default Burger
