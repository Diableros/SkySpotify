import styled, { css } from 'styled-components'

type PropsType = {
  size?: number
  width?: number
  height?: number
  roundCrop?: boolean
  inActive?: boolean
  color?: string
}

const activeCss = css`
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.hover};
  }
  &:active {
    color: ${({ theme }) => theme.active};
  }
`

export const IconWrapper = styled.div<PropsType>`
  display: block;
  ${({ size }) =>
    size
      ? `
  width: ${size}px;
  height: ${size}px;
  `
      : null}

  ${({ width }) => (width ? `width: ${width}px` : null)};
  ${({ height }) => (height ? `height: ${height}px` : null)};
  ${({ roundCrop }) => (roundCrop ? `border-radius: 50%;` : null)}
  overflow: hidden;

  color: ${({ color }) => (!color ? `inherit` : color)};

  ${({ inActive }) => (!inActive ? activeCss : null)};

  & > svg {
    width: 100%;
    height: 100%;
  }
`

export default IconWrapper
